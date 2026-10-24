const http=require("http")
const server=http.createserver((req,res)=>{
    res.writehead(200,{
        "content-type":"text/plain"
    });
    res.end("hello from node.js server!");
});

server.listen(3000,()=>{
    console.log("server running at http://localhost:3000");
})






// izuula some mistake