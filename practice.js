var firebaseConfig = {
    apiKey: "AIzaSyAdEjoOJh4ni1908tpCC1ldTOge_vr6ngw",
    authDomain: "albert-einstein-dxpc.firebaseapp.com",
    databaseURL: "https://albert-einstein-dxpc-default-rtdb.firebaseio.com",
    projectId: "albert-einstein-dxpc",
    storageBucket: "albert-einstein-dxpc.appspot.com",
    messagingSenderId: "41999259747",
    appId: "1:41999259747:web:6ce859118a54b5e9d9c056"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          hello_how_are_you_i_am_under_the_water_plz_help_me_blobble:"  hello how are you i am under the water plz help me blobble"
      });
  }