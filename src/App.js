import React from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display"
import Profile from "./Profile"
import Form from "./Form"

function App() {

  const url = "https://desolate-wave-73350.herokuapp.com/"

  //Get all state
  const [names, setNames] = React.useState([])
  //select name
  const [selectName, setSelectName] = React.useState({})

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

 //pass choosename to display and selectname to profile
 const chooseName = (name) => {
  console.log("chooseName-", name) 
   setSelectName(name)
 }

 //empty person
 const emptyPerson ={
   name: "",
   sign: ""
 }

//create new person
const handleCreate = (newPerson) => {
  fetch(url + "name/", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPerson),
  }).then(()=>{
    getAll()
  })
}
 

  return (
    <div className="App">
      <h1>What's Your Sign, Baybee?</h1>
      <div>
        <Switch>
          <Route path="/add" render={(rp) => <Form {...rp} label="Add" person={emptyPerson} handleSubmit={handleCreate}/>}/>
          <Route exact path="/" render={(rp) => <Display {...rp} names={names} chooseName={chooseName}/>}/>
          <Route path="/profile" render={(rp) => <Profile {...rp} names={names} selectName={selectName}/>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;



