import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { BsFileTextFill ,BsBarChartLineFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";


const Sidebar = ({open ,closeSidebar}) => {
  return (
    <div  className={`sidebar-wrapper ${open ? 'open' : ''}`}>
    <div className='close' onClick={closeSidebar}>
      <IoCloseSharp/>
    </div>
    <div className='sidebar-top-wrap'>
        <div className='sidbar-icon top-dashboard'>
           <MdDashboard/>
        </div>
         <div className='sibar-menus'>
            <div className='sidbar-icon menu-icon'>
               <AiFillHome/> 
            </div>
            <div className='sidbar-icon menu-icon'>
                <BsBarChartLineFill/>
            </div>
            <div className='sidbar-icon menu-icon'>
               <BsClipboard2CheckFill/> 
            </div>
            <div className='sidbar-icon menu-icon'>
               <BsFileTextFill/> 
            </div>
            <div className='sidbar-icon menu-icon'>
               <BsBagCheck/> 
            </div>
         </div>
    </div>
    <div className='sidebar-bottom-wrap'>
        <div className='sidbar-icon'>
           <IoMdLogOut/>
        </div>
    </div>
  </div>
  )
}

export default Sidebar