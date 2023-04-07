import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className="navbar"> 
          <div className="navbar_left">
             <b> Social Media</b>
          </div>
          <div className='navbar_right'>
          <div className='navbar_search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="search..."/>
          </div>
          <button className='navbar_profile_button'> 
          <FontAwesomeIcon icon={faCirclePlus} />  Create
          </button>
          <div className='navbar_profile_image'>
             <img src=''/>
          </div>
          </div>
      </div>
    </>
  )
}

export default Navbar
