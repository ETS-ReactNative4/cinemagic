import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleTextUI = styled.div`
    font-size: ${props=>props.TextUISize};
    font-weight:  ${props=>props.TextUIWeight};
    color:  ${props=>props.TextUIColor};
`;

const TextUI = ({
    TextUISize = "15px",
    TextUIWeight = "700",
    TextUIColor="#E0E0E0",
    Title="SEARCH"
}) => {

    return <Cont>
        <TitleTextUI TextUISize={TextUISize} TextUIWeight={TextUIWeight} TextUIColor={TextUIColor}>{Title}</TitleTextUI>
    </Cont>
}

export default TextUI;

