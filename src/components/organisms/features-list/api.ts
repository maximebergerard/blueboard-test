import { useState, useEffect } from 'react'
import { Feature, Service } from '../../../interfaces'

export type Features = Feature[]

// Fetching API and manage error 
const useFeatureService = () => {
    const [result, setResult] = useState<Service<Features>>({
        status: 'loading'
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response}))
            .catch(error => setResult({ status: 'error', error}))
    }, [])
    
    console.log(result);
    return result
}

export default useFeatureService