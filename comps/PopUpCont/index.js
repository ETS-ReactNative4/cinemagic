import React, {useRouter} from 'react';
import styled from 'styled-components';
import TextUI from '../TextUI';

const Cont = styled.div`
   
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 400px;
    background-color: #2C2C2C;
    border-radius: 25px 25px 20px 20px;
`

const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`

const CloseBtnImg = styled.img`
    height: 30px;
    width: 30px;
`

const Empty = styled.div`
    display: flex;
`

const Mid = styled.div`
    margin-top: 50px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Button = styled.div`
    width: 43px;
    height: 16px;
    background: #464748;
    border-radius: 20px;
    display: flex;
    align-items: center;
`
const Toggle = styled.div`
    position: relative;
    width: 18px;
    height: 18px;
    background: #FAFAFA;
    border-radius: 10px;
    left: ${props=>props.left};
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const PopUpCont = ({
    onPressCloseBtn = () =>{},
    darkLight = () =>{},
    gridList = () =>{},
    CloseSrc="/close-dark.svg",
    position1="0px",
    position2="0px",
}) => {
    return <Cont> 
        <Box>
            <Top>
                <Empty/>
                <TextUI Title='SETTING' TextUISize='20px'/>
                <CloseBtnImg src={CloseSrc} onClick={onPressCloseBtn}></CloseBtnImg>
            </Top>
            <Mid>
                <Item>
                    <TextUI Title='Dark Mode:'/>
                    <Button>
                        <Toggle onClick={darkLight} left={position1}/>
                    </Button>
                </Item>
                <Item>
                    <TextUI Title='Grid View:'/>
                    <Button>
                        <Toggle onClick={gridList} left={position2}/>
                    </Button>
                </Item>
            </Mid>
        </Box>
        
    </Cont>
}

export default PopUpCont;