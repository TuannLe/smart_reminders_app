export interface ISignIn {
    email: string;
    password: string;
}

export interface ISignUp extends ISignIn {
    username: string;
}

export interface IResAuth {
    email: string,
    username: string,
    access_token: string
}

