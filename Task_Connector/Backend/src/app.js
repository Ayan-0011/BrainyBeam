const express = require('express');
const connectDB = require('./db/db');
const multer = require('multer');
const uploadfile = require('./service/storage.service')
const postModel = require('./model/post.modal')


const app = express();
connectDB();
app.use(express.json());


const upload = multer({storage: multer.memoryStorage()})


app.post('/create-post', upload.single("image"), async (req, res)=>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadfile(req.file.buffer)  
    console.log(result);
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
     
     return res.status(201).json({
        messgae:"post created successfully",
        post
    })

})

app.get('/post', async(req, res)=>{

    const post = await postModel.find()
    res.status(200).json({
        message:"post fetch successfully...",
        post:post
    })
})


module.exports = app 