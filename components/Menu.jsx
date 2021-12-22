import React from 'react'

const Menu = ({toggle,setToggle,refer,refer2,refer3,refer4}) => {
    
    return (
        <div className={`${toggle?"grid absolute top-[70px] right-0 w-full bg-opacity-50 border-t-2 border-white bg-black  grid-rows-4 `":"hidden"} `}>
            <button className='hover:text-yellow-300 text-white' onClick={()=>{refer.current.refering() ; setToggle(!toggle)}}  >About Me</button>
            <button className='hover:text-yellow-300 text-white' onClick={()=>{refer2.current.getrefer(); setToggle(!toggle)}}>Skills</button>
            <button className='hover:text-yellow-300 text-white'onClick={()=>{ setToggle(!toggle);refer3.current.refering1()} } >Portfolio</button>
            <button className='hover:bg-yellow-300 hover:text-white bg-white  cursor-pointer text-black px-4 py-2'onClick={()=>{setToggle(!toggle);refer4.current.refering4()}} >Contact Me</button>
        </div>
    )
}

export default Menu
