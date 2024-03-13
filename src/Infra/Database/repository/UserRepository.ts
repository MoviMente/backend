import {Prisma, PrismaClient} from '@prisma/client';
import {UserRepositoryInterface} from "../../../Application/RepositoryInterface/UserRepositoryInterface";
import User from "../../../Domain/User/User";

const prisma = new PrismaClient();

export class UserRepository implements UserRepositoryInterface{
    prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient();
    }
    async createUser(userData: User): Promise<any> {
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: userData.email,
                    password: userData.password,
                    role: userData.role
                },
            });
            return user;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new Error('The email address is already in use');
            }
            throw error;
        }
    }

    async getUsers(): Promise<any[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }
}

