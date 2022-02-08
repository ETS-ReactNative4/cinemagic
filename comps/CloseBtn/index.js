import React, {useState} from 'react';
import styled from 'styled-components';
// import {useRouter} from 'next/router';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CloseBut = styled.div`
    display: flex;
    align-items: center;
    width: 22px;
    height: 22px;

`;

const CloseBtn = ({
    backicon = "/close_but.png",
}) => {
    //const router = useRouter();

    // const Stack = createNativeStackNavigator();
    // const navigation = useNavigation();
  
    // const [nav, setNav] = useState(0)

    // onPressClose=()=>{
    //     setNav(0)
    //     navigation.navigate('Fave')
    //   },

    return <CloseBut backicon={backicon}/>
}

export default CloseBtn;