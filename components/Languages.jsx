import Image from 'next/image'
import React from 'react'

const Languages = ({img,title,m,mt}) => {
    return (
        <div className={`flex flex-col justify-center items-center pb-10 ${mt} `}>
        <div className='max-w-[40px] max-h-[80px]'>
        <Image src={img} alt="" />

        </div>

        <h4 className={`text-xl text-left ${m} `}>{title}</h4>
        </div>
    )
}

export default Languages
