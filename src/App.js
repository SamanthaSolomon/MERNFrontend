import React from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display"

function App() {

  const url = "https://desolate-wave-73350.herokuapp.com/"

  //Get all state
  const [names, setNames] = React.useState([])

  //Get all function
  const getAll = () => {
    fetch(url + "name/")
    .then((response) => response.json())
    .then((data) => {
      setNames(data)
    })
  }
  //Get all once
  React.useEffect(() => {
    getAll()
  }, [])

  return (
    <div className="App">
      <h1>What's Your Sign, Baybee?</h1>
      <div>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp}
          names={names}/>}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;



