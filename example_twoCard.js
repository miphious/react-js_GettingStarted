const Card = (props) => {
  return(
    <div style={{margin: '1em'}}>
      <img width= "75" src={props.avatar_url}/>
      <div style={{display: 'inline-block', marginLeft: 10 }}>
        <div style={{fontSize: '1.25em', fontweight: 'bold' }}>{props.name}</div>
        <div>{props.company}</div>
        </div>
        </div>
  );
};

const CardList =  (props) => {
  return (
    <div>
      <Card name="Suthas Ganeshathasan"
      avatar_url="https://avatars0.githubusercontent.com/u/24394596?v=4"
      company="Centennial College"/>
      <Card name="Paul O'Shannessy"
      avatar_url="https://avatars.githubusercontent.com/u/8445?v=3"
      company="Facebook"/>
    </div>

  )
}

ReactDOM.render(<CardList />, mountNode);
