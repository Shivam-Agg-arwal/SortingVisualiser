import React from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = ({ value, onChange }) => {
    return (
        <div className="slider-container">
            <input
                type="range"
                min="10"
                max="3000"
                value={value}
                onChange={onChange}
                className="custom-slider"
            />
        </div>
    );
};

export default Slider;
