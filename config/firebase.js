var admin = require('firebase-admin');


 var firebaseConfig = {
   apiKey: "AIzaSyCE6h7KCPZgPzVR9AXXfN6UOySr8K6hIAU",
   authDomain: "bird-a74a7.firebaseapp.com",
   projectId: "bird-a74a7",
   storageBucket: "bird-a74a7.appspot.com",
   messagingSenderId: "78367261873",
   appId: "1:78367261873:web:e99622d1f588cfb13bce90",
   measurementId: "G-SPFSN2BNYB"
  };

  const fb = admin.initializeApp(firebaseConfig);
  export default fb;
