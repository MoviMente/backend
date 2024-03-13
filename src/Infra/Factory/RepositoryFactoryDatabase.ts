import RepositoryFactory from "../../Application/Factory/RepositoryFactory";
import {UserRepository} from "../Database/repository/UserRepository";
import {UserRepositoryInterface} from "../../Application/RepositoryInterface/UserRepositoryInterface";

export class RepositoryFactoryDatabase implements RepositoryFactory {
    createUserRepository(): UserRepositoryInterface {
        return new UserRepository();
    }
}