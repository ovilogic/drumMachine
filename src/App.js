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
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3']
    },
    {
        press: 'W',
        ref: w,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3']
      
    },
    {
        press: 'E',
        ref: e,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3']
    },
    {
        press: 'A',
        ref: a,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3']
    },
    {
        press: 'S',
        ref: s,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3']
    },
    {
        press: 'D',
        ref: d,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3']
    },
    {
        press: 'Z',
        ref: z,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3']
    },
    {
        press: 'X',
        ref: x,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3']
    },
    {
        press: 'C',
        ref: c,
        src: ['https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
    } 
    ]



const padKey = {color: 'aqua'}
const [info, setInfo] = useState('')

const [vol, setVol] = useState(59)

const handleVol = (event) => {
    setVol(event.target.value);
}

const [on, setOn] = useState(true)

const handlePower = () => {
  setOn(!on)
  setInfo('')
}

const [piano, setPiano] = useState(false)

const handleBank = () => {
  setPiano(!piano);
}

useEffect(() => {
  if (piano == true) {
    setInfo('Piano Mode');
  }
  else setInfo('Drum Mode')
}, [piano])



const handlePlay = (ref) => {

  if (on == true) {
      ref.current.volume = vol / 100
      
      ref.current.play()};
      ref.current.parentElement.style.boxShadow = 'none';
      ref.current.parentElement.style.color = 'rgb(50, 50 , 50)';
      setTimeout(() => {
        ref.current.parentElement.style.boxShadow = 'cyan 0px 0px 10px';
        ref.current.parentElement.style.color = 'aqua'
      }, 100)

      let parsedSrc = ref.current.src.split('/')
      let infoSrc = [...parsedSrc].pop().split('.').shift()
      if (on) {
        setInfo(infoSrc);
      }
      
    
}


const onKeyPress = (event) => {
  let key = keys.filter(k => event.key.toUpperCase() == k.press );
    
    handlePlay(key[0].ref);
   
    
}

useEffect(() => {
  window.addEventListener('keydown', onKeyPress);
  
  return () => { window.removeEventListener('keydown', onKeyPress)}
})




  return (
    
    <div id='drum-machine'>
      
      <div id='display'>
        <Pad handlePower={handlePower} handlePlay={handlePlay}
        keys={keys}
        padKey={padKey}
        info={info}
        vol={vol}
        handleVol={handleVol}
        handleBank={handleBank}
        piano={piano}
        />
      </div>
      
    </div>
    
    
    
  );
}

export default App;
