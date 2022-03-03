import React, {useRouter} from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Cont = styled.div`
    display: flex;

    &:hover {
      cursor: pointer;
    }
`;
const BackBtnImg = styled.img`
    height: 20px;
    width: 20px;
`

const BackBtn = ({
    imgSrc="/back-dark.svg",
    onPressBackBtn = () =>{}
}) => {
    const { theme } = useTheme();
    return <Cont>
        <BackBtnImg src={comp_themes[theme].backBtn}></BackBtnImg>
    </Cont>
}

export default BackBtn;