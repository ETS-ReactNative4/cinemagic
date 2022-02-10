import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 300px;
    height: 65px;
    background-color: #303234;
    border-radius: 5px 5px 25px 25px;
`;

const NavBarIcon = styled.img`
    width: ${props=>props.width};
    heigth: ${props=>props.height};
`

const NavBar = ({
    width = "30px",
    heigth = "30px",
    onClickNavBar = () =>{}
}) => {
    return <Cont>
        <NavBarIcon onClick={onClickNavBar} src="/favorite-dark.svg" width='35px' height='35px'></NavBarIcon>
        <NavBarIcon onClick={onClickNavBar} src="/home-dark.svg" width={width} height={heigth}></NavBarIcon>
        <NavBarIcon onClick={onClickNavBar} src="/setting-dark.svg" width={width} height={heigth}></NavBarIcon>
    </Cont>
}

export default NavBar;