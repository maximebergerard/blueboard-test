// Button props types
export type ButtonType = {
    text: string;
}

// Card props type
export type CardType = {
    category: string;
    title: string;
    paragraph: string;
    image?: string;
    className?: string;
}

// Input props type
export type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required: boolean;
}

// Form interface
export interface Form {
    name: string;
    mail: string;
    password: string;
}

// Features API interface
export interface Feature {
    title: string;
    body: string;
    id: number;
}

//Features API services
interface ServiceInit {
    status: 'init';
}

interface ServiceLoading {
    status: 'loading';
}

interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
}

interface ServiceError {
    status: 'error';
    error: Error;
}

export type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;
