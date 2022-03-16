import React from 'react';
import { useRouter } from 'next/router';
import scss from './logo.module.scss';
import styled from 'styled-components';

export default function logo(){
  const router = useRouter();

  return (
    <>
      <h1 
        className={scss.logo}
        onClick={() => router.push("/")}
      >
        CINEMAGIC
      </h1>
    </>
  )
}