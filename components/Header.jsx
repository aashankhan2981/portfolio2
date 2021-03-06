import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import menu from "./svgs/menu.svg"
import logo from "./svgs/logo2.svg"
import cross from "./svgs/cross.svg"
import Menu from './Menu'
import top from './svgs/top.svg'
const Header = ({refer,refer2,refer3,refer4}) => {
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
        
        <div  className={`md:${scroll  ?"flex":"hidden"} hidden  sticky top-0 z-30 text-white py-4 text-lg font-bold space-x-14 px-10 bg-black  justify-end items-center`}>
            <button className='hover:text-yellow-300 ' onClick={()=>{refer.current.refering()}} >About Me</button>
            <button className='hover:text-yellow-300 'onClick={()=>{refer2.current.getrefer()}} >Skills</button>
            <button className='hover:text-yellow-300 ' onClick={()=>{refer3.current.refering1()}} >Portfolio</button>
            <button className='hover:bg-yellow-300 hover:text-white bg-white rounded-full cursor-pointer text-black px-4 py-2' onClick={()=>{refer4.current.refering4()}} >Contact Me</button>
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
            <Menu toggle={toggle} setToggle={setToggle} refer={refer} refer2={refer2} refer3={refer3} refer4={refer4} />
        </div>
        <div onClick={()=>{window.scrollTo({top: 0,behavior:'smooth'});console.log('check') }} className={ `${scroll?"block":"hidden"} fixed bottom-4 right-5 z-40 px-3 py-3 bg-white rounded-full`} >
            <Image src={top} alt='arrow-up'/>
        </div>
        </>
    )
}

export default Header
