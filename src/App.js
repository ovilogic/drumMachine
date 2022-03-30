import { useState } from "react";
import Pad from "./components/pad";
import './style/app.css'



function App() {
 const [on, setOn] = useState(true)


  return (
    
    <div id='drum-machine'>
      
      <div id='display'>
        <Pad power={on}/>
      </div>
      
    </div>
    
    
    
  );
}

export default App;
