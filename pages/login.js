import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';
import scss from '@/styles/pageStyles/home.module.scss';
import axios from 'axios';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebase } from "@/config"

// components
import LogIn from '@/comps/LogIn';

const firebaseConfig = {
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  projectId: firebase.projectId,
  storageBucket: firebase.torageBucket,
  messagingSenderId: firebase.messagingSenderId,
  appId: firebase.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Login() {
  const r = useRouter (); 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  async function sendForm() {
    try {
      const res = await axios.post("http://localhost:3000/login", formData)
      // console.log("Res:", res)
      alert(res.data);
      window.location.replace("http://localhost:3001");
    } catch (e) {
      alert("Please provide a valid email address and password");
    }
  }

  useEffect(()=>{
    const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log("signed in right now", user);
          // ...
        } else {
          // User is signed out
          console.log("not signed in or signed out");
          // ...
        }
  });
    
  }, []);

  const signInGoogle = async()=>{
    //communtiate with google
    const provider = new GoogleAuthProvider();

    //comm with fireabase aut server
    const auth = getAuth();

    //use a popup in the web to take to bith googke and firebase to add a new user to the firebase user database
    try{
      const result = await signInWithPopup(auth, provider);
      window.location.replace("http://localhost:3001");
      console.log(result);
    }catch (e){
      alert("oh no");
      console.log(e.message);
    }
  }

  const SignOutFirebase = async()=>{
    const auth = getAuth();
    await signOut(auth)
  }

  return (
    <div className={scss.windowCont}>
      <div className={scss.phoneSizeCont}>
        {/* Login - Welcome */}
        <div className={scss.titleCont}>
          <LogIn 
          inputEmail={e => setFormData({ ...formData, email: e.target.value })}
          inputPassword={e => setFormData({ ...formData, password: e.target.value })}
          onClickLogIn={sendForm}
          onClickSignUp={()=>r.push(`/signup`)}
          google={signInGoogle}
          />
        </div>
        
      </div>
    </div>
  )
}