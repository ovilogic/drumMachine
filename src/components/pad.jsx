import React, { useState, useEffect, useRef } from 'react';

import '../style/pad.css'


const Pad = () => {

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

        let keysArr = [];
        for (let i = 0; i < keys.length; i++) {
            let x = keys[i].press
            keysArr.push(x.toLowerCase())
        }
        console.log(keysArr)

        useEffect(() => {
            document.addEventListener('keypress', (event) => {
                var name = event.key;
                for (let i = 0; i < keysArr.length; i++) {
                    if (name == keysArr[i]) {
                        const keyObj = keys.filter(x => x.press == keysArr[i].toUpperCase())
                        let keyA = new Audio(keyObj[0].src)
                        console.log('played')
                        keyA.play()
                    }
            }
            }, false);
            }
        );
    



    
    let keyboard = () => keys.map(item => 
        

        <div key={item.press} className='drum-pad' onClick={() => {item.ref.current.play()}}
        > {item.press}
                <audio ref={item.ref} >
                    <source  className='clip' src={item.src} >
                    </source>
                </audio>
        </div>
    
    )

    return ( 
        <div className='board'>
            {keyboard()}

        </div>
     );
}
 
export default Pad;