export interface RegisterMutation {
    register: boolean;
}

export interface RegisterMutationVariables {
    email: string;
    password: string;
    name: string;
    surename: string;
}