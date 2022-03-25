import React, { useRouter } from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";
import FavCard from '../FavCard';

const Cont = styled.div`
   visibility: ${props => props.display};
   position: fixed;
   bottom: 0;
   z-index: 99;
`;

const TitleText = styled.div`
    display: flex;
    flex:1;
    font-size: "17px";
    font-weight: "700";
    color: ${props => props.textColor};
    justify-content: center;
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
    flex:1;
    flex-direction: row;
    align-items: center;
`

const CloseBtnImg = styled.img`
    display: flex;
    flex:1;
    height: 30px;
    width: 30px;
`

const Empty = styled.div`
    display: flex;
    flex:1;
`

const Mid = styled.div`
    height: 100px;
    display: flex;
    flex:4;
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: row;
    justify-content: space-around;
    overflow-y: scroll;
    height: 100vh;
    margin-bottom: 10px;
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
                <FavCard/>
                <FavCard/>
            </Mid>
        </Box>

    </Cont>
}

export default PopUpFavCont;