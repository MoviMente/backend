import fastify from 'fastify'
import FastifyAdapter from "./Infra/Adapters/FastifyAdapter";

const server = fastify()

server.get('/', async (request, reply) => {
    return 'Hello there! 👋'
})

const httpServer = new FastifyAdapter();
httpServer.listen(3000);
