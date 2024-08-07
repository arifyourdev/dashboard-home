import React from 'react'
import { CiMail,CiSettings,CiSearch } from "react-icons/ci";

import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Header = ({openSidebar}) => {
  return (
        <div className='header-wrapper'>
            <div className='header-wrap'>
                <div className='header-search'>
                    <span><CiSearch/></span>
                    <input type='text' className='form-control' placeholder='search'/>
                </div>
                <div className='mobile-menu'>
                 <button className='menu-btn' onClick={openSidebar}><TiThMenu/></button>
                </div>
                <div className='header-icons'>
                    <div className='mail icons'>
                       <CiMail />
                    </div>
                    <div className='setting icons'>
                      <CiSettings />
                    </div>
                    <div className='notification icons'>
                        <IoIosNotificationsOutline/>
                    </div>
                    <div className='user icons'>
                        <FaUserAstronaut/>
                    </div>
                </div>
            </div>
          </div>
  )
}

export default Header