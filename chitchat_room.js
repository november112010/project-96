// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCThpF21lERnMf6OKRAgv3cKs4QdMpRWvk",
      authDomain: "project-93-94-95.firebaseapp.com",
      projectId: "project-93-94-95",
      storageBucket: "project-93-94-95.appspot.com",
      messagingSenderId: "13243138771",
      appId: "1:13243138771:web:5d6d225629d57ef5940a26"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
    {
     room_names=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_names).update({purpose: "adding room name"});
     localStorage.setItem("room_name",room_names);
     window.location="chitchat_page.html";     
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name - " + Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chitchat_page.html";    
}
function Logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
