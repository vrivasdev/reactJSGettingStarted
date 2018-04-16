/**
 * Author: Víctor Rivas
 * email: victor.rivas.sistemas@gmail.com
 * Description: Play nine game React JS components 
 **/

/** Stars function component **/
const Stars = (props) => {		   
  return(
    <div className="col-5">
    	{_.range(props.numberOfStars).map((number, i) =>
      		<li key={i} className="fa fa-star"></li>
      )}
    </div>
  );
}
	
/** Button function component **/
const Button = (props) => {
  return(
    <div className="col-2">
      <button class="btn" disabled={props.selectedNumbers.length == 0}>=</button>
    </div>
  );
}

/** Answer function component **/
const Answer = (props) => {
  return(
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => 
      		<span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
      )}
    </div>
  );
}
/** Numbers function component **/
const Numbers = (props) => {
	
 /** If any selected number is in the numbers list display it as a 'selected' one **/	
	const numberClassName = (number) => {  
  		if (props.selectedNumbers.indexOf(number) >= 0) return 'selected';
  }

  return(
    <div className="container">
      <div className="card text-center">
        <div>
        	{Numbers.list.map((number, i) =>         	
        	<span key={i} className={numberClassName(number)}
                onClick={() => props.selectNumber(number)}> {number} </span>
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
	// Selected numbers
  state = {
  		selectedNumbers: [],
      numberOfStars  : 1 + Math.floor(Math.random()*9)
	}
  /* Select a number from the list */
  selectNumber = (clickedNumber) => {
  		/** If the number was already selected **/
  		if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return;
      
  		this.setState(prevState => ({
      	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)        
      }));
  }
  
  /* Filter all numbers different than selected ones */
  unselectNumber = (clickedNumber) => {
  		this.setState(prevState => ({
      	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
      }));
  }
  
	render(){
  
  	const { selectedNumbers, numberOfStars } = this.state;
    
		return(
    		<div>
  	  		<h3> Play Nine </h3>
        		<div className="row">
				<Stars numberOfStars={numberOfStars}/>
				<Button selectedNumbers={selectedNumbers}/>
				<Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        		</div>  
        		<br/>
        		<Numbers selectedNumbers={selectedNumbers}
            selectNumber={this.selectNumber}/>
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
