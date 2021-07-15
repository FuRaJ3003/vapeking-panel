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