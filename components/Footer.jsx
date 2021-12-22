import Image from 'next/image'
import fb from './svgs/fbfoot.svg'
import link from './svgs/linkfoot.svg'
import insta from './svgs/instafoot.svg'
import gmail from './svgs/gmailfoot.svg'

const Footer = () => {
    return (
        <div className='bg-black flex flex-col justify-center items-center ' >
            <div className='flex px-5 mt-24 pb-7 gap-[28px] justify-between items-center' >
                <Image src={fb} alt='fb-icon' />
                <Image src={link} alt='fb-icon' />
                <Image src={insta} alt='fb-icon' />
                <Image src={gmail} alt='fb-icon' />
            </div>
            <h4 className='font-normal px-5 text-[18px] text-white text-center mb-5 ' >@2021 Developed by Aashan All Rights Reserved.</h4>
            
        </div>
    )
}

export default Footer
