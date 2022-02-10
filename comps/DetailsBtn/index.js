import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    padding: 20px;
`;
const Button = styled.button`
    height: 35px;
    width: 80px;
    background-color: #D02A1C;
    border: none;
    border-radius: 20px;
`
const BtnText = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    font-family:'Sen', sans-serif;
    font-size: 15px;
`

const DetailsBtn = ({
    onClickDetailsBtn = () =>{}
}) => {
    return <Cont onClick={onClickDetailsBtn}>
        <Button>
            <BtnText>Details</BtnText>
        </Button>
    </Cont>
}

export default DetailsBtn;