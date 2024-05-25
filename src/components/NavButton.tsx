import React from 'react'

type NavButtonProps ={
    name: string
}

function NavButton(props: NavButtonProps) {
  return (
    <button>
        <h3>{props.name}</h3>
    </button>
  )
}

export default NavButton
