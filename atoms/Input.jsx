import React from 'react'
import Image from 'next/image'
function Input({ placeholder, propStyle, isSecure, isIcon, iconSrc }) {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'10px',
            background: '#eaeaea',
            borderRadius:'10px',
            width:'100%',
            ...propStyle,
        }}>
            <input
                placeholder={placeholder}
                type={(isSecure)?'password':'text'}
                style={{
                    background:'transparent',
                    border:'none',
                }}
            />
            {(isIcon)?<Image src={iconSrc} />:''}
        </div>
    )
}

export default Input