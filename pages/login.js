 import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';
import scss from '@/styles/pageStyles/home.module.scss';
import axios from 'axios';

// components
import LogIn from '@/comps/LogIn';

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
          />
        </div>
        
      </div>
    </div>
  )
}