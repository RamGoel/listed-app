import React from 'react'

function Button({btnText}) {
  return (
    <button style={{
        backgroundColor:'black',
        color:'white',
        width:'105%',
        padding:'10px',
        border:0,
        borderRadius:'10px',
        fontWeight:'bold',
        margin:0
    }}>
        {btnText}
    </button>
  )
}

export default Button