const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    }
];

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})
app.post('/comments',(req,res)=>{
    const {username,comment} = req.body;
    comments.push({username,comment})
    res.redirect('/comments')
})

app.listen(2000,()=>{
    console.log("On Port 2000!");
})