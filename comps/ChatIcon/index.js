import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 100px;
    right: 30px;
    z-index:10;
`;

const ChatIcon = styled.img`
    width: 70px;
    height: 70px;
    margin-bottom: -20px;
`;

const ChatIcons = ({
    onClickChat = () => {},
}) => {
    return <Cont  onClick={onClickChat} >
        <ChatIcon src="/Chat.png"></ChatIcon>
    </Cont>
}

export default ChatIcons;