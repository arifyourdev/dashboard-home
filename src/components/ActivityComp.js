import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import ChartComp from './ChartComp';

function ActivityComp() {
    return (
        <div className='activity-wrap mt20'>
            <div className='card'>
                <div className='card-body'>
                  <div className='activity-wrap'>
                     <div className='activity-header'>
                        <div className='title'>
                            <h4>Activity</h4>
                        </div>
                        <div className='activity-drop-menu'>
                            <div className='drop-menu'>
                                <button>Weekly <FaCaretDown/></button>
                            </div>
                        </div>
                      </div>
                      <ChartComp/>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityComp