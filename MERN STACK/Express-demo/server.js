import express from"express";
const app=express();
app.get("/",(req,res)=>
{
res.send("Hello World");
} );
app.get("/about",(req,res)=>{
    res.send("This is the about pages");
});

app.get("/contact",(req,res)=>{
    res.send("contact us at liya@gmail.com");
});

app.get("/students/:id/courses/:course",(req,res)=>{
    res.json({studentid:req.params.id,courseName:
        req.params.course
    });
});

app.get("/search,(req,res)=>{}")




app.listen(3000,()=>
{
 console.log("server running");    
})




