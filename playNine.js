
/* Game component Class */
class Game extends React.Component{
	render(){
  	return(
    	<div>
  	  	<h3> Play Nine </h3>
  		</div>
    );
  }
}

/* Main App class */
class App extends React.Component{
	render() {
  	return(
    	<div>
    	  <Game />
    	</div>
    );
  };
}

ReactDOM.render(<App />, mountNode);
