import React, { useState, useEffect, useRef } from 'react';

import '../style/pad.css'


const Pad = ({ power, handlePower }) => {

    const q = useRef()
    const w = useRef()
    const e = useRef()
    const a = useRef()
    const s = useRef()
    const d = useRef()
    const z = useRef()
    const x = useRef()
    const c = useRef()

    const keys = [
        {
            press: 'Q',
            ref: q,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            press: 'W',
            ref: w,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            press: 'E',
            ref: e,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            press: 'A',
            ref: a,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            press: 'S',
            ref: s,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            press: 'D',
            ref: d,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            press: 'Z',
            ref: z,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            press: 'X',
            ref: x,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            press: 'C',
            ref: c,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        } 
        ]


    const handlePlay = (ref) => {
        if (power == true) {
            ref.current.play()}        
    }
            
       
    let keysArr = [];
    for (let i = 0; i < keys.length; i++) {
        let x = keys[i].press
        keysArr.push(x.toUpperCase())
    }   
    
    document.addEventListener('keypress', (event) => {
        
        var name = event.key;
     
        
        for (let i = 0; i < keysArr.length; i++) {
            
            if (name.toUpperCase() == keysArr[i]) {
                let keysObj = keys.map(item => {
                    if (item.press == name.toUpperCase()) {
                        handlePlay(item.ref)
                        
                    }
                }
                )
            }
    }
    }, false);

    
        
    

    let keyboard = () => keys.map(item => 
        <div key={item.press} id={item.press} className='drum-pad' onClick={() => handlePlay(item.ref)}> 
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