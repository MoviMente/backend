import HttpServer from "./HttpServer";
import fastify, {FastifyReply, FastifyRequest} from "fastify";
import fastifyCors from '@fastify/cors';
import fastifyFormbody from '@fastify/formbody';
export default class FastifyAdapter implements HttpServer {
    app: any;

    constructor () {
        this.app = fastify({ logger: true });
        this.app.register(fastifyCors);
        this.app.register(fastifyFormbody);
    }

    on(method: string, url: string, callback: Function): void {
        this.app.route({
            method: method.toUpperCase(),
            url: url.replace(/\{|\}/g, ""),
            handler: async (request: FastifyRequest, reply: FastifyReply ) => {
                try {
                    const output = await callback(request.params, request.body);
                    reply.send(output);
                } catch (error: any) {
                    reply.status(422).send(error.message);
                }
            }
        });
    }

    listen(port: number): void {
        this.app.listen({port}, (err: any) => {
            if (err) {
                console.error(err.message())
                process.exit(1)
            }
            console.log(`Started server at http://localhost:${port}`)
        })
    }
}