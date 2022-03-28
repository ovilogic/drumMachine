import Pad from "./components/pad";
import './style/app.css'



function App() {
  return (
    <>
    <div id='drum-machine'>
      Drum machine
      <div id='display'>
        <Pad />
      </div>
      
    </div>
    <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'>
    </script>
    </>
    
  );
}

export default App;
