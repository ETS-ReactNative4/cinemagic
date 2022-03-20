import React from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Description = ({
    src="/favorite-dark.svg",
    title="Spider Man: No Way Home",
    info="With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    actor="Actor",
    actorlist="Simu Liu, Benedict Wong, Xu Wenwu, Awkwafina, Dallas Liu, Xialing, Razor Fist, etc"
}) => {
    const { theme } = useTheme();
    return <Cont>
        <Top>
            <Title textColor={comp_themes[theme].popUpSettingText}>{title}</Title>
            <Icon src={comp_themes[theme].navbar_fav}/>
        </Top>
        <Bot>
            <InfoText textColor={comp_themes[theme].popUpSettingText}>{info}</InfoText>
        </Bot>

        <ActorTop>
            <Actor textColor={comp_themes[theme].popUpSettingText}>{actor}</Actor>
            <ActorList textColor={comp_themes[theme].popUpSettingText}>{actorlist}</ActorList>
        </ActorTop>
        <ActorBot>
            <ActorList textColor={comp_themes[theme].popUpSettingText}>{actorlist}</ActorList>
        </ActorBot>
    </Cont>
}

export default Description;

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Sen';
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
    width: 35px;
    height: 35px;
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

const ActorTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    // width: 100vw;
`
const Actor = styled.text`
    display: flex;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.textColor};
    // inline-size: 200px;
    // overflow-wrap: break-word;
`

const ActorList = styled.text`
    margin-top: 70px;
    margin-left:-47px;
    // width:320px;
    font-size: 14px;
    line-height: 17px;
    font-weight: lighter;
    color: ${props => props.textColor};
`

const ActorBot = styled.div`
    display: flex;
    justify-content: center;
`