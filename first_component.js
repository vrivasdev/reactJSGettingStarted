
// First component example
class Button extends React.Component{

	state = { counter:13 };
  
  handleClick = () => {
  	// with internal properties
  	/*this.setState({
    	counter: this.state.counter + 1
    })*/

    // with prev state variable
    this.setState((prevState) => ({
    	counter: prevState.counter + 1
    }));
  }
  
  render(){
  	return (
  		<button onClick={this.handleClick}> {this.state.counter} </button>
  	);
  }  
}

ReactDOM.render(<Button />, mountNode);