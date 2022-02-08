import React, {useState} from 'react';
import styled from 'styled-components';
// import {useRouter} from 'next/router';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Cont = styled.div`
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 429px;
    height: 80px;
    background-color: #303234;
`;

const FaveImage = styled.img`
    width: 50px;
    height: 45px;
    padding:2px;
`;

const HomeImage = styled.img`
    width: 51px;
    height: 50px;
    padding:2px;
`;

const SettingImage = styled.img`
    width: 51px;
    height: 50px;
    padding:2px;
`;

const NavBarUI = ({
    fave = "/fave_icon.png",
    home = "/home_icon.png",
    setting = "/setting_icon.png",
}) => {
    //const router = useRouter();

    // const Stack = createNativeStackNavigator();
    // const navigation = useNavigation();
  
    // const [nav, setNav] = useState(0)

    // onPressFave=()=>{
    //     setNav(0)
    //     navigation.navigate('Fave')
    //   },
    //   onPressHome=()=>{
    //     setNav(1)
    //     navigation.navigate('Home')
    //   },
    //   onPressSetting=()=>{
    //     setNav(2)
    //     navigation.navigate('Setting')
    //   }

    return <Cont>
    <NavBar>
        <FaveImage src={fave} ></FaveImage>
        <HomeImage src={home}></HomeImage>
        <SettingImage src={setting}></SettingImage>
    </NavBar> 
    </Cont>
}

export default NavBarUI;