import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyALsr1z33NPXk8Dg4Jm3AwgQ5H6epIXSM0",
    authDomain: "simplegames-ae23c.firebaseapp.com",
    databaseURL: "https://simplegames-ae23c.firebaseio.com",
    projectId: "simplegames-ae23c",
    storageBucket: "simplegames-ae23c.appspot.com",
    messagingSenderId: "835160726655"
  };
  
  var fire = firebase.initializeApp(config);

  export default fire;