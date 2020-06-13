import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ServiceProviderContext } from '@/services/serviceProvider';
import Button from '@/components/ui/Button';
import InputPassword from '@/components/ui/InputPassword';
import InputText from '@/components/ui/InputText';


const Form = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 30px;
    
    input {
        margin-right: 20px;
    }
`;

const SignUp = () => {

    const [ email, setEmail ] = useState('');

    const [ password, setPassword ] = useState('');

    const serviceProvider = useContext(ServiceProviderContext);

    const history = useHistory();

    const handleEmailInputChange = (e) => setEmail(e.currentTarget.value);

    const handlePasswordInputChange = (e) => setPassword(e.currentTarget.value);

    const signUp = (e) => {
        e.preventDefault();

        serviceProvider.serverManager
            .signUp(email, password)
            .then(() => history.push('/'));
    }

    return (
        <Form>
            <InputText
                id="email"
                placeholder="email"
                handler={ handleEmailInputChange }
            />

            <InputPassword
                id="password"
                placeholder="password"
                handler={ handlePasswordInputChange }
            />

            <Button
                text="Sign Up"
                type="submit"
                handler={ signUp }
            />
        </Form>
    );
};

export default SignUp;