import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Navbar:React.FC = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState<boolean>(false);
  
  const toggleBtn = () => {
    setToggle((prevToggle) => !prevToggle);
  }
  
  return (
    <>
      <div className='navbar'>
        <div className='navbar_logo' onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faAccusoft} />
          <span>Pet Friend</span>
        </div>
        
        <div className='navbar_icon'></div>

        <ul className={toggle ? 'navbar_menu':'navbar_menu active'} >
          <span className='listItem'>최근본</span>
          <span className='listItem'>저장한</span>
          <span className='listItem' onClick={() => navigate('/search')}>검색</span>
        </ul>
         
        <div className='toggle' onClick={() => toggleBtn()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  )
}
