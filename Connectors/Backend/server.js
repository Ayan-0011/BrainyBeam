const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json(), cors())

app.get("/", (req, res)=>{
    res.status(200).json({
        messgae:"hello buddy"
    })
})





app.listen(3000,()=>{
    console.log("server running on 3000");  
})


