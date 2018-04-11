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
    {props.cards.map(card => <Card key={card.id} {... card}/>)}
  </div>
  );  
};

class Form extends React.Component{

  state = {userName : ''}
  
  handleSubmit = (event) => {
  
    event.preventDefault();
    /* Retrieving data from api*/
    axios.get(`https://api.github.com/users/${this.state.userName}`)
         .then(resp => {  
            /** When promise returns it will be sent to the 'addNewCard'
             *  function trought the 'onSubmit' property 
             **/
            this.props.onSubmit(resp.data);
            this.setState({userName: ''}); // cleans up the input
         });
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

  state = {cards:[]};
  
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };
  
  render(){
    /* linked property to addNewCard method */
    return(
      <div> 
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>      
    );
  }
}

ReactDOM.render(<App />, mountNode);
