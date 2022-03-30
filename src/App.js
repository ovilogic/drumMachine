import { useState } from "react";
import Pad from "./components/pad";
import './style/app.css'



function App() {
 const [on, setOn] = useState(true)

 const handlePower = () => {
   setOn(!on)
 }
 console.log(on)


  return (
    
    <div id='drum-machine'>
      
      <div id='display'>
        <Pad power={on} handlePower={handlePower} />
      </div>
      
    </div>
    
    
    
  );
}

export default App;
