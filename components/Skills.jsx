import Image from 'next/image'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from './Button'
import Languages from './Languages'
import html from "./svgs/html.svg"
import css from "./svgs/css.svg"
import r from "./svgs/react.svg"
import js from "./svgs/js.svg"
import git from "./svgs/git.svg"
import NEXT from "./svgs/next.svg"
import tail from "./svgs/tailwind.svg"
import wp from "./svgs/wp.svg"
const Skills = forwardRef( (props,refer) => {
    const ref = useRef(null)
    const getrefer = ()=>{
        ref.current.focus()
    }
    useImperativeHandle(refer,()=>({
        getrefer
    }))
    return (
        <div className='flex px-5 flex-col  items-center pb-16'>
            <Button Title={"SKILLS"} refer={ref} />
            <div className='flex flex-col px-5 mt-6 md:items-start  justify-center'>
            <div className='overflow-hidden  sm:mx-8 md:mx-12 eight:mx-32'>
            <h2 className=' font-bold md:text-left text-center text-[28px]  '>USING NOW:</h2>
            <div className='flex flex-wrap      md:space-x-20 lg:space-x-28 flex-col md:flex-row items-center justify-center mt-10'>
           
            <Languages img={html} title={"HTML5"} mt={" md:ml-20 lg:ml-0"} />
            <Languages img={css} title={"CSS3"} />
            <Languages img={tail} title={"TAILWIND(CSS)"} m={"mt-[21px]"} />
            <Languages img={js} title={"JAVASCRIPT"} m={"mt-[8px]"} />
            <Languages img={r} title={"REACT(js)"} m={"mt-[7px]"} />
            <Languages img={NEXT} title={"NEXT(js)"} m={"mt-[9px]"} />

            <Languages img={git} title={"GITHUB"} m={"mt-[8px]"} />
           
            </div>
            </div>
            <div className='overflow-hidden mt-9  sm:mx-8 md:mx-20 eight:mx-32'>
            <h2 className=' font-bold text-[28px] md:text-left text-center   '>OTHER SKILLS:</h2>
            <div className='flex xl:flex-nowrap flex-wrap  md:space-x-24 px-[30px] lg:space-x-28  flex-col md:flex-row items-center justify-center mt-10'>
           
            <Languages img={html} title={"C"} mt={" md:ml-24 lg:ml-28 "} />
            <Languages img={css} title={"C++"} />
            <Languages img={tail} title={"PYTHON"} m={"mt-[21px]"} />
            <Languages img={wp} title={"Wordpress"} m={"mt-[7px]"} />
           
            </div>
            </div>
            </div>
        </div>
    )
})

export default Skills
