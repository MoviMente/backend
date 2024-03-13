import {UserInput} from "../../Domain/User/UserType";


export interface UserRepositoryInterface {
    createUser(userData: UserInput): Promise<any>;
    getUsers(): Promise<any[]>
}