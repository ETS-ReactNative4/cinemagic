import React, { useRouter } from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Cont = styled.div`
   visibility: ${props => props.display};
   position: fixed;
   bottom: 0;
   z-index: 99;
`;

const TitleText = styled.div`
    font-size: "17px";
    font-weight: "700";
    color: ${props => props.textColor};
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 400px;
    background-color: ${props=>props.boxColor};
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
    background: ${props=>props.butColor};
    border-radius: 20px;
    display: flex;
    align-items: center;
`
const Toggle = styled.div`
    position: relative;
    width: 18px;
    height: 18px;
    background: ${props=>props.toggleColor};
    border-radius: 10px;
    left: ${props => props.left};
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const PopUpCont = ({
    onPressCloseBtn = () => { },
    darkLight = () => { },
    gridList = () => { },
    position1 = "0px",
    position2 = "0px",
    display = "hidden"
}) => {
    const { theme } = useTheme();
    return <Cont display={display}>
        <Box boxColor={comp_themes[theme].popUpSettingBg}>
            <Top>
                <Empty />
                <TitleText textColor={comp_themes[theme].popUpSettingText}>SETTING</TitleText>
                <CloseBtnImg src={comp_themes[theme].popUpSettingImg} onClick={onPressCloseBtn}></CloseBtnImg>
            </Top>
            <Mid>
                <Item>
                    <TitleText textColor={comp_themes[theme].popUpSettingText}>Dark Mode:</TitleText>
                    <Button butColor={comp_themes[theme].popUpSettingButton}>
                        <Toggle toggleColor={comp_themes[theme].popUpSettingText} onClick={darkLight} left={position1} />
                    </Button>
                </Item>
                <Item>
                    <TitleText textColor={comp_themes[theme].popUpSettingText}>Grid View:</TitleText>
                    <Button butColor={comp_themes[theme].popUpSettingButton}>
                        <Toggle toggleColor={comp_themes[theme].popUpSettingText} onClick={gridList} left={position2} />
                    </Button>
                </Item>
            </Mid>
        </Box>

    </Cont>
}

export default PopUpCont;