// First component example
class Button extends React.Component{ 
  
  handleClick = () => {
    // with prev state variable
    this.props.onClickFunction(this.props.incrementValue)
  };
  
  render(){
    return (
      <button onClick={this.handleClick}> +{this.props.incrementValue}</button>
    );
  }
  
  /*render(){
    return (
      <button onClick={() => {this.props.onClickFunction(this.props.incrementValue)}}> +{this.props.incrementValue}</button>
    );
  }*/  
}

const Result = (props) => {
  return(
    <div>{props.counter}</div>
  );
}

class App extends React.Component{
  
  state = { counter:0 };
  
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  }
  
  render(){
    return(
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={15} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
// First component example
class Button extends React.Component{ 
  
  handleClick = () => {
    // with prev state variable
    this.props.onClickFunction(this.props.incrementValue)
  };
  
  render(){
    return (
      <button onClick={this.handleClick}> +{this.props.incrementValue}</button>
    );
  }
  
  /*render(){
    return (
      <button onClick={() => {this.props.onClickFunction(this.props.incrementValue)}}> +{this.props.incrementValue}</button>
    );
  }*/  
}

const Result = (props) => {
  return(
    <div>{props.counter}</div>
  );
}

class App extends React.Component{
  
  state = { counter:0 };
  
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  }
  
  render(){
    return(
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={15} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
