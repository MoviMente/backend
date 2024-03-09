import {UserRepositoryInterface} from "../RepositoryInterface/UserRepositoryInterface";
import inject from "../../Infra/di/Inject";

export default class CreateUser {
    @inject("UserRepositoryInterface")
    userRepository?: UserRepositoryInterface;
    constructor (
        userRepository?: UserRepositoryInterface
    ) {
        this.userRepository = userRepository;
    }

    async execute (input: any): Promise<any> {
        const transaction = await this.userRepository?.createUser(input)
        return {
            transaction
        }
    }
}