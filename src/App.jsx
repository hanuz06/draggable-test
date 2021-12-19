import "./App.css";
import Box from "./components/Box";
import Draggable from "./components/Draggable";

function App() {
 
  return (
    <div className='app'>      
      <Draggable>
        <Box/>
      </Draggable>
    </div>
  );
}

export default App;
