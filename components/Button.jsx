import React from 'react'

const Button = ({Title,refer}) => {
    return (
        <button className='font-bold tracking-[5px] text-xl lg:text-2xl xl:text-3xl my-6 max-w-[300px] px-12 py-3 text-center border-4 border-black' ref={refer} >{Title}</button>

    )
}

export default Button
