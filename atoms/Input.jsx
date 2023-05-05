import React from 'react'
import Image from 'next/image'
function Input({ placeholder, propStyle, isSecure, isIcon, iconSrc }) {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            background: '#eaeaea',
            borderRadius:'10px',
            width:'100%',
            ...propStyle,
        }}>
            <input
                placeholder={placeholder}
                type={(isSecure)?'password':'text'}
                style={{
                    padding:'10px',
                    background:'transparent',
                    border:'none',
                    width:(isIcon)?'80%':'100%'
                }}
            />
            {(isIcon)?<Image style={{
                margin:'auto'
            }} src={iconSrc} />:''}
        </div>
    )
}

export default Input