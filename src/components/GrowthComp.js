import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import { BsBagXFill } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";

const GrowthComp = () => {
    return (
        <div className='card-grid-4'>
            <div className='card'>
                <div className='card-body'>
                    <div className='growth-icons'>
                        <div className='growth-1'>
                            <FaCartPlus />
                        </div>
                        <p>Total Orders</p>
                    </div>
                    <div className='growth-number'>
                        <h3>75</h3>
                        <div className='grouth-percent'>
                            <FaCaretUp />
                            <span>3%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <div className='growth-icons'>
                        <div className='growth-2'>
                            <IoBagCheck />
                        </div>
                        <p>Total Delivered</p>
                    </div>
                    <div className='growth-number'>
                        <h3>70</h3>
                        <div className='grouth-percent' style={{color:"red"}}>
                            <FaCaretUp />
                            <span>3%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <div className='growth-icons'>
                        <div className='growth-3'>
                            <BsBagXFill />
                        </div>
                        <p>Total Cencelled</p>
                    </div>
                    <div className='growth-number'>
                        <h3>75</h3>
                        <div className='grouth-percent'>
                            <FaCaretUp />
                            <span>3%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <div className='growth-icons'>
                        <div className='growth-4'>
                            <FaSackDollar />
                        </div>
                        <p>Total Revenue</p>
                    </div>
                    <div className='growth-number'>
                        <h3>75</h3>
                        <div className='grouth-percent' style={{color:"red"}}>
                            <FaCaretUp />
                            <span>3%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowthComp