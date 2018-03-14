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

/* List of Components: Passing values trought each component */
/*const CardList = (props) => {
	return(
  	<div>
  	  <Card name="Víctor" company="Teravision" avatar_url="https://avatars1.githubusercontent.com/u/8445?v=4"/>
      <Card name="María" company="Google" avatar_url="https://avatars1.githubusercontent.com/u/8445?v=4"/>
  	</div>
  );
};*/

/*Data retrieved from DB or API*/
let data = [
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
];

// Passing data trought one data object to the card component using the "SPREAD OPERATOR"
const CardList = (props) => {
	return(
  <div>
  	{props.cards.map(card => <Card {... card}/>)}
	</div>
  );	
};

/*// Passing data trought one data object to the card component
const CardList = (props) => {
	return(
  <div>
	  {props.cards.map(card => <Card name={card.name} company={card.company} avatar_url={card.avatar_url}/>)}
	</div>
  );	
};*/

ReactDOM.render(<CardList cards={data} />, mountNode);