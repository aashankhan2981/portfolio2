import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Containerhero = ({img,link,target}) => {
    return (
        <Link href={link} >
            <a target={target} >
        <div className='md:bg-[#C4C4C4] bg-white py-2 shadow-[#C4C4C4] shadow-md  md:shadow-black md:shadow-2xl  flex items-center justify-center  px-3  '>
                            <div className='max-w-[35px] max-h-[35px]'>
                        <Image src={img} alt='a' /> 
                        </div>
        </div>
        </a>
        </Link> 
    )
}

export default Containerhero
