import HttpServer from "../../Infra/Adapters/HttpServer";
import CreateUser from "../UseCases/CreateUser";
import inject from "../../Infra/di/Inject";
import UseCaseFactory from "../Factory/UseCaseFactory";
import {UserInput} from "../../Domain/User/UserType";

export default class UserController {
    @inject("CreateUser")
    createUser?: CreateUser;

    constructor (httpServer: HttpServer) {
        httpServer.on("post", "/user", async (params: any, body: UserInput) => {
            const output = await this.createUser?.execute(body);
            return output;
        });
    }
}

