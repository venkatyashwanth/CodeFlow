import React from 'react'
import "./formstyles.scss";

const ElementOne = () => {
    return (
        <div className='p-10'>
            <div className='inputgroup'>
                <input className='inputEl' type="text" id="textElement" />
                <label className='labelEl' htmlFor="textElement">First Name</label>
            </div>
        </div>
    )
}

export default ElementOne