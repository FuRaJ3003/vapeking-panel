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
    userEmail: {
        id: number;
        email: string;
        name: string;
        surename: string;
        store: {
            id: number;
            name: string;
            city: string;
        }
        isstaff: boolean;
        isadmin: boolean;
        isactive: boolean;
        ismanager: boolean;
        isSuperuser: boolean;
    }
}


export interface UserQueryVariables {
    email: string,
}