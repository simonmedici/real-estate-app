import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><BsFillHouseDoorFill />Real</span>Estate</h1>
            <button className='btn'>Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a hfref='#'>Home</a></li>
                <li><a hfref='#'>Search</a></li>
                <li><a hfref='#'>About</a></li>
                <li><a hfref='#'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<BsFillHouseDoorFill className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
               
            </div>
        </div>

    </div>
  )
}

export default Navbar