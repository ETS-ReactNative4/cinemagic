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

const PopUpFavCont = ({
    onPressCloseBtn = () => { },
    display = "hidden"
}) => {
    const { theme } = useTheme();
    return <Cont display={display}>
        <Box boxColor={comp_themes[theme].popUpSettingBg}>
            <Top>
                <Empty />
                <TitleText textColor={comp_themes[theme].popUpSettingText}>FAVOURITE</TitleText>
                <CloseBtnImg src={comp_themes[theme].popUpSettingImg} onClick={onPressCloseBtn}></CloseBtnImg>
            </Top>
            <Mid>
                
            </Mid>
        </Box>

    </Cont>
}

export default PopUpFavCont;