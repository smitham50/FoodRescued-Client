import React from 'react';
import './App.css';

//Components
import SignIn from './Components/SignIn'

class App extends React.Component {

  state = {
    currentUser: null
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.user_id = user.id
    })
    debugger
  }

  render() {
    return (
      <div className="App">
        <SignIn setUser={this.setUser}></SignIn>
      </div>
    )
  }
}

export default App;
