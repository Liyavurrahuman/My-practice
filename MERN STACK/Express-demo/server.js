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

app.get("/search",(req,res)=>
    {
        res.json({
            search:req.query.asd,
            barnd:req.query.brand

    });
});

app.get("/api/students",(req,res)=>

{
    res.json({
        message:"students retrived successfully",
        student:[
            {id:102,name:liya},
            {id:103,nmae:mmm}
        ]
    });
});


app.listen(3000,()=>
{
 console.log("server running");    
})




