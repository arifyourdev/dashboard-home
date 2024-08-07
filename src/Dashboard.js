import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GrowthComp from './components/GrowthComp';
import TableComp from './components/TableComp';
import { GoGoal } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import ReviewComp from './components/ReviewComp';
import ActivityComp from './components/ActivityComp';

const Dashboard = () => {
    const [open , setOpen] = useState(false)
    const openSidebar = () =>{
        setOpen(!open)
    }

    const closeSidebar = () =>{
      setOpen(false)
    }
    return (
        <div className='main-wrapper'>
            <div className='wrapper'>
                <Sidebar 
                  open = {open}
                  setOpen = {setOpen}
                  closeSidebar = {closeSidebar}
                />
                <div className='main-content'>
                    <Header 
                     openSidebar = {openSidebar}
                     open = {open}
                     setOpen = {setOpen}
                     />
                    <div className='main-panel'>
                        <div className='my-container'>
                            <div className='panel-text'>
                                <h3 className='heading'>Dashboard</h3>
                            </div>
                            <div className='my-row'>
                                <div className='col-my-9'>
                                    <GrowthComp/>
                                    <ActivityComp/>
                                    <TableComp/>
                                 </div>
                                <div className='col-my-3'>
                                    <div className='card mt200'>
                                        <div className='card-body'>
                                            <div className='profit-contain'>
                                                <p>Net Profit</p>
                                                 <div className='profit-flex'>
                                                   <div className='profit-right'>
                                                      <h1>$ 6780.35</h1>
                                                      <div class="grouth-percent">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path></svg><span>3%</span>
                                                        </div>
                                                   </div>
                                                   <div className='profit-goal'>
                                                      <div className='profil-cercle'>
                                                         <div className='goal-content'>
                                                             <h3>70%</h3>
                                                             <span>Goal <br/> Completed</span>
                                                          </div>
                                                     </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card mt20'>
                                        <div className='card-body'>
                                            <div className='card-goal'>
                                                <div className='goal-right'>
                                                    <div className='growth-icon'>
                                                        <div className='gg-bg'><GoGoal/></div>
                                                         <div className='gg-text'> Goals</div>
                                                    </div>
                                                    <div className='left-goal'>
                                                        <span><MdArrowForwardIos/></span>
                                                    </div>
                                                </div>
                                                <div className='goal-right'>
                                                    <div className='growth-icon'>
                                                        <div className='gg-bg gg-bg2'><GoGoal/></div>
                                                         <div className='gg-text'> Popular Dishes</div>
                                                    </div>
                                                    <div className='left-goal'>
                                                        <span><MdArrowForwardIos/></span>
                                                    </div>
                                                </div>
                                                <div className='goal-right'>
                                                    <div className='growth-icon'>
                                                        <div className='gg-bg gg-bg3'><GoGoal/></div>
                                                         <div className='gg-text'> Menus</div>
                                                    </div>
                                                    <div className='left-goal'>
                                                        <span><MdArrowForwardIos/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ReviewComp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard