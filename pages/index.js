import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Readmore from '../components/Readmore'
import Skills from '../components/Skills'

export default function Home() {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  
  return (
    <div className="bg-[#D7D7D7] ">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Code by Aashan Khan Swati" />
        <link rel="icon" href="" />
      </Head>
        
        <Header refer={ref} refer2={ref2} refer3={ref3} refer4={ref4}  />
          <Hero refer={ref} refer2 = {ref2} refer3={ref3} refer4={ref4}  />
         <Readmore />
         <About ref={ref}/>
         <Skills ref={ref2} />
         <Portfolio ref={ref3} />
         <Contact ref={ref4} />
         <Footer/>
    </div>
  )
}
