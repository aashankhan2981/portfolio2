import sep from './svgs/seperator.svg'
import Button from './Button'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'


const Contact = forwardRef((props,ref) => {
    const [thanks,setThanks] = useState(false)
    const refer = useRef(null)
    const submitting = (e)=>{
        e.preventDefault()
        
        e.target[0].value=''
        e.target[1].value=''
        e.target[2].value=''
        e.target[3].value=''
        setThanks(true)
        
    }
    const refering4 = ()=>{
        refer.current.focus()
    }
    useImperativeHandle(ref,()=>({
        refering4

    }))
    
    return (
        <div className='flex pt-[80px] pb-[50px] flex-col items-center justify-center'>
            <Button Title="CONTACT" refer={refer} />
            <p className='font-normal px-5 text-[14px] max-w-[600px] mb-7 text-center'>Everyone should feel free to contact me I am always available to make things easier for you and solve your problems related to my niche.</p>
            <Image src={sep} />
            {
                thanks?
                <div className='bg-blue-400 mt-10 py-5 mx-5 px-3 flex items-center justify-center' >
                    <h3 className='font-bold text-center  sm:max-w-[250px] text-white' >Thanks! for your message we will respond back to you very soon.</h3>
                    

                </div>:""
            }
            <form onSubmit={submitting } className='mt-[70px] mx-5 flex flex-col items-center justify-center' >
                <input type="text" required name='Name' placeholder='ENTER YOUR NAME*' className={style.input1} />
                <input type="email" required name="Email" placeholder='ENTER YOUR EMAIL*' className={style.input1} id="" />
                <input type="number" required name="Phone" id="" placeholder='PHONE NUMBER' className={ ` ${style.input1}` } />
                <textarea name="message" required id="" cols='22.5' rows="5" placeholder='YOUR MESSAGE*' className={` ${style.input1}`}></textarea>
                <button type="submit" className='border-x-[4px] border-black font-semibold px-[35px] py-1  text-[16px] text-center' >SUBMIT</button>
            </form>
            
        </div>
    )
})

export default Contact
