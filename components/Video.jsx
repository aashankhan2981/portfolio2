import React from 'react'
import Link from 'next/link'
import { useState } from 'react/cjs/react.development'
const Video = ({source,goto}) => {
    // const [play,setPlay] = useState(false)
    return (
        <Link href={goto} >
            <a target='_blank' >
        <video    autoPlay muted  loop className={` md:max-w-[500px]`}  >
        <source src={source} />

    </video>
    </a>
    </Link>
    )
}

export default Video
