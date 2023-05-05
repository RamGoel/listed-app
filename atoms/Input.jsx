import React from 'react'

function Input({ placeholder, isSecure }) {
    return (
        <input
            placeholder={placeholder}
            type={(isSecure)?'password':'text'}
            style={{
                padding:'10px',
                background: '#eaeaea',
                border:'none',
                borderRadius:'10px',
                width:'100%'
            }}
        />
    )
}

export default Input