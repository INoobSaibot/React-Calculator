import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

function Lcd(props) {
  return <div>
            <div className="lcd" value={props.input}>{props.input}</div>
            
        </div>;
}

// class classSquare extends Component {
//   constructor(props) {
//     super(props);
//   }
  
//   render() {
//     return (
//       <button className="square" value={this.props.value} onClick={this.props.handleClick}>{this.props.value}</button>
//     )
//   }
// }

function Square(props) {
  return <button className="btn" value={props.value} onClick={props.handleClick}>{props.value}</button>
}

class Calculator extends Component {
  constructor(props) {
  super(props);

  this.state = {
    toScreen: "/",
    expression: [],
  }
}
  renderRow(keyStr){
    let handleClick = this.handleClick
    const keys = keyStr.split("")

    const items = keys.map(function(item){
      return <Square value={item} handleClick={handleClick} key={item.toString()}/>;
    })
    return items
  }

  renderButton(value) {
    return <Square value={value} handleClick={this.handleClick} />;
  }
  
  render() {
    const clearRow = this.renderRow("C")
    const row1 = this.renderRow("789*")
    const row2 = this.renderRow("456-")
    const row3 = this.renderRow("123+")
    const row4 = this.renderRow("C0.=")

    return (
      <div className="calculator">
        <Lcd input = {this.state.toScreen}/>
        <div>
          {row1}
        </div>

        <div>
          {row2}
        </div>

        <div>
          {row3}
        </div>
        <div>
          {row4}
        </div>
      </div>
    );
  }

  handleClick = (e) => {
    let value = e.target.value
    let button = value
    
    if(button === "C") {
      this.handleClear()
    } else if (button === "=") {
      this.onEquals();
     } else if (button === "+") {
      this.setState({expression:this.state.expression + value})
    } else if (button === "-") {
      this.setState({expression:this.state.expression + value})
    } else if (button === "*") {
      this.setState({expression:this.state.expression + value})
    } else if (button === ".") {
      this.setState({expression:this.state.expression + value})
    }

    else{
      this.setState({expression:this.state.expression + value
      }, ()=> {
        this.setState({toScreen: eval(this.state.expression)},
        console.log(this.state.expression))
      })
    }
  }

  onEquals() {
  //   let expression = this.state.expression;
  //   try {
  //   let result = eval(expression)
  //   this.setState({toScreen:result})
  // }
  //   catch(err) {
  //     console.log(err.message)
  //     this.handleClear()
  //   }    
  }

  handleClear() {
    this.setState({expression:[], toScreen:"/"})
  }

}


export default App;
