import express from 'express'

const app=express();
const port=3000

app.use(express.json())

let data=[];
let nextId=0;

//different requests types having same route
app.post('/data',(req,res)=>{
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
   data.splice(dataindex,1);
   res.status(204).send("data is deleted");
   }
});

//Listening to server
app.listen(port, ()=>{
    console.log(`Server is runnung at ${port}`)
});