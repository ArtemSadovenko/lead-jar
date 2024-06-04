import React from 'react'
import './Icon.css'

type IconProps ={
  scale: number
}

function AiAssistantIcon(props: IconProps){
  return (
    <div className='icon'>
      <svg width={props.scale} height={props.scale} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_47_2904)">
<path d="M20 2C20.552 2 21 2.448 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.552 20.552 22 20 22H4C3.448 22 3 21.552 3 21V3C3 2.448 3.448 2 4 2H20ZM21.778 8.808L23.192 10.222L15.414 18L13.998 17.998L14 16.586L21.778 8.808ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z" fill="#EFEFEF"/>
</g>
<defs>
<clipPath id="clip0_47_2904">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
  )
}

export default AiAssistantIcon
