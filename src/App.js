
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">      
      
      <Weather defaultCity="Los Angeles"/>

      <footer>
        <a href="https://github.com/brittney10/weather-react-app" >Open-source code</a>
         by Brittney Isaacs
      </footer>
    </div>
    </div>
  );
}

export default App;
