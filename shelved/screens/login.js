import React from 'react';
import { StatusBar } from 'expo-status-bar';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from '../components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/favicon.png')}/>
                <PageTitle> Shelved </PageTitle> 
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;