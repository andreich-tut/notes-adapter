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

const SignIn = () => {

    const [ email, setEmail ] = useState('');

    const [ password, setPassword ] = useState('');

    const serviceProvider = useContext(ServiceProviderContext);

    const history = useHistory();

    const handleEmailInputChange = (e) => setEmail(e.currentTarget.value);

    const handlePasswordInputChange = (e) => setPassword(e.currentTarget.value);

    const signIn = (e) => {
        e.preventDefault();

        serviceProvider.serverManager
            .signIn(email, password)
            .then((success) => {
                success ? history.push('/') : history.reload();
            });
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
                text="Sign In"
                type="submit"
                handler={ signIn }
            />
        </Form>
    );
};

export default SignIn;