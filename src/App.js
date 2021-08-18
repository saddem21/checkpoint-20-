
     
import './App.css';
import Movies from './Component/Movies/Movies';
import {Route} from "react-router-dom";
import Description from "./Description";



function App() {
  return (
    <div className="App">
      
    
      <Route exact path="/" component={Movies}></Route>
      <Route exact path="/:id" component={Description}></Route>


    
    
      
    </div>
  );
}

export default App;






