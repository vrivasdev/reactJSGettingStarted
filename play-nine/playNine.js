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

  let button;
  
	switch(props.answerIsCorrect){
  	case true:
    	button = <button class="btn btn-success" onClick={props.acceptAnswer}><i className="fa fa-check"></i></button>;
      break;
    case false:
    	button = <button class="btn btn-danger"><i className="fa fa-times"></i></button>;
    	break;
    default:
    	button = <button class="btn" disabled={props.selectedNumbers.length == 0} onClick={props.checkAnswer}>=</button>;
    	break;
  }
  
  return(
    <div className="col-2">
      {button}
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
	
 /** If any selected number is in the numbers list display it as a selected or used one **/	
	const numberClassName = (number) => {  
  		if (props.selectedNumbers.indexOf(number) >= 0) return 'selected';
      if (props.usedNumbers.indexOf(number) >= 0) return 'used'; 
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
      numberOfStars  : 1 + Math.floor(Math.random()*9),
      answerIsCorrect: null,
      usedNumbers: [],
	}
  /* Select a number from the list */
  selectNumber = (clickedNumber) => {
  		/** If the number was already selected **/
  		if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return;
      
  		this.setState(prevState => ({
      	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
        answerIsCorrect: null,
      }));
  }
  
  /* Filter all numbers different than selected ones */
  unselectNumber = (clickedNumber) => {
  		this.setState(prevState => ({
      	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber),
        answerIsCorrect: null,
      }));
  }
  /* It compares the total of answers with the random stars */
  checkAnswer = () => {    
  	this.setState(prevState => ({
    		answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, num) => acc + num, 0)
    }));
  }
  /* Stores selected numbers as used ones and restart all states */
  acceptAnswer = () => {
  	this.setState(prevState => ({
    		usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        answerIsCorrect: null,
        numberOfStars  : 1 + Math.floor(Math.random()*9),
    }));
  }
  
	render(){
  	const { 
    	selectedNumbers, 
      numberOfStars, 
      answerIsCorrect,
      usedNumbers} 
    = this.state;
    
		return(
    		<div>
  	  		<h3> Play Nine </h3>
        		<div className="row">
          		<Stars numberOfStars={numberOfStars}/>
							<Button selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect}
              acceptAnswer={this.acceptAnswer}/>
							<Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        		</div>  
        		<br/>
        		<Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers}/>
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
