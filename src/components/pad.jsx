import React, { useState, useEffect, useRef } from 'react';

import '../style/pad.css'


const Pad = () => {

    const q = useRef()

    return ( 
        <div className='board'>
            <div className='drum-pad' onClick={() => {q.current.play()}}> Q
                <audio ref={q} >
                    <source  className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                    type='audio/mp3'>
                    </source>

                </audio>
                </div>
              
            <div className='drum-pad' >W</div>                
            <div className='drum-pad' >E</div>
            <div className='drum-pad' >A</div>
            <div className='drum-pad' >S</div>
            <div className='drum-pad' >D</div>
            <div className='drum-pad' >Z</div>
            <div className='drum-pad' >X</div>
            <div className='drum-pad' >C</div>

        </div>
     );
}
 
export default Pad;