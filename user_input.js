/* Individual Cards */
const Card = (props) => {
	return(
  	<div style={{margin:"1em"}}>
  	  <img width="75" src={props.avatar_url}/>
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize:'1.25em', fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
  	</div>
  );
};

// Passing data trought one data object to the card component using the "SPREAD OPERATOR"
const CardList = (props) => {
	/** Another alternative to pass properties to the component without the spread operator **/
	/*{props.cards.map(card => <Card name={card.name} avatar_url={card.avatar_url} company={card.company}/>)}*/
	return(
  <div>
  	{props.cards.map(card => <Card {... card}/>)}
	</div>
  );	
};

class Form extends React.Component{

	state = {userName : ''}
  
  handleSubmit = (event) => {
  	event.preventDefault();
    console.log(this.userNameInput.value);
  };
  
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" 
        	value={this.state.userName}
          onChange={(event) => this.setState({userName:event.target.value})}
          placeholder="Github name" required
        />
        <button type="bubmit"> Add card </button>
    	</form>
    );
  }
}

class App extends React.Component{

	state = {
  	cards:[
    	{
      	name:'Víctor',
        company: 'Teravision',
        avatar_url: 'https://avatars1.githubusercontent.com/u/8445?v=4'
    	},
    	{
    		name:'María',
    		company: 'Google',
    		avatar_url: 'https://avatars1.githubusercontent.com/u/6820?v=4'
    	}
    ]  	
  };
	render(){
  	return(
    	<div>
    	  <Form />
      	<CardList cards={this.state.cards}/>
    	</div>    	
    );
  }
}

ReactDOM.render(<App />, mountNode);
