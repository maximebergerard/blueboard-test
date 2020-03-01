import { useState } from 'react';
import { Form } from '../../interfaces'

const useSignUpForm = () => {
    const [inputValue, setInputValue] = useState<Form>({
        name: '',
        mail: '',
        password: '',
    })
    const handleSubmit = (e: any) => {
        if (e) {
            alert(`Thanks ${inputValue.name}`
            )
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setInputValue(inputs => ({
            ...inputs, 
            [e.target.name]: e.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputValue
    };
}

export default useSignUpForm
