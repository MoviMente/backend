import fastify from 'fastify'
import FastifyAdapter from "./Infra/Adapters/FastifyAdapter";
import Registry from "./Infra/di/Registry";
import CreateUser from "./Application/UseCases/CreateUser";
import UserController from "./Application/Controllers/UserController";

const httpServer = new FastifyAdapter();

const registry = Registry.getInstance();
registry.provide("CreateUser", CreateUser);
new UserController(httpServer);

httpServer.listen(3000);
