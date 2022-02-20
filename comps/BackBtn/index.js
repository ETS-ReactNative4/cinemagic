import React, {useRouter} from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Cont = styled.div`
    display: flex;
`;
const BackBtnImg = styled.img`
    height: 18px;
    width: 18px;
`

const BackBtn = ({
    imgSrc="/back-dark.svg",
    onPressBackBtn = () =>{}
}) => {
    const { theme } = useTheme();
    return <Cont onClick={onPressBackBtn}>
        <BackBtnImg src={comp_themes[theme].backBtn}></BackBtnImg>
    </Cont>
}

export default BackBtn;