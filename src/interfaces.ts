// Button props types
export type ButtonInterface = {
    text: string;
}

// Card props type
export type CardInterface = {
    category: string;
    title: string;
    paragraph: string;
    image?: string;
    className?: string;
}

// // Features props types
// export type FeatureProps = {
//     title: string;
//     category: string;
// }

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
