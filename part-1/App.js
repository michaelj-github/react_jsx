const App = () => {
    return (
        <div>      
          <FirstComponent />
          <NamedComponent name="Michael"/>      
        </div>
      )
}

ReactDOM.render(<App />, document.getElementById("root"))