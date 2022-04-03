import React, { useState, useEffect, useRef } from 'react';

import '../style/pad.css'


const Pad = ({ keys, handlePower, handlePlay, padKey }) => {

  

    let keyboard = () => keys.map(item => 
        <div key={item.press} id={item.press} className='drum-pad'
         onClick={() => handlePlay(item.ref)}
         onKeyDown={() => {
             padKey = { color: 'blue'
               }
               console.log(padKey)
         }}
         style={padKey}> 
            <h1>{item.press}</h1>
            <audio id={item.press} ref={item.ref} className='clip' src={item.src} ></audio>
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
                
                    
                    
        

            </div>
        </div>
     );
}
 
export default Pad;