const express = require("express");

const app = express()
app.use(express.json());

const notes = []

app.get('/notes', (req, res) => {

    res.status(200).json({
        message: "notes fetch successfully",
        notes: notes
    })
});

app.post('/notes', (req, res) => {

    notes.push(req.body)
    // console.log(req.body);

    res.status(201).json({
        messgage: "notes create successfully"
    })
});


app.delete('/notes/:index', (req, res) => {

    const index = req.params.index
    //console.log(index);

    delete notes[index]

    res.status(200).json({
        massgage: "notes delete successfully"
    })
})

app.patch('/notes/:index', (req, res)=>{
    const index = req.params.index
    const discription = req.body.discription

    notes[ index ].discription = discription
    res.status(200).json({
        massgage:"update successfully"
    })
})

app.listen(3000, () => {
    console.log("server running in 3000 port");
});