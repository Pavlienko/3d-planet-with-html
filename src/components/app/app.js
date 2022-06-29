//CSS
import "./app.css";

//COMPONENTS
import Scene from "../scene";

//CODE
const App = () => {
  const canvasWidth = 1000;
  const canvasHeight = 600;

  const reviews = [
    {
      id: 1,
      photo: "https://fshcdn.com/q/Jrb2KdW_qphh6IA7__256x256.jpg?w=640",
      name: "Mike Shadow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, mollitia!",
      coords: [1.001, 0.001, 0],
    },
    {
      id: 2,
      photo: "https://fshcdn.com/q/Jrb2KdW_qphh6IA7__256x256.jpg?w=640",
      name: "Lizabeth Shadow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, mollitia!",
      coords: [0.001, 1.001, 0],
    },
  ];

  return (
    <div className="app">
      <Scene
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        reviews={reviews}
      />
    </div>
  );
};

export default App;
