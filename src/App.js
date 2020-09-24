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
      localStorage.authentication_token = user.user.authentication_token
    })
  }

  clearUser = () => {
    this.setState({
      currentUser: null
    }), () => {
      localStorage.clear()
    }
  }

  render() {
    return (
      <div className="App">
        <SignIn setUser={this.setUser} clearUser={this.clearUser}></SignIn>
      </div>
    )
  }
}

export default App;
