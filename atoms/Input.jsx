import React from 'react'
import Image from 'next/image'
function Input({ placeholder, propValue, propStyle, isSecure, handler, isIcon, iconSrc }) {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            borderRadius:'10px',
            width:'100%',
            ...propStyle,
        }}>
            <input
                placeholder={placeholder}
                onClick={(e)=>handler(e)}
                type={(isSecure)?'password':'text'}
                value={propValue}
                style={{
                    padding:'10px',
                    background:'transparent',
                    border:'none',
                    width:(isIcon)?'80%':'100%'
                }}
            />
            {(isIcon)?<Image alt="app-image" style={{
                margin:'auto'
            }} src={iconSrc} />:''}
        </div>
    )
}

export default Input