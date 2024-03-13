import RepositoryFactory from "./RepositoryFactory";
import CreateUser from "../UseCases/CreateUser";

export default class UseCaseFactory {

    constructor (readonly repositoryFactory: RepositoryFactory) {
    }

    createUserFactory () {
        return new CreateUser(this.repositoryFactory.createUserRepository());
    }
}