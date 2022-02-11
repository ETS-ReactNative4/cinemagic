import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
`;
const LogoText = styled.div`
    font-size: 18px;
    color: #D02A1C;
    font-family: 'Sen', sans-serif;
    font-weight: 900;
`

const Logo = ({
    onClickLogo = () =>{}
}) => {
    return <Cont onClick={onClickLogo}>
        <LogoText>CINEMAGIC</LogoText>
    </Cont>
}

export default Logo;