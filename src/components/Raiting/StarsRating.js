import React from 'react'

export default function StarsRating({stars, modal}) {
    console.log(modal);
    const maxStars = 5;
    const starPercentage = (stars / maxStars) * 100;
    const starPercentageRounded = Math.round(starPercentage);
    const StarStyles = () => {
        return {
            width: starPercentageRounded + "%",
            color: modal === false ? "#f8ce0b" : stars < 3 ? "red" : "green",
        }
        
    };

    return (
        <div className="stars-gray">
            <div className="stars-yellow" style={StarStyles()}></div>
        </div>
    )
}
