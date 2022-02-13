import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Sen';
`;

const Top = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 100vw;
`
const Title = styled.text`
    display: flex;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: #FAFAFA;
    inline-size: 200px;
    overflow-wrap: break-word;
`

const Icon = styled.img`
    width: 45px;
    height: 45px;
`
const Bot = styled.div`
    display: flex;
    justify-content: center;
`

const InfoText = styled.text`
    margin-top: 20px;
    width:320px;
    font-size: 12px;
    line-height: 14px;
    color: #FAFAFA;
`

const Description = ({
    src="/favorite-dark.svg",
    title="Spider Man: No Way Home",
    info="With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
}) => {
    return <Cont>
        <Top>
            <Title>{title}</Title>
            <Icon src={src}/>
        </Top>
        <Bot>
            <InfoText>{info}</InfoText>
        </Bot>
    </Cont>
}

export default Description;