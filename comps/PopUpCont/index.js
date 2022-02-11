import React, {useRouter} from 'react';
import styled from 'styled-components';
import TextUI from '../TextUI';
import CloseBtn from '../CloseBtn';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 258px;
    height: 310px;
    background-color: #2C2C2C;
    border-radius: 25px 25px 20px 20px;
`;

const PopCont = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const PopContTitle = styled.div`
    margin-left: 35%;
`

const PopUpCont = ({
    onClickSetting = () =>{},
    onPressCloseBtn = () =>{}
}) => {
    return <Cont onClick={onClickSetting}>
        <PopCont>
            <PopContTitle>
                <TextUI TextUISize="14px" TextUIColor="#E0E0E0" Title="SETTING"/> 
            </PopContTitle>
            <CloseBtn onClick={onPressCloseBtn} CloseSrc='/close-dark.svg'/>
        </PopCont>
        <PopCont>
            <TextUI TextUISize="13px" TextUIColor="#E0E0E0" TextUIWeight='lighter' Title="Dark Mode"/>
        </PopCont>
        <PopCont>
            <TextUI TextUISize="13px" TextUIColor="#E0E0E0" TextUIWeight='lighter' Title="Grid View"/>
        </PopCont>
        
    </Cont>
}

export default PopUpCont;