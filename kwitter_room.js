
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCT_pgRuRbaDVfQkgRvph-gcpiTKKECWVk",
      authDomain: "kwitter-9a954.firebaseapp.com",
      databaseURL: "https://kwitter-9a954-default-rtdb.firebaseio.com",
      projectId: "kwitter-9a954",
      storageBucket: "kwitter-9a954.appspot.com",
      messagingSenderId: "633025143861",
      appId: "1:633025143861:web:645705d204caed42c0bd7c"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
