import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
`;
const CloseBtnImg = styled.img`
    height: 20px;
    width: 20px;
`

const CloseBtn = ({
    CloseSrc="/close.svg",
    onPressCloseBtn = () =>{}
}) => {
    return <Cont onClick={onPressCloseBtn}>
        <CloseBtnImg src={CloseSrc}></CloseBtnImg>
    </Cont>
}

export default CloseBtn;