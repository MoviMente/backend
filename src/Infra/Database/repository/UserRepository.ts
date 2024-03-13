import { PrismaClient } from '@prisma/client';
import {UserRepositoryInterface} from "../../../Application/RepositoryInterface/UserRepositoryInterface";
import User from "../../../Domain/User/User";
import {UserInput} from "../../../Domain/User/UserType";

const prisma = new PrismaClient();

export class UserRepository implements UserRepositoryInterface{
    prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient();
    }
    async createUser(userData: UserInput): Promise<any> {
        console.log(userData);
        const user = await this.prisma.user.create({
            data: userData,
        });
        return user;
    }

    async getUsers(): Promise<any[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }
}

