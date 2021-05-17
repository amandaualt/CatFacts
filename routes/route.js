let http = require('http'),
    express = require('express'),
    app = express(),
    Conn = require('../model/facts');

app.get('/facts', async (req, res)=>{
    const con = await Conn.connect();
    con.collection('facts').find().toArray((err, resp)=>{
        if(err) throw err
       res.json(resp)
    })
});

app.post('/login', async(req, res)=>{
    const con = await Conn.connect();
    con.collection('facts').find({content: new RegExp('^')}).toArray((err, resp)=>{

    })
})

app.listen(3000);