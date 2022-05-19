import Image from 'next/image'
import Bg from './svgs/blackbg.svg'
import a from './svgs/recta.svg'
import git from './svgs/rectgit.svg'
import link from './svgs/rectlink.svg'
import Containerhero from './Containerhero'
import style from '../styles/Home.module.css'
const Hero = ({refer,refer2,refer3,refer4}) => {
    
    return (
        <>
        
        <div className="flex   ">
            <div className={`${style.back} md:w-1/2 md: w-full px-4 flex flex-col md:pb-0 pb-10 md: items-center `}   >
                <img src="./img/ak.jpg" className='max-h-28  ' alt="logo" />
                <h2 className='font-bold lg:text-2xl text-2xl md:text-lg mt-16 md:text-black text-white'>Hi, I am</h2>
                <h2 className='font-bold lg:text-5xl text-4xl md:text-2xl eight:text-3xl mt-4 md:text-black text-white'>Aashan Khan</h2>
                <h2 className='font-bold md:text-[#909090] text-white lg:text-3xl text-lg md:text-base eight:text-xl mt-4'>Front-end Developer</h2>
                <div className='flex gap-4 mt-14'>
                    
                    <Containerhero img={a} link={""} />
                    <Containerhero img={git} link={"https://github.com/aashankhan2981"} target="_blank"/>
                    <Containerhero img={link} link={"https://www.linkedin.com/in/aashan-khan-859654205/"} target="_blank"/>
                </div>
            </div>
            <div className=' hidden md:flex  overflow-hidden relative  '>
            <div className='relative  2xl:left-64 opacity-80   '>
                <Image  src={Bg} alt="black" /></div>
            <div  className=' flex  absolute 2xl:right-16 right-6 eight:right-10 top-8 lg:text-xl z-10 gap-9 text-base eight:text-lg lg:gap-14   text-white'>
            <button className='hover:text-yellow-300 ' onClick={()=>{refer.current.refering()}}>About Me</button>
            <button className='hover:text-yellow-300 ' onClick={()=>{refer2.current.getrefer()}} >Skills</button>
            <button className='hover:text-yellow-300 ' onClick={()=>{refer3.current.refering1()}} >Portfolio</button>
            <button className='hover:bg-yellow-300 hover:text-white bg-white rounded-full cursor-pointer text-black px-4 py-2' onClick={()=>{refer4.current.refering4()}} >Contact Me</button>
                </div>
            {/* <img src="./img/aashan.png" alt="aashan" className='absolute top-24 lg:top-32 max-h-80  eight:max-h-96 left-1/3 2xl:left-2/3 opacity-95 ' /> */}
                

                
            </div>
        </div>
       
        </>
    )
}

export default Hero
