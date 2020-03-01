import { useState } from 'react';
import { Input } from '../../interfaces'

const useSignUpForm = () => {
    const [inputValue, setInputValue] = useState<Input>({
        name: '',
        mail: '',
        password: '',
    })
    const handleSubmit = (event: any) => {
        if (event) {
            alert(`Designer Created !
                Name: ${inputValue.name}
                Email: ${inputValue.mail}`
            )
        }
    }
    const handleInputChange = (event: any) => {
        event.persist();
        setInputValue(inputs => ({
            ...inputs, 
            [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputValue
    };
}

export default useSignUpForm
