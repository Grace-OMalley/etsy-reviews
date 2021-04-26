import React from 'react'
import ReactDOM from 'react-dom'
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }

    // bindings go here

  }

  render() {
    return (
      <div>This is a test change.</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));