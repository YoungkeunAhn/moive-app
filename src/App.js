import React from 'react';
// import propTypes from 'prop-types';
 

class App extends React.Component{

  state ={
    count: 0,
  }

  plus = () =>{
    console.log("plus");
    this.setState(current => ({ count : current.count + 1 }));
  }

  minus = () =>{
    console.log("minus");
    this.setState(current => ({ count : current.count - 1 }));
  }

  render(){
    return(
      <div>
        <h1>Number : { this.state.count }</h1>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
