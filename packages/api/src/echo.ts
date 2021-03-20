export interface Echo {
    readonly message: string;
}

export const echoEndpoint = (message: string): Promise<Echo> => {
    return Promise.resolve({ message });
}