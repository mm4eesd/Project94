
const firebaseConfig = {
    apiKey: "AIzaSyCS7WaLizACs14t0tjKGe6kPHauFB5HwfQ",
    authDomain: "classtest-38c0d.firebaseapp.com",
    databaseURL: "https://classtest-38c0d-default-rtdb.firebaseio.com",
    projectId: "classtest-38c0d",
    storageBucket: "classtest-38c0d.appspot.com",
    messagingSenderId: "1099271576995",
    appId: "1:1099271576995:web:ad7a1e490bfedc73bace16"
  };
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
