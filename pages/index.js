import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import BackBtn from '@/comps/BackBtn'
import CloseBtn from '@/comps/CloseBtn'
import DetailsBtn from '@/comps/DetailsBtn'
import DotNavBar from '@/comps/DotNavBar'
import Logo from '@/comps/Logo'
import NavBar from '@/comps/NavBar'
import SearchBar from '@/comps/SearchBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <BackBtn />
      <CloseBtn />
      <DetailsBtn />
      <DotNavBar />
      <Logo />
      <NavBar />
      <br></br>
      <SearchBar />
    </div>
  )
}
