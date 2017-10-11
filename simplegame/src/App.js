import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import fire from './fire';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { messages: [] }; //setting up React State
  }
  
  componentWillMount(){
    //Create reference to messages in Firebase DB
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messageRef.on('child_added', snapshot => {
      //Update React state when message is added to Firebase DB
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    });
  }

  addMessage(e) {
    e.preventDefault(); // < - prevent form submit from reloading page
    //send message to Firebase
    fire.database().ref('messages').push(this.inputEl.value);
    this.inputEl.value = ''; //clears input
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Free Game 3-Pack</h1>
        </header>
        <p className="App-intro">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/rps">Rock Paper Scissors</Link></p>
          <p><Link to="/ttt">Tic Tac Toe</Link></p>
          <p><Link to="/war">War</Link></p>
          {this.props.children}
        </p>

        <form onSubmit={this.addMessage.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { /* Render the list of messages */
              this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
            }
          </ul>          
        </form>
      </div>
    );
  }
}

export default App;
