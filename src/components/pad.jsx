import React, { useState, useEffect, useRef } from 'react';

import '../style/pad.css'


const Pad = ({ keys, handlePower, handlePlay, padKey, info,
vol, handleVol, handleBank, piano }) => {



    let keyboard = () => keys.map(item => {

        let i
        if (piano == false) {
            i = 0
        }
        else i = 1;
    
        return (
            <div key={item.press} id={item.press} className='drum-pad'
                onClick={() => handlePlay(item.ref)}
                
                style={padKey}> 
                    <h1>{item.press}</h1>
                    <audio id={item.press} ref={item.ref}
                    className='clip' src={item.src[i]} ></audio>
            </div>
        )
    }
    )

    
        
    return (
        <div className='motherboard'>
             
            <div className='board'>
                {keyboard()}
            </div>
            <div className='switches'>
                <div className='power'>
                    <h4>Power</h4> 
                    <label className='switch'
                     onChange={() => handlePower()}>
                        <input type='checkbox' />
                        
                        <span className='slider'></span>
                    </label>
                </div>
                <div className='display'>
                    <h4>{info}</h4>
                </div>
                <div className='vol'>
                    <input type="range" min="1" max="100" value={vol}
                    onChange={handleVol} id="myRange" />
                </div>
                <div className='bank'>
                    <h4>Bank</h4>
                    <label className="switch" 
                    onChange={handleBank}>
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
               
                    
                    
        

            </div>
        </div>
     );
}
 
export default Pad;