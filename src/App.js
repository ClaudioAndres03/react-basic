import React from 'react'
import './App.css';


function Helloworld() {
  return (
    <div>Hello World</div>
  );
}

const Apparow = () => {
  <div> this is my component: <Helloworld /></div>
}


class Appclass extends React.Component {

  render() {
    return (
      <div> this is my component: <Helloworld /></div>
    )
  }

}

function App() {
  return (
    <div className="App">
      this is my component: <Helloworld />
    </div>
  );
}

export default App;
