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
    margin-top: 12vh;
`;

const LogInTitle = styled.h1`
    color: #FFFFFF;
    font-size: 23px;
    font-weight: 800;
`;

const LogInText = styled.p`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
`;

//LOGIN INPUT CONT

const LogInInputCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

const LogInput = styled.input`
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

const LogInBtn = styled.button`
    height: 60px;
    width: 340px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    background: #A61D11;
    color: white;
    margin-top: 3rem;
`

//Space ----or-----

const SpaceCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
`;

const Space = styled.div`
    height: 0px;
    width: 139px;
    margin-left: 5px;
    margin-right: 5px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const SpaceText = styled.p`
    font-size: 15px;
    color: #FFFFFF;
    line-height: 18px;
    text-align: center;
`;

//Sign In choice
const LoginChoiceCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
`;

const LogInChoice = styled.button`
    width: 87px;
    height: 61px;
    border: 1px solid #979797;
    box-sizing: border-box;
    border-radius: 10px;
    background: none;
`;

const LogInChoiceImg = styled.img`
    width: 35px;
    height: 35px;
`;

//Sign Up

const SignUp = styled.p`
    font-size: 17px;
    color: white;
    margin-top: 4rem;
    font-weight: 400;
`;

const SignUpNow = styled.span`
    font-size: 17px;
    color: #1877F2;
`;

const LogIn = ({
    LoginTitle = "Hello Again!",
    LoginText = "Welcome back, you've been missed!",
    LoginBtn = "Sign In",
    onClickLogIn = () => {},
    inputEmail = () => {},
    inputPassword = () => {},
    onClickSignUp = () => {},
}) => {
    return <Cont>
        <TextCont>
            <LogInTitle>{LoginTitle}</LogInTitle>
            <LogInText>{LoginText}</LogInText>
        </TextCont>

        <LogInInputCont>
            <LogInput onChange={inputEmail} type="email" placeholder='Enter Username'></LogInput>
            <LogInput onChange={inputPassword} type="Password" placeholder='Password'></LogInput>

            <LogInBtn onClick={onClickLogIn} >{LoginBtn}</LogInBtn>
        </LogInInputCont>

        <SpaceCont>
            <Space></Space>
            <SpaceText>Or</SpaceText>
            <Space></Space>
        </SpaceCont>

        <LoginChoiceCont>
            <LogInChoice>
                <LogInChoiceImg src="/google.png"></LogInChoiceImg>
            </LogInChoice>
        </LoginChoiceCont>

        <SignUp>Not a member? <SignUpNow onClick={onClickSignUp}>Register now</SignUpNow ></SignUp>

        {/* <DragIcon onClickDrag={onClickDrag} src="/Drag.png"></DragIcon> */}

    </Cont>
}

export default LogIn;