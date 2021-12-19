import Image from 'next/image'
import React from 'react'

const Services = ({title,desc,img,m}) => {
    return (
        <div className='flex  flex-col justify-center mb-5  '>
        <div className='flex space-x-3  items-center '>
            <div className='relative bottom-2 max-w-[50px] max-h-[50px]'>
        <Image src={img} alt="dev-icon" />
        </div>
    <h2 className='font-bold text-[22px] mb-4'>{title}</h2>
    </div>
    <p className={` text-[14px] max-w-[420px] max-h-[40px] md:text-left text-justify `}>{desc}</p>
    </div>
    )
}

export default Services
