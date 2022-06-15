import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Find the perfect place</h1>
            <p className='search-text'>Serch the largest selection of apartments, family homes and more.</p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Enter Keyword..'></input>
                </div>
                <div className='radio'>
                    <input type='radio' checked />
                    <label>Buy</label>
                    <input type='radio' />
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch classname='icon' /></button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default hero