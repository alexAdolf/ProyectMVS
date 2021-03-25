export interface User {
    email: string,
    name: string,
    phoneNumber: Phone,
    profile: string,
    newsletter: boolean,
    uid: string
}

interface Phone {
    phone: string,
    description: string
}

export interface User {
}
