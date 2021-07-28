var firebaseConfig = {
  apiKey: "AIzaSyCThpF21lERnMf6OKRAgv3cKs4QdMpRWvk",
  authDomain: "project-93-94-95.firebaseapp.com",
  databaseURL: "https://project-93-94-95-default-rtdb.firebaseio.com",
  projectId: "project-93-94-95",
  storageBucket: "project-93-94-95.appspot.com",
  messagingSenderId: "13243138771",
  appId: "1:13243138771:web:5d6d225629d57ef5940a26"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name1:user_name,
      message:msg,
      like:0,
      });
      document.getElementById("msg").value;  
    } 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
