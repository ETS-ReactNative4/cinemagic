 import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';
import scss from '@/styles/pageStyles/home.module.scss';

// components
import LogIn from '@/comps/LogIn';


export default function Home() {
  return (
    <div className={scss.windowCont}>
      <div className={scss.phoneSizeCont}>
        {/* Login - Welcome */}
        <div className={scss.titleCont}>
          <LogIn />
        </div>
        
      </div>
    </div>
  )
}