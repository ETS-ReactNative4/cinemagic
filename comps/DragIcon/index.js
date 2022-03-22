import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: fixed;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 100px;
    right: 30px;
    z-index:10;
`;

const DragIcon = styled.img`
    width: 45px;
    height: 45px;
    margin-top: 10px;

`;

const DragIcons = ({
    onClickDrag = () => {},
}) => {
    return <Cont  onClick={onClickDrag}>
        <DragIcon  src="/Drag.png"></DragIcon>
    </Cont>
}

export default DragIcons;