import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ServiceProviderContext } from '@/services/serviceProvider';
import Button from '@/components/ui/Button';
import InputPassword from '@/components/ui/InputPassword';
import InputText from '@/components/ui/InputText';
import useLoginFormInputs from '@/components/pages/useLoginInputs';


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

    const serviceProvider = useContext(ServiceProviderContext);

    const history = useHistory();

    const {
        emailHandler,
        passwordHandler,
        submit,
    } = useLoginFormInputs((email, password) => {
        serviceProvider.serverManager
            .signUp(email, password)
            .then(() => history.push('/'));
    });

    return (
        <Form onSubmit={ submit }>
            <InputText
                id="email"
                placeholder="email"
                handler={ emailHandler }
            />

            <InputPassword
                id="password"
                placeholder="password"
                handler={ passwordHandler }
            />

            <Button
                text="Sign Up"
                type="submit"
            />
        </Form>
    );
};

export default SignUp;