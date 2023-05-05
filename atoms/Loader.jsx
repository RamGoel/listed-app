import React from 'react'
import Image from 'next/image'
import loaderGIF from '../assets/loader.gif'
function Loader() {
    return (
        <div style={{
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            background:'white'
        }}>
            <Image
                alt=''
                width={200}
                src={loaderGIF}
            />
        </div>
    )
}

export default Loader