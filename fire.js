var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {

  apiKey: "AIzaSyBjzADB6FTVNOiPdeb_I2uD7_u0oNcR6Lw",
  authDomain: "esp32-bd85d.firebaseapp.com",
  databaseURL: "https://esp32-bd85d-default-rtdb.firebaseio.com",
  projectId: "esp32-bd85d",
  storageBucket: "esp32-bd85d.appspot.com",
  messagingSenderId: "379410440233",
  appId: "1:379410440233:web:10c2209e964771ddf6bc38",
  measurementId: "G-NKL21F6XKL"
};
const fire = firebase.initializeApp(config);
module.exports = fire;