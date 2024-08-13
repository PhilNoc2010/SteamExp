import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ( {user}) => {

  return (
    <div className='navbar'>
        <span className='logo'>
            Magic Lantern GameCo
        </span> { user  ?
            <span className='section'>User's User Library</span>
         :
            <span className='section'>Steam Top 10 Library Explorer</span>
        }
    </div>
  )
}

export default Navbar