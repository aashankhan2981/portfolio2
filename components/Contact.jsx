import sep from './svgs/seperator.svg'
import Button from './Button'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = forwardRef((props,ref) => {
    const SERVICE_ID = "service_qvfiurh";
const TEMPLATE_ID = "template_0glcpep";
const USER_ID = "mr3TiqXkXG_rx4T3K";
    const [thanks,setThanks] = useState(false)
    const refer = useRef(null)
    const submitting = (e)=>{
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
        // e.target[0].value=''
        // e.target[1].value=''
        // e.target[2].value=''
        // e.target[3].value=''
        // setThanks(true)
        // setTimeout(()=>{
        //     setThanks(false)
        // },2500)
        
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
            
               
            
            <form onSubmit={submitting } className='mt-[70px] mx-5 flex flex-col items-center justify-center' >
                <input    
          required name="user_name" type="text"  placeholder='ENTER YOUR NAME*' className={style.input1} />
                <input  label="Email"
          name="user_email"  type="email" required  placeholder='ENTER YOUR EMAIL*' className={style.input1} id="" />
                <input type="number" required name="user_phone"  placeholder='PHONE NUMBER' className={ ` ${style.input1}` } />
                <textarea   required name="user_message" cols='22.5' rows="5" placeholder='YOUR MESSAGE*' className={` ${style.input1}`}></textarea>
                <button type="submit" className='border-x-[4px] border-black font-semibold px-[35px] py-1  text-[16px] text-center' >SUBMIT</button>
            </form>
            <div className={`${thanks?'bottom-6':'-bottom-full'} ease-in-out transition-all duration-1000 bg-gray-500 fixed z-40  py-5 mx-5 px-3 flex items-center justify-center`} >
                    <h3 className='font-semibold text-center  sm:max-w-[250px] text-white' >Thanks! for your message we will respond back to you very soon.</h3>
                    

                </div>
        </div>
    )
})

export default Contact
