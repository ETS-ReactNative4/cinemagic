import React, { useRouter } from 'react';
import styled from 'styled-components';

const Cont = styled.div``;

const BoxCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw; 
    height: 592px;
    background: #383838;
    border-radius: 20px;
    position: fixed;
    bottom: 0;
    z-index:2;
`;

const Top = styled.div`
    display: flex;
    align-items:center;
    width: 100vw;
    background-color: #383838;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    z-index:1;
    flex:1;
`
const BoxText = styled.h1`
    color: #E0E0E0;
    font-size: 20px;
    flex:1;
    text-align:center;
`;

const Mid = styled.div`
    flex:6;
`

const ChatClose = styled.img`
    width: 27px;
    height: 27px;
    flex:1;
    margin-left:10px;
`;

const ChatCont = styled.div`
    display: flex;
    flex-direction: column;
    width:100vw;
    background-color:#383838;
    margin-bottom:3px;
`;

const ChatTime = styled.p`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    color: #767676;
    font-size: 16px;
`;

const Comment = styled.h4`
    margin-left: 20px;
    color: #E0E0E0;
    font-size: 18px;
`;

const Bot = styled.div`
    display:flex;
    justify-content:center;
    flex:1;
`;

const TextBoard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 95vw;
    height: 69px;
    background: rgba(37, 38, 38);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

const ChatInput = styled.input`
    width: 75vw;
    height: 39px;
    background: none;
    border: none;
    border-radius: 10px;
    color: #E0E0E0;
    font-size: 14px;
    outline: none;
`;

const MsgSent = styled.img`
    width: 27px;
    height: 27px;
`;


const ChatBox = ({
    onPressCloseCB = () => { },
    onPressSend = () => {},
    cmt = "ShuShu Gang:)",
    time = "2:22AM"
}) => {
    return <Cont>
        <BoxCont>
            <Top>
                <div style={{flex:1}}></div>
                <BoxText>CHAT</BoxText>
                <ChatClose onClick={onPressCloseCB} src="/close-dark.svg"></ChatClose>
            </Top>
            <Mid>
                <ChatCont>
                    <ChatTime>{time}</ChatTime>
                    <Comment>{cmt}</Comment>
                </ChatCont>
            </Mid>
            <Bot>
                <TextBoard>
                    <ChatInput type="text" placeholder="Type something..."></ChatInput>
                    <MsgSent onClick={onPressSend} src="/sent.svg"></MsgSent>
                </TextBoard>
            </Bot>
        </BoxCont>
    </Cont>
}

export default ChatBox;