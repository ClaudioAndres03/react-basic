import React from 'react'
import './App.css';


// function Helloworld(props) {
//   return (

//     <div id="hello">
//       <h3>{props.sub}</h3>
//       {props.mytext}
//     </div>
//   );
// }

class Helloworld extends React.Component {

  state = {
    show: true
  }

  // funcion tipo flecha
  changeState = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.sub}</h3>
          {this.props.mytext}
          <button onClick={() => this.changeState()}>Change state</button>
        </div>
      )
    } else {
      return (
        <div>
          Not Results
          <button onClick={() => this.changeState()}>Change state</button>
        </div>

      )
    }

  }
}

function App() {
  return (
    <div className="App">
      this is my component:
      <Helloworld sub="Tittle 01" mytext="User 01" />
    </div>
  );
}

export default App;
