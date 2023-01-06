const firebaseConfig = {
    apiKey: "AIzaSyBkQgwKH5_ijLgtzzypWGZn-DbhkXWQfBM",
    authDomain: "chat-app-77aec.firebaseapp.com",
    databaseURL: "https://chat-app-77aec-default-rtdb.firebaseio.com",
    projectId: "chat-app-77aec",
    storageBucket: "chat-app-77aec.appspot.com",
    messagingSenderId: "580456015499",
    appId: "1:580456015499:web:ca0ab3a564b86a5419568e",
    measurementId: "G-7XEKDQKXM2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
}


function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
        });
        localStorage.setItem("room_name", room_name)
        window.location = "chat_room.html"
    } 

