/** Stars function component **/
const Stars = (props) => {
	
  /* Random stars number */
  const numberOfStars = 1 + Math.floor(Math.random()*9);
  
  /** Old way to do it*/
  /*let stars = [];
  
  for(let i =0; i<numberOfStars; i++){
  	stars.push(<li key={i} className="fa fa-star"></li>);
  }*/
		   
  return(
    <div className="col-5">
    	{_.range(numberOfStars).map((number, i) =>
      		<li key={i} className="fa fa-star"></li>
      )}
    </div>
  );
}
	
/** Button function component **/
const Button = (props) => {
  return(
    <div className="col-2">
      <button>=</button>
    </div>
  );
}

/** Answer function component **/
const Answer = (props) => {
  return(
    <div className="col-5">
      <span>5</span>
      <span>6</span>
    </div>
  );
}
/** Numbers function component **/
const Numbers = (props) => {

  return(
    <div className="container">
      <div className="card text-center">
        <div>
	  {Numbers.list.map((number, i) => 
	  	<span key={i}> {number} </span>
	  )}
        </div>        
      </div>
    </div>
  );
}

// Global variable to be used in any component
Numbers.list =  _.range(1, 10);

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
