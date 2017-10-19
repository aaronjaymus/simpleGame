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
      user: null,
      database: null,
      usersRef: null
    }

    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);
    this.addUser = this.addUser.bind(this);    
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
        console.log("User name: " + user.displayName);
        console.log("User email: " + user.email);
        console.log("User id: " + user.uid);
        console.log(JSON.stringify(user));
        this.addUser(user);
        this.setState({
          user
        });
      });
  }
  //Check if user is in DB, and if not, add to DB
  addUser() {
    var usersRef = this.state.database.ref("users");
    console.log(usersRef);
    this.setState({
      usersRef
    });
  }

  componentDidMount() {
    //grab database and set state
    var database = fire.database();
    console.log(database);
    this.setState({
      database
    });
    //check if user was already logged in to prevent logout on refresh
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
          {this.state.user ?
            <div>
              <div className='user-profile'>
                <img src={this.state.user.photoURL} />
              </div>
            </div> 
            :
            <div className='wrapper'>
              <p>
                You must be logged in to play
              </p>
            </div>
          }
        </header>
        <div className="App-intro">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/rps">Rock Paper Scissors</Link></p>
          <p><Link to="/ttt">Tic Tac Toe</Link></p>
          <p><Link to="/war">War</Link></p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
