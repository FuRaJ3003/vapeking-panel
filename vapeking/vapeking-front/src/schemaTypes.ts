// register

export interface RegisterMutation {
    register: boolean;
}

export interface RegisterMutationVariables {
    email: string;
    password: string;
    name: string;
    surename: string;
}

// login

export interface LoginMutation {
    login: boolean;
}

export interface LoginMutationVariables {
    email: string;
    password: string;
}

// verify token
export interface VerifyToken {
    token: string;
    payload: string;
}

export interface VerifyTokenVariables {
    token: string;
}

// user query

export interface UserQuery {
    email: string;
}

export interface UserQueryVariables {
    email: string,
}