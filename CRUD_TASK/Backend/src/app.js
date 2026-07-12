const express = require('express');
const connectDb = require('./db/db');
const usermodel = require('./model/modl')
const cors = require('cors');

const app = express();
connectDb()

app.use(express.json());
app.use(cors());


app.post('/user/', async (req, res) => {
    const data = req.body
    await usermodel.create({
        name: data.name,
        age: data.age,
        add: data.add,
    })
    res.status(201).json({
        massge:"user create succcessfully....."
    })
})


app.get('/user/', async(req, res)=>{
   const user = await  usermodel.find();
    res.status(200).json({
        messgae:"user fech ssuccesssfully....",
        user:user
    })
})


app.delete('/user/:id', async(req, res)=>{
    const id = req.params.id
    await usermodel.findOneAndDelete({_id:id})

    res.status(200).json({
        messgae:"user deleted sucssefully.."
    })
})


app.patch('/user/:id', async(req, res)=>{
    const id = req.params.id
    const {name, age, add} = req.body
    await usermodel.findOneAndUpdate({_id:id}, {name:name, age:age, add:add})

    res.status(200).json({
        message:"user updated successfully.."
    })
})

module.exports = app 
