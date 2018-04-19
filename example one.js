class Button extends React.Component {
  state = {counter:0};

  // handleClick = () => {
  //   this.setState((prevState) => ({
  //     counter: prevState.counter + 1
  //   }));
  // };

  render() {
    return (
      <button onClick=(this.handleClick)>
      +1
      </button>
    );
  }
}

const Result = (props) => {
  return(
    <div>...<div>
  );
};

class App extends React.Component {
  state = {counter:0};
 incrementCounter = () => {
   this.setState((prevState) => ({
       counter: prevState.counter + 1
     }));
 }
  render() {
    return(
      <div>
      <Button />
      <Result />
      </div>
    );
  }
}
ReactDOM.render(<Button />, mountNode);
