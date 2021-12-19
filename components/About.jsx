import Image from 'next/image'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import sep from './svgs/seperator.svg'
import dev from './svgs/develop.svg'
import maintain from './svgs/maintan.svg'
import Services from './Services'
import Button from './Button'

const About =  forwardRef( (props,ref) => {

    const refer = useRef(null)
    const refering = ()=>{
        refer.current.focus()
    }
    useImperativeHandle(ref,()=>(
        {
            refering
        }
    ))
    return (
        <div className='flex px-10 flex-col justify-center items-center py-10'>
            {/* <button className='font-bold text-xl lg:text-2xl xl:text-3xl my-6 max-w-[300px] px-12 py-5 text-center border-4 border-black' ref={refer} ></button> */}
            <Button Title={"ABOUT ME"} refer={refer} />
            <p className='text-[15px] max-w-[700px] text-justify md:text-center'>Self-learner, after completing my intermediate education I had started learning programming from
            Youtube and other resources and very soon it became my passion, So continueing my journey I learned C, C++, Python then HTML, CSS, Javascript and then I started learning frameworks
            first I learned React.js then next.js and of CSS I learned and practiced Tailwind CSS. Currently I am finding a platform by which I can further polish my skills and gain experience. </p>
            <button className='border-x-4 mt-16 py-2 mb-[60px] border-[#000] border-opacity-60 px-5 font-semibold text-[15px]'>Explore</button>
            <Image src={sep} alt='line' />
            <div className='flex gap-10 items-center flex-wrap  md:flex-nowrap my-[90px] justify-center '>
                
                <Services title={"DEVELOPMENT"} desc={"I can develop the site based on your needs and suggestions. I can also develop the site from scratch and consult you during the job."} img={dev}/>
                <Services title={"MAINTENANCE"} desc={"I can maintain the site and do the changes according to your needs and suggestions. I can also deploy website on vercel." } img={maintain} m={"mt-[5px]"}/>
            </div>
            <Image src={sep} alt='line'/>
        </div>
    )
})
export default About
