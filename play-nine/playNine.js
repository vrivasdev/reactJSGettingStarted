
const Stars = (props) => {
	
  /* Random stars number */
  const numberOfStars = 1 + Math.floor(Math.random()*9);
  
  let stars = [];
  
  for(let i =0; i<numberOfStars; i++){
  	stars.push(<li key={i} className="fa fa-star"></li>);
  }
		   
  return(
    <div className="col-5">
      {stars}
    </div>
  );
}

const Button = (props) => {
  return(
    <div className="col-2">
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return(
    <div className="col-5">
      ...
    </div>
  );
}

const Numbers = (props) => {
  return(
    <div className="container">
      <div className="card text-center">
        <div>
          <span>1</span>
          <span className="selected">2</span>
          <span className="used">3</span>
        </div>        
      </div>
    </div>
  );
}

/* Game component Class */
class Game extends React.Component{
	render(){
  	return(
    	<div>
  	  	<h3> Play Nine </h3>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>  
        <br/>
        <Numbers />
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
