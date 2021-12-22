import Image from 'next/image'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from './Button'

import style from '../styles/Home.module.css'
import Video from './Video'
const Portfolio = forwardRef( (props,refer) => {
    const ref = useRef(null)
    const refering1 = ()=>{
        ref.current.focus()
    }
    useImperativeHandle(refer,()=>(
        {
            refering1
        }
    ))
    return (
        <div className='' >
            <div className={`${style.portfolio}  py-[50px] flex justify-center items-center`}>
            <Button Title={"PORTFOLIO"} refer={ref} />

            </div>
            <div className='' >
                <div className='bg-[#1A1A1A]  flex justify-center items-center' >
                    <div className='font-semibold text-[14px] text-white text-center my-[16px] px-[14px] py-[10px] border-b-white border-b-2'>
                    <h3 className='tracking-[3px]' >ALL</h3>
                    </div>
                </div>
                <div className={`flex pb-4 flex-wrap  ${style.portfoliobg}  px-5 gap-10  pt-4 justify-center`} >
                
            <Video source= "./videos/video.mp4" goto='https://health-pi.vercel.app/' />
            <Video source= "./videos/video2.mp4" goto='https://landing-page-eta-amber.vercel.app/' />
            <Video source= "./videos/video3.mp4" goto='https://soft-tech.vercel.app/' />

                </div>
                <div className='flex py-2  text-white font-semibold text-[20px] justify-center items-center bg-black'>
                    <h3>
                    And many more coming...
                    </h3>

                </div>

            </div>
            
        </div>
    )
})

export default Portfolio
