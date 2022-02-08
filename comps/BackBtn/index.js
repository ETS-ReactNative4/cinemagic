import React, {useState} from 'react';
import styled from 'styled-components';
// import {useRouter} from 'next/router';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BackBut = styled.div`
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;

`;

const BackBtn = ({
    backicon = "/back_but.png",
}) => {
    //const router = useRouter();

    // const Stack = createNativeStackNavigator();
    // const navigation = useNavigation();
  
    // const [nav, setNav] = useState(0)

    // onPressBaxk=()=>{
    //     setNav(0)
    //     navigation.navigate('Fave')
    //   },

    return <BackBut backicon={backicon}/>
}

export default BackBtn;