import './App.css';
import Particles from "react-particles-js";
import AppRouter from './Router/Router'


function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "rgb(220, 20, 60)"
              }
            }
          }
        }}
      />

      <AppRouter />
    </div>
  );
}

export default App;
