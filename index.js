import express from 'express'
import 'dotenv/config'
import logger from './logger.js';
import morgan from 'morgan';
const app=express();
const port=process.env.PORT || 4000

const morganFormat = ':method :url :status :response-time ms';

app.use(morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(' ')[0],
          url: message.split(' ')[1],
          status: message.split(' ')[2],
          responseTime: message.split(' ')[3],
  
        };
        logger.info(JSON.stringify(logObject));
      }
    }
  }));

app.use(express.json())

let data=[];
let nextId=0;

//different requests types having same route
app.post('/data',(req,res)=>{
    // console.log("post");
    logger.info("POST");
    const {name,price}=req.body;
    const newdata={id: nextId++,name,price};
    data.push(newdata);
    res.status(201).send(data);
})

//get data
app.get('/data',(req,res)=>{
   res.status(200).send(data);
});

//Get a specific id
app.get("/data/:id",(req,res)=>{
    const datagot=data.find(d=>d.id===parseInt(req.params.id))
    if(!datagot){
        logger.warn("Info not found");
        res.status(404).send("item not found");
    }
    else{
        res.status(200).send(datagot);
    }
})

//update existing data
app.put('/data/:id',(req,res)=>{
   const dataid= req.params.id
   if(dataid===-1){
    res.status(404).send("Item not found");
   }
   const datagot=data.find(d=>d.id===parseInt(req.params.id));
    const {name,price}=req.body;
    datagot.name=name;
    datagot.price=price;
    res.status(200).send(datagot); 

});

//delete
app.delete('/data/:id',(req,res)=>{
   const dataindex=data.findIndex(d=> d.id===parseInt(req.params.id));
   if(dataindex===-1){
    res.status(404).send("Data item is not found");
   }
   else{
   res.status(200).send(data.find(d=>d.id===parseInt(req.params.id)));
   data.splice(dataindex,1);
   res.status(204).send("data is deleted");
   }
});

//Listening to server
app.listen(port, ()=>{
    console.log(`Server is runnung at ${port}`)
});