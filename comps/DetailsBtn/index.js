import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
`;
const Button = styled.button`
    height: 30px;
    width: 75px;
    background-color: #D02A1C;
    border: none;
    border-radius: 20px;
`
const BtnText = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    font-family:'Sen', sans-serif;
    font-weight: 700;
    font-size: 13px;
`

const DetailsBtn = ({
    onClickDetailsBtn = () =>{}
}) => {
    return <Cont onClick={onClickDetailsBtn}>
        <Button>
            <BtnText>DETAILS</BtnText>
        </Button>
    </Cont>
}

export default DetailsBtn;