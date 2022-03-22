import React, { useRouter } from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

//TEXT CONT
const TextCont = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15vh;
`;

const SignUpTitle = styled.h1`
    color: #FFFFFF;
    font-size: 23px;
    font-weight: 800;
`;

const SignUpText = styled.p`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
`;

//Sign up INPUT CONT

const SignUpInputCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

const SignUpInput = styled.input`
    height: 60px;
    width: 340px;
    background: #3F4142;
    border: none;
    border-radius: 10px;
    color: #979797;
    outline: none;
    font-size: 17px;
    margin-bottom: 20px;
    padding-left: 15px;
`

const SignUpBtn = styled.button`
    height: 60px;
    width: 340px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    background: #A61D11;
    color: white;
    margin-top: 3rem;
`;

//Sign Up
const SignUpIn = styled.p`
    font-size: 17px;
    color: white;
    margin-top: 5rem;
    font-weight: 400;
`;

const SignInNow = styled.span`
    font-size: 17px;
    color: #1877F2;
`;

const SignUp = ({
    onClickLogIn = () => {},
    onClickSignUp = () => {},
    inputName = () => {},
    inputEmail = () => {},
    inputPassword = () => {},
}) => {
    return <Cont>
        <TextCont>
            <SignUpTitle>Sign Up</SignUpTitle>
            <SignUpText>Create an account</SignUpText>
        </TextCont>

        <SignUpInputCont>
            <SignUpInput onChange={inputName} type="text" placeholder='Enter Name'></SignUpInput>
            <SignUpInput onChange={inputEmail} type="email" placeholder='Enter Email'></SignUpInput>
            <SignUpInput onChange={inputPassword} type="Password" placeholder='Password'></SignUpInput>

            <SignUpBtn onClick={onClickSignUp} >Sign Up</SignUpBtn>
        </SignUpInputCont>

        <SignUpIn>Already have an account? <SignInNow onClick={onClickLogIn}>Log In now</SignInNow ></SignUpIn>

        {/* <DragIcon onClickDrag={onClickDrag} src="/Drag.png"></DragIcon> */}

    </Cont>
}

export default SignUp;