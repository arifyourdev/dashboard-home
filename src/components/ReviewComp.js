import React from 'react'
import { FaStar } from "react-icons/fa";
import { reviewData } from "../data/reviewData.js";

const ReviewComp = () => {
    const renderStars = (starCount) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar key={i} color={i < starCount ? '#cbcb0b' : '#fff'} />
            );
        }
        return stars;
    }
    return (
        <div className='card mt20'>
            <div className='card-body'>
                <div className='title'>
                    <h4>Customer's Feedback</h4>
                </div>
                <div className='feedback-box'>
                    {reviewData.map((data, index) => (
                        <div className='feet-box' key={index}>
                            <div className='feet-name'>
                                <img src={data.image} />
                                <h4>{data.name}</h4>
                            </div>
                            <div className='review-star'>
                                  {renderStars(data.star)}
                             </div>
                            <div className='feet-desc'>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ReviewComp