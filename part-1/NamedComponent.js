const NamedComponent = (props) => {
    return (
    <p>My name is {props.name}.</p>
    );
};

const App = () => {
    return (
    <div>
      <NamedComponent name={"Michael"} />
    </div>
  );
};
  
// not needed if rendered by App.js
// ReactDOM.render(<App />, document.getElementById("root"))