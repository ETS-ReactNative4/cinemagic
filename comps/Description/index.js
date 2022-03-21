import React from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Description = ({
    src="/favorite-dark.svg",
    title="Spider Man: No Way Home",
    info="With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    director="Director",
    directorlist="George Lucas",
    cast="Cast",
    castlist="Simu Liu, Benedict Wong, Xu Wenwu, Awkwafina, Dallas Liu, Xialing, Razor Fist, etc"
}) => {
    const { theme } = useTheme();
    return <Cont>
         {/* top  */}
        <Top>
            <Title textColor={comp_themes[theme].popUpSettingText}>{title}</Title>
            <Icon src={comp_themes[theme].navbar_fav}/>
        </Top>
        <Bot>
            <InfoText textColor={comp_themes[theme].popUpSettingText}>{info}</InfoText>
        </Bot>
     
        {/* director  */}
        <DirectorTop>
            <Director textColor={comp_themes[theme].popUpSettingText}>{director}</Director>
            <DirectorList textColor={comp_themes[theme].popUpSettingText}>{directorlist}</DirectorList>
        </DirectorTop>
       
        {/* cast  */}
        <CastTop>
            <Cast textColor={comp_themes[theme].popUpSettingText}>{cast}</Cast>
            <CastList textColor={comp_themes[theme].popUpSettingText}>{castlist}</CastList>
        </CastTop>

    </Cont>
}

export default Description;

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Sen';
    height:450px;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    // width: 100vw;
`
const Title = styled.text`
    display: flex;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.textColor};
    // inline-size: 200px;
    // overflow-wrap: break-word;
`

const Icon = styled.img`
    width: 27px;
    height: 27px;
`
const Bot = styled.div`
    display: flex;
    justify-content: center;
`

const InfoText = styled.text`
    margin-top: 20px;
    // width:320px;
    font-size: 14px;
    line-height: 17px;
    font-weight: lighter;
    color: ${props => props.textColor};
`

const CastTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    // width: 100vw;
`
const Cast = styled.text`
    display: flex;
    margin-top: -20px;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.textColor};
    // inline-size: 200px;
    // overflow-wrap: break-word;
`

const CastList = styled.text`
    margin-top: 60px;
    margin-left:-38px;
    // width:320px;
    font-size: 14px;
    line-height: 17px;
    font-weight: lighter;
    color: ${props => props.textColor};
`;

const DirectorTop = styled.div`
    justify-content: space-between;
    align-items:center;
    // width: 100vw;
`;
const Director = styled.text`
    display: flex;
    margin-top: 25px;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.textColor};
    // inline-size: 200px;
    // overflow-wrap: break-word;
`;

const DirectorList = styled.text`
    margin-top: 70px;
    // width:320px;
    font-size: 14px;
    line-height: 17px;
    font-weight: lighter;
    color: ${props => props.textColor};
`;
