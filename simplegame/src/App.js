import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
//import fire from './fire';
import fire, {auth, provider} from './fire';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }

    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);    
  }
  
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      }
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Free Game 3-Pack</h1>
          {this.state.user ?
            <button className="btn" onClick={this.logout}>Log Out</button>                
            :
            <button className="btn" onClick={this.login}>Log In</button>              
          }
        </header>
        <p className="App-intro">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/rps">Rock Paper Scissors</Link></p>
          <p><Link to="/ttt">Tic Tac Toe</Link></p>
          <p><Link to="/war">War</Link></p>
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
