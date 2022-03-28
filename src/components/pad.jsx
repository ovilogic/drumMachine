import React, { useState, useEffect } from 'react';
import '../style/pad.css'


const Pad = () => {

 
        const q = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
        const w = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
        const e = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
        const a  = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
        const s  = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
        const d  = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
        const z  = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
        const x  = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
        const c  = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
       
        

        

        
        


    return ( 
        <div className='board'>
            <div className='drum-pad' onClick={() => {q.play()}}>Q</div>
              
            <div className='drum-pad' onClick={() => w.play()}>W</div>
                
            <div className='drum-pad' onClick={() => e.play()}>E</div>
            <div className='drum-pad' onClick={() => a.play()}>A</div>
            <div className='drum-pad' onClick={() => s.play()}>S</div>
            <div className='drum-pad' onClick={() => d.play()}>D</div>
            <div className='drum-pad' onClick={() => z.play()}>Z</div>
            <div className='drum-pad' onClick={() => x.play()}>X</div>
            <div className='drum-pad' onClick={() => c.play()}>C</div>

        </div>
     );
}
 
export default Pad;