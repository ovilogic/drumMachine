import React, { useState, useEffect } from 'react';
import '../style/pad.css'

const Pad = () => {
    return ( 
        <div className='board'>
            <div className='drum-pad'>Q</div>
            <div className='drum-pad'>W</div>
            <div className='drum-pad'>E</div>
            <div className='drum-pad'>A</div>
            <div className='drum-pad'>S</div>
            <div className='drum-pad'>D</div>
            <div className='drum-pad'>Z</div>
            <div className='drum-pad'>X</div>
            <div className='drum-pad'>C</div>

        </div>
     );
}
 
export default Pad;