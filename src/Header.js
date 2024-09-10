import React from 'react'

// title = 'logeshwaran' is a default text

const Header = ({title = 'logeshwaran'}) => { 
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}
 

export default Header