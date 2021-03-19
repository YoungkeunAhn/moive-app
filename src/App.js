import React from 'react';
// import propTypes from 'prop-types';
 

class App extends React.Component{

  state ={
    count: 0,
  }

  plus = () =>{
    console.log("plus");
    this.setState(current => ({ count : current.count + 1 }));
    //current를 사용해서 this.state.count를 접근하는 것이 아니라 current로 state를 불러와서 사용하는게 더욱 좋은 코드
  }

  minus = () =>{
    console.log("minus");
    this.setState(current => ({ count : current.count - 1 }));
  }

  //React Life Cycle
  //Mounting - 컴포넌트가 생성될 때
  componentDidMount(){
    console.log("rendered");
  }

  //Updating - setState()가 호출될 떄
  componentDidUpdate(){
    console.log("Updated");
  }

  //Unmounting - 컴포넌트가 죽을 때, 다른 컴포넌트로 바뀔 때, 페이지가 이동할 때
  componentWillUnmount(){
    console.log("Unmount")
  }

  render(){
    console.log("I'm rendering!!")
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
