import React, { useRouter } from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Cont = styled.div`
    display: ${props => props.display};
    position:fixed;
    top: 220px;
    z-index: 1;
`;

const BoxCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 390px; 
    height: 500px;
    background: ${props => props.chatboxBg};
    border-radius: 20px;
    position: relative;
    bottom: 0;
    z-index:2;
`;

const Top = styled.div`
    display: flex;
    align-items:center;
    width: 390px; 
    background-color: ${props => props.chattopBg};
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    z-index:1;
    flex:1;
`
const BoxText = styled.h1`
    color: ${props => props.chatText};
    height:13px;
    font-size: 18px;
    flex:1;
    text-align:center;
`;

const Mid = styled.div`
    flex:5;
`

const ChatClose = styled.img`
    width: 25px;
    height: 25px;
    flex:1;
    margin-right:-25px;
`;

const ChatCont = styled.div`
    display: flex;
    flex-direction: column;
    width:385px;
    background-color:${props => props.chatboxBg};
    margin-bottom:3px;
`;

const ChatTime = styled.p`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    color: #767676;
    font-size: 15px;
`;

const Comment = styled.h4`
    margin-left: 20px;
    color: ${props => props.chatText};
    font-size: 16px;
`;

const Bot = styled.div`
    display:flex;
    justify-content:center;
    flex:2;
`;

const TextBoard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:62px;
    width: 390px; 
    margin-right:5px;
    margin-left:5px;
    height: 55px;
    background: rgba(37, 38, 38);
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const ChatInput = styled.input`
    width: 75vw;
    height: 39px;
    margin-left:10px;
    background: none;
    border: none;
    border-radius: 10px;
    color: #E0E0E0;
    font-size: 15px;
    outline: none;
`;

const MsgSent = styled.img`
    width: 25px;
    height: 25px;
    margin-right:20px;
`;


const ChatBox = ({
    onPressCloseCB = () => { },
    onPressSend = () => {},
    display = "none",
    cmt = "ShuShu Gang:)",
    time = "2:22AM"
}) => {
    const { theme } = useTheme();
    return <Cont  display ={display}>
        <BoxCont chatboxBg={comp_themes[theme].chatbox_bg}>
            <Top chattopBg={comp_themes[theme].chattop_bg}>
                <div style={{flex:1}}></div>
                <BoxText chatText={comp_themes[theme].chat_text}>CHAT</BoxText>
                <ChatClose src={comp_themes[theme].popUpSettingImg} onClick={onPressCloseCB}></ChatClose>
            </Top>
            <Mid>
                <ChatCont chatboxBg={comp_themes[theme].chatbox_bg}>
                    <ChatTime>{time}</ChatTime>
                    <Comment chatText={comp_themes[theme].chat_text}>{cmt}</Comment>
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