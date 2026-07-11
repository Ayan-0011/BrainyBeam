const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json(), cors())


const data =[];

app.get("/", (req, res)=>{
    res.status(200).json({
        messgae:"hello buddy",
        data:data
    })
})

app.post('/', (req, res)=>{
    data.push(req.body);
   

    res.status(201).json({
        messgae:"data create successfully....",
        data:req.body
    })
})




app.listen(3000,()=>{
    console.log("server running on 3000");  
})


