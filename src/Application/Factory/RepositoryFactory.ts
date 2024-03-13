import {UserRepositoryInterface} from "../RepositoryInterface/UserRepositoryInterface";

export default interface RepositoryFactory {
    createUserRepository (): UserRepositoryInterface;
}