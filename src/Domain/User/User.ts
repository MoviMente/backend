export default class User {
    private _id?: number;
    private _email: string;
    private _password: string;
    private _role: number;
    private _unlocked?: Date;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(
        email: string,
        password: string,
        role: number,
        unlocked?: Date,
        createdAt?: Date,
        updatedAt?: Date,
        id?: number,
    ) {
        this._id = id;
        this._email = email;
        this._password = password;
        this._role = role;
        this._unlocked = unlocked;
        this._createdAt = createdAt || new Date();
        this._updatedAt = updatedAt || new Date();
    }

    get id(): number | undefined {
        return this._id;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get role(): number {
        return this._role;
    }

    get unlocked(): Date | undefined {
        return this._unlocked;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }
    set email(email: string) {
        this._email = email;
    }

    set password(password: string) {
        this._password = password;
    }

    set role(role: number) {
        this._role = role;
    }

    set unlocked(unlocked: Date | undefined) {
        this._unlocked = unlocked;
    }
}
