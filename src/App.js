import React from 'react'
import './App.css';


function Helloworld(props) {
  return (

    <div id="hello">
      <h3>{props.sub}</h3>
      {props.mytext}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      this is my component:
      <Helloworld mytext="Hello user 01" sub="tittle 01" />
      <Helloworld mytext="Hello user 02" sub="tittle 02" />
      <Helloworld mytext="Hello user 03" sub="tittle 03" />
    </div>
  );
}

export default App;
