import {UserRepositoryInterface} from "../RepositoryInterface/UserRepositoryInterface";
import inject from "../../Infra/di/Inject";
import {UserInput} from "../../Domain/User/UserType";

export default class CreateUser {
    @inject("UserRepositoryInterface")
    userRepository?: UserRepositoryInterface;
    constructor (
        userRepository?: UserRepositoryInterface
    ) {
        this.userRepository = userRepository;
    }

    async execute (input: UserInput): Promise<any> {
        const user = await this.userRepository?.createUser(input)
        return user
    }
}