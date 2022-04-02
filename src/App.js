import { useState, useRef, useEffect } from "react";
import Pad from "./components/pad";
import './style/app.css'



function App() {

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



const [on, setOn] = useState(true)

const handlePower = () => {
  setOn(!on)
}

const handlePlay = (ref) => {
  if (on == true) {
      console.log('in handlePlay   ', ref.current)
      ref.current.play()}        
}
console.log(on)


useEffect(() => {
  document.addEventListener('keypress', (event) => {
    let key = keys.filter(k => event.key.toUpperCase() == k.press );
    console.log(key[0], 'in doc event listener')
    console.log('in eventLIstener  ', on)
    
    handlePlay(key[0].ref)
  })
  
}, [on])


  return (
    
    <div id='drum-machine'>
      
      <div id='display'>
        <Pad handlePower={handlePower} handlePlay={handlePlay} keys={keys} />
      </div>
      
    </div>
    
    
    
  );
}

export default App;
