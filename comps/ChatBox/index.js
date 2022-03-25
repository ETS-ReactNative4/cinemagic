import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";
import { io } from "socket.io-client";

const Cont = styled.div`
    display: ${props => props.display};
    position:fixed;
    bottom: 0px;
    margin-bottom: 20px;
`;

const BoxCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 390px; 
    height: 90vh;
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
    flex:4;
    text-align:center;
`;

const Mid = styled.div`
    flex:7;
    overflow-y: scroll;
`

const ChatClose = styled.img`
    width: 25px;
    height: 25px;
    flex:1;
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
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    color: #767676;
    font-size: 15px;
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
    margin-right:25px;
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
`;

const NameBoard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 390px; 
    margin-right:5px;
    margin-left:5px;
    height: 55px;
    background: rgba(37, 38, 38);
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const NameInput = styled.input`
    width: 75vw;
    height: 39px;
    margin-right:25px;
    background: none;
    border: none;
    border-radius: 10px;
    color: #E0E0E0;
    font-size: 15px;
    outline: none;
`;

const NameMsgSent = styled.img`
    width: 25px;
    height: 25px;
`;

const ChatBox = ({
    onPressCloseCB = () => { },
    display = "none",
}) => {
    const { theme } = useTheme();

    const today = new Date();
    const time = today.getHours() + " : " + (today.getMinutes()<10?'0':'') + today.getMinutes();

    //----sockets----
    const [mySock, setMySock] = useState(null);
    const [blocks, setBlocks] = useState([]);
    const [txt, setTxt] = useState("");
    const [users, setUsers] = useState({})
    const [userName, setUserName] = useState(false)
    const [name, setName] = useState("")

    useEffect(() => {
        const socket = io("https://cinemagicproject.herokuapp.com/")

        //everytime with a user connect
        socket.on("user_connected", (allusers) => {
            setUsers(allusers);
        })

        //when user click the button
        socket.on("change", (id, txt, name) => {
            setBlocks((prev) => [
                ...prev,
                `${name}: ${txt}`
            ])
        })

        setMySock(socket);
    }, [])

    const SendMessage = async () => {
        mySock.emit("send_msg", txt, name);
    }

    //----sockets----

    return <Cont display={display}>
        <BoxCont chatboxBg={comp_themes[theme].chatbox_bg}>
            <Top chattopBg={comp_themes[theme].chattop_bg}>
                <div style={{ flex: 1 }}></div>
                <BoxText chatText={comp_themes[theme].chat_text}>Movie Discussion Board</BoxText>
                <ChatClose src={comp_themes[theme].popUpSettingImg} onClick={onPressCloseCB}></ChatClose>
            </Top>
            <Mid>
                <ChatCont chatboxBg={comp_themes[theme].chatbox_bg}>
                    <ChatTime>{time}</ChatTime>
                    {/* <Comment chatText={comp_themes[theme].chat_text}>{cmt}</Comment> */}
                    {blocks.map((o, i) =>
                     <div key={i} style={{padding: 10, color: 'white'}}>
                        {o}
                    </div>)}
                </ChatCont>
            </Mid>
            <Bot>
                {userName === false ?
                    <NameBoard>
                    <NameInput type="text" placeholder="What is your name?" onChange={(e) => setName(e.target.value)}></NameInput>
                    <NameMsgSent onClick={()=>setUserName(userName === false?true:false)} src="/send.png"></NameMsgSent>
                </NameBoard>
                : <TextBoard>
                <ChatInput type="text" placeholder="Type something..." onChange={(e) => setTxt(e.target.value)}></ChatInput>
                <MsgSent onClick={SendMessage} src="/send.png"></MsgSent>
                </TextBoard>}
            </Bot>
        </BoxCont>
    </Cont>
}

export default ChatBox;