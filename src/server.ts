import fastify from 'fastify'
import FastifyAdapter from "./Infra/Adapters/FastifyAdapter";
import Registry from "./Infra/di/Registry";
import CreateUser from "./Application/UseCases/CreateUser";
import UserController from "./Application/Controllers/UserController";
import UseCaseFactory from "./Application/Factory/UseCaseFactory";
import {RepositoryFactoryDatabase} from "./Infra/Factory/RepositoryFactoryDatabase";

const httpServer = new FastifyAdapter();
const registry = Registry.getInstance();


const repositoryFactory = new RepositoryFactoryDatabase();
const useCaseFactory = new UseCaseFactory(repositoryFactory);

//add all use cases in here
const createUser = new CreateUser(useCaseFactory.repositoryFactory.createUserRepository());

//register the use cases
registry.provide("CreateUser", createUser);

//add instance of controller classes
new UserController(httpServer);

httpServer.listen(3000);
