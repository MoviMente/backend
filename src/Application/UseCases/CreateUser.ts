import {UserRepositoryInterface} from "../RepositoryInterface/UserRepositoryInterface";
import inject from "../../Infra/di/Inject";
import {UserInput} from "../../Domain/User/UserType";
import User from "../../Domain/User/User";

export default class CreateUser {
    @inject("UserRepositoryInterface")
    userRepository?: UserRepositoryInterface;
    constructor (
        userRepository?: UserRepositoryInterface
    ) {
        this.userRepository = userRepository;
    }

    async execute (input: UserInput): Promise<any> {
        const user = new User(
            input.email,
            input.password,
            input.role
        );

        const userCreated = await this.userRepository?.createUser(user)
        return userCreated
    }
}