import {UserInput} from "../../Domain/User/UserType";
import User from "../../Domain/User/User";


export interface UserRepositoryInterface {
    createUser(userData: User): Promise<any>;
    getUsers(): Promise<any[]>
}