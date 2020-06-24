import React, { useCallback, useState } from 'react';


const useLoginFormInputs = (submitCallback) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const emailHandler = useCallback((e) => setEmail(e.currentTarget.value), []);
    const passwordHandler = useCallback((e) => setPassword(e.currentTarget.value), []);

    const submit = (e) => {
        e.preventDefault();
        submitCallback(email, password);
    };

    return { emailHandler, passwordHandler, submit };
};

export default useLoginFormInputs;