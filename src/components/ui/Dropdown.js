import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import WithOuterClick from './WithOuterClick';


const Button = styled.button`
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: inherit;
    line-height: 1;
    text-transform: uppercase;
    background: none;
    border: 1px solid #000000;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
    
    &:focus {
        outline: none;
    }
`;

const ButtonTitle = styled.span`
    display: inline-block;
    padding: 8px 12px;
`;

const ButtonIcon = styled.span`
    display: inline-block;
    padding: 8px 12px;
    border-left: 1px solid #000000;
`;

const Container = styled.article`
    position: relative;
`;

const List = styled.section`
    position: absolute;
    top: 29px;
    left: 0;
    padding: 12px 20px 20px 10px;
    background: #ffffff;
    border: 1px solid #000000;
    z-index: 1;
    
    & > *:not(:last-child) {
        margin-bottom: 8px;
    }
`;

const Dropdown = ({ title, children }) => {
    const [ expanded, setExpanded ] = useState(false);

    return (
        <WithOuterClick handler={ () => setExpanded(false) }>
            <Container>
                <Button onClick={ () => setExpanded(!expanded) }>
                    <ButtonTitle>{ title }</ButtonTitle>
                    <ButtonIcon>+</ButtonIcon>
                </Button>
                { expanded && <List>{ children }</List> }
            </Container>
        </WithOuterClick>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array,
};

export default Dropdown;