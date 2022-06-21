import './App.css';
import StartPage from "./startPage";
import GamePage from "./gamePage";
import ResultPage from "./resultPage";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
  <div>
    <Switch>
      <Route exact path="/">
        <StartPage/>
      </Route>
      <Route exact path="/gamePage">
        <GamePage/>
      </Route>
      <Route exact path="/resultPage">
        <ResultPage/>
      </Route>
    </Switch>
  </div>
  );
}

export default App;
