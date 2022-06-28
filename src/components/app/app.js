//CSS
import "./app.css";

//COMPONENTS
import Scene from "../scene";

//CODE
const App = () => {

  const canvasWidth = 1000;
  const canvasHeight = 600;

  return (
    <div className="app">
      <Scene canvasWidth={canvasWidth} canvasHeight={canvasHeight}/>
    </div>
  );
};

export default App;
