import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Header = styled.header`
    margin-bottom: 40px;
    
    button {
        margin-left: 30px;
    }
`;

const UserName = styled.span`
    margin-top: 20px;
`;

const DashboardHeader = ({ children, userName }) => (
    <Header>
        <UserName>{ userName }</UserName>
        { children }
    </Header>
);

DashboardHeader.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    userName: PropTypes.string,
};

export default DashboardHeader;