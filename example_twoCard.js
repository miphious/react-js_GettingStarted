const Card = (props) => {
  return(
    <div style={{margin: '1em'}}>
      <img src="Http://placehold.it/75"/>
      <div style={{display: 'inline-block', marginLeft: 10 }}>
        <div style={{fontSize: '1.25em', fontweight: 'bold' }}>Name here...</div>
        <div>Company Name here ...</div>
        </div>
        </div>
  );
};
ReactDOM.render(<Card  />, mountNode);
