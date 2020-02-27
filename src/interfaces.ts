// Button interface
export interface ButtonInterface {
    text: string;
}

export interface CardInterface {
    category: string;
    title: string;
    paragraph: string;
    image?: string;
    className?: string;
}