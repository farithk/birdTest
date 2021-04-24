const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//let skillsData = require('./data/movies.json');
const admin =require('firebase-admin');

var serviceAccount = require("./bird-ffacc-firebase-adminsdk-7ltla-73ab3e3105");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bird-ffacc-default-rtdb.firebaseio.com"
});

const db = admin.database();


//Allow cros origin
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.get('/test1', function(req, res){
  res.json({message:"test1"});
});

let name = "";

app.post('/', function(req, res){
  name = req.body;
  console.log(name);
  res.json({message:"test2"});
});

app.options('movies', cors());
app.post('/movies', cors(), async function(req, res){

  //if (req.body.akelab == "123456789"){
    await db.ref('birds').push({test:"test1"});
    await db.ref('birds').once('value', (snapshot) => {
      const data = snapshot.val();
      for (var property in data) {
      if (data.hasOwnProperty(property)) {
        console.log(property);
        console.log(data[property]);
        }
      }
    })
    console.log(req.body);
    //res.json(skillsData);
    res.json({message:"test3"});
  //} else {
    //res.json({error: "Can not get the data due to security reasons"})
  //}

});

app.listen(process.env.PORT || 3030, () => {
  console.log("Server Listening on Port 3030");
});
