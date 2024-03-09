import User from "../../Domain/User/User";


export interface UserRepositoryInterface {
    createUser(userData: User): Promise<User>;
    getUsers(): Promise<User[]>
}