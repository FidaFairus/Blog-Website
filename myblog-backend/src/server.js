const express =require ('express');
const {Article}= require('../models/data')

const app = express();
app.use(express.json());
const db=
app.put('/api/articles/:name/upvotes',(req,res)=>{
   const { name }= req.params;
   const article= articlesInfo.find(a => a.name===name);
   if (article){
     article.upvotes += 1;
     res.send(`the ${name} article now has ${article.upvotes} upvotes`)
   }
   else{
    res.send(`article doesn't exits`)
   }
});

app.post('/api/articles/:name/comments',(req,res)=>{
    const {name}=req.params;
    const {postedBy,text}=req.body;
    const article=articlesInfo.find(a => a.name===name);

    if(article){
    article.comments.push({postedBy,text});
    res.send(article.comments)
    }else{
        res.send(`article doesn't exits`)
    }
});

app.listen(8000,()=>{
    console.log("server running on port 8000")
})