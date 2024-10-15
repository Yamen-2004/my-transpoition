import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import {OnedriverInfo,AlldriverInfo } from './drivers.js';
import {IrbidInfo} from './irbid.js';
import {ammanInfo} from './amman.js';
import { Addreport } from './report.js';
import { jarashInfo } from './jarash.js';
import { zarqaainfo } from './zarqaa.js';
import { mafraqInfo } from './mafraq.js';
import { balqaainfo } from './balqaa.js';
import { karakInfo } from './karak.js';
import { tafilehInfo } from './tafileh.js';
import { aqabaInfo } from './aqaba.js';
import { madabainfo } from './madaba.js';
import { maanInfo } from './maan.js';
import { ajlouninfo } from './ajloun.js';





const uri = "mongodb+srv://Yamen:yamen2000910732@cluster0.wdoxeiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");  
    const database = client.db("Transpoition")
    const collection = database.collection("drivers");
    const collection2 = database.collection("Irbid");
    const collection3 = database.collection("amman");
    const collection4 = database.collection("report");  
    const collection5 = database.collection("jarash");
    const collection6 = database.collection("zarqaa");
    const collection7 = database.collection("madaba");
    const collection8 = database.collection("ajloun");
    const collection9 = database.collection("maan");
    const collection10 = database.collection("aqaba");
    const collection11 = database.collection("tafelih");
    const collection12 = database.collection("karak");
    const collection13 = database.collection("balqaa");
    const collection14 = database.collection("mafraq");

    

    // -----------------------------------------------------------------------------
    // drivers section below
    // -----------------------------------------------------------------------------

    app.get("/users/info",OnedriverInfo(app,collection,new ObjectId("66ceb2379d6c9212f0872366")))
    AlldriverInfo(app,collection) // id , email , password , name , phone,londitude,latitude,bus_number

    app.put("/long/lat/:id",async(req,res)=>{
      try{
  
        
        const body = req.body;
        collection.updateOne({_id: new ObjectId (req.params.id) },{$set:
          {"longtude":body.longtude,
            "latitude":body.latitude 
          }
          
          
        })
  
        console.log(`updaating document with id : ${req.params.id}`)
        res.send("done")
  
  
      }
      catch(error){
  res.send(error.message)
  console.log(error.message)
      }
    })
  

    IrbidInfo(app,collection2) //  to show all the points in irbid
    ammanInfo(app,collection3) // to show all the points in amman
    jarashInfo(app,collection5) // to show all the points in jarash
    zarqaainfo(app,collection6) // to show all the points in zarqaa
    madabainfo(app,collection7) // to show all the points in zarqaa
    ajlouninfo(app,collection8) // to show all the points in zarqaa
    maanInfo(app,collection9) // to show all the points in zarqaa
    aqabaInfo(app,collection10) // to show all the points in zarqaa
    tafilehInfo(app,collection11) // to show all the points in zarqaa
    karakInfo(app,collection12) // to show all the points in zarqaa
    balqaainfo(app,collection13) // to show all the points in zarqaa
    mafraqInfo(app,collection14) // to show all the points in zarqaa










    Addreport(app,collection4) // to add a report to the database

    
    


    


   


    
  

  } 
  catch (e) {
    console.error(e);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);

});