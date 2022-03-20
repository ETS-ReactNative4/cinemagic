import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';
import scss from '@/styles/pageStyles/home.module.scss';
import axios from 'axios'

// components
import SignUp from '@/comps/SignUp';


export default function Signup() {
  const r = useRouter (); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  async function sendForm() {
    try {
      const res = await axios.post("http://localhost:3000/signup", formData)
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
          <SignUp 
          inputName={e => setFormData({ ...formData, name: e.target.value })}
          inputEmail={e => setFormData({ ...formData, email: e.target.value })}
          inputPassword={e => setFormData({ ...formData, password: e.target.value })}
          onClickSignUp={sendForm}
          onClickLogIn={()=>r.push(`/login`)}
          />
        </div>
        
      </div>
    </div>
  )
}