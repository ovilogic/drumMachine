import React, { useState, useEffect, useRef } from 'react';

import '../style/pad.css'


const Pad = ({ keys, handlePower, handlePlay, padKey, info,
vol, handleVol }) => {



    let keyboard = () => keys.map(item => 
        <div key={item.press} id={item.press} className='drum-pad'
         onClick={() => handlePlay(item.ref)}
         
         style={padKey}> 
            <h1>{item.press}</h1>
            <audio id={item.press} ref={item.ref}
            className='clip' src={item.src} ></audio>
        </div>
    )

    
        
    return (
        <div className='motherboard'>
             
            <div className='board'>
                {keyboard()}

            </div>
            <div className='switches'>
                <div className='power'>
                    <h4>Power</h4> 
                    <label className='switch' onChange={() => handlePower()}>
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
  
                    
        

            </div>
        </div>
     );
}
 
export default Pad;