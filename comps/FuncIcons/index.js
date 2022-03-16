import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 80px;
    right: 30px;
    z-index:10;
`;

const ChatIcon = styled.img`
    width: 75px;
    height: 75px;
    margin-top: 10px;
`;

const DragIcon = styled.img`
    width: 65px;
    height: 65px;
    margin-top: 10px;
`;

const FuncIcons = ({
    onClickDrag = () => {},
    onClickChat = () => {},
}) => {
    return <Cont>
        <DragIcon onClickDrag={onClickDrag} src="/Drag.png"></DragIcon>
        
        <ChatIcon onClickChat={onClickChat} src="/Chat.png"></ChatIcon>
    </Cont>
}

export default FuncIcons;