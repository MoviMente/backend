import HttpServer from "./HttpServer";
import fastify from "fastify";
import fastifyCors from '@fastify/cors';
import fastifyFormbody from '@fastify/formbody';
export default class FastifyAdapter implements HttpServer {
    app: any;

    constructor () {
        this.app = fastify();
        this.app.register(fastifyCors);
        this.app.register(fastifyFormbody);
    }

    on(method: string, url: string, callback: Function): void {
        this.app.route({
            method,
            url: '/',
            schema: {
                querystring: {
                    name: { type: 'string' },
                    excitement: { type: 'integer' }
                },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            hello: { type: 'string' }
                        }
                    }
                }
            },
            handler: function (request, reply) {
                reply.send({ hello: 'world' })
            }
        });
    }

    listen(port: number): void {
        // @ts-ignore
        this.app.listen({port}, (err) => {
            if (err) {
                console.error(err.message())
                process.exit(1)
            }
            console.log(`Started server at http://localhost:${port}`)
        })
    }
}