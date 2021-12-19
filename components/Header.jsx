import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import menu from "./svgs/menu.svg"
import logo from "./svgs/logo2.svg"
import cross from "./svgs/cross.svg"
import Menu from './Menu'
const Header = ({refer,refer2}) => {
    const [scroll,setScroll] = useState(false)
    const [toggle,setToggle] = useState(false)
  useEffect(()=>{
      
    window.addEventListener("resize",()=>{
        if(window.innerWidth>768){
            setToggle(false)
        }
        return (()=>{window.removeEventListener('resize')})
    })
    window.addEventListener("scroll",(event)=>{
      if(window.scrollY<75){
          setScroll(false)

      }
      else{
          setScroll(true)
      }
      return(()=>{window.removeEventListener('scroll')})
    })
    
  })
    
    return (
        <>
        <div className={`${scroll && window.innerWidth>=768 ?"md:flex":"hidden"}  sticky top-0 z-30 text-white py-4 text-lg font-bold space-x-14 px-10 bg-black  justify-end items-center`}>
            <button className='hover:text-yellow-300 ' onClick={()=>{refer.current.refering()}} >About Me</button>
            <button className='hover:text-yellow-300 'onClick={()=>{refer2.current.getrefer()}} >Skills</button>
            <button className='hover:text-yellow-300 ' >Portfolio</button>
            <button className='hover:bg-yellow-300 hover:text-white bg-white rounded-full cursor-pointer text-black px-4 py-2' >Contact Me</button>
        </div>
        <div className='bg-black sticky top-0 z-30 md:hidden flex justify-between items-center py-4 px-5'>
            <Image src={logo} alt='log'/>
            <div className='cursor-pointer' onClick={()=>{setToggle(!toggle)}}>
                <div className={`${!toggle?"flex":"hidden"}`}>
            <Image src={menu}  alt='menu-icon'/>
            </div>
            <div className={`${toggle? "flex" :"hidden"}`}>
            <Image src={cross}  alt='cross-icon'/>

            </div>
            </div>
            <Menu toggle={toggle} setToggle={setToggle} refer={refer} refer2={refer2} />
        </div>
        
        </>
    )
}

export default Header
