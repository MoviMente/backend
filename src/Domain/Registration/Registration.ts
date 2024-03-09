import User from "../User/User";

class Registration {
    private _id: string;
    private _user: User;
    private _userId: number;
    private _name: string;
    private _birthday?: Date;
    private _zipCode: string;
    private _address: string;
    private _city: string;
    private _state: string;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(
        id: string,
        user: User,
        userId: number,
        name: string,
        zipCode: string,
        address: string,
        city: string,
        state: string,
        birthday?: Date,
        createdAt?: Date,
        updatedAt?: Date
    ) {
        this._id = id;
        this._user = user;
        this._userId = userId;
        this._name = name;
        this._birthday = birthday;
        this._zipCode = zipCode;
        this._address = address;
        this._city = city;
        this._state = state;
        this._createdAt = createdAt || new Date();
        this._updatedAt = updatedAt || new Date();
    }

    get id(): string {
        return this._id;
    }

    get user(): User {
        return this._user;
    }

    get userId(): number {
        return this._userId;
    }

    get name(): string {
        return this._name;
    }

    get birthday(): Date | undefined {
        return this._birthday;
    }

    get zipCode(): string {
        return this._zipCode;
    }

    get address(): string {
        return this._address;
    }

    get city(): string {
        return this._city;
    }

    get state(): string {
        return this._state;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }
    set name(name: string) {
        this._name = name;
    }

    set birthday(birthday: Date | undefined) {
        this._birthday = birthday;
    }

    set zipCode(zipCode: string) {
        this._zipCode = zipCode;
    }

    set address(address: string) {
        this._address = address;
    }

    set city(city: string) {
        this._city = city;
    }

    set state(state: string) {
        this._state = state;
    }
}
