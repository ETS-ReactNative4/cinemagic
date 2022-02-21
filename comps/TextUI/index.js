import React from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

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
    TextUISize = "17px",
    TextUIWeight = "700",
    Title="SEARCH"
}) => {
    const {theme} = useTheme();
    return <Cont>
        <TitleTextUI TextUISize={TextUISize} TextUIWeight={TextUIWeight} TextUIColor={comp_themes[theme].textUI}>{Title}</TitleTextUI>
    </Cont>
}

export default TextUI;

