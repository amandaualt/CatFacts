let http = require('http'),
    express = require('express'),
    app = express(),
    Facts = require('../model/facts');

app.get('/facts', async (req, res)=>{
    const facts = await Facts.connect();
    facts.collection('facts').find().toArray((err, resp)=>{
        if(err) throw err
        console.log(resp)
       res.json(resp)
    })
});

app.listen(3000);