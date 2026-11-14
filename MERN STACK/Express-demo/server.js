// import express from"express";
// const app=express();
// app.get("/",(req,res)=>
// {
// res.send("Hello World");
// } );
// app.get("/about",(req,res)=>{
//     res.send("This is the about pages");
// });

// app.get("/contact",(req,res)=>{
//     res.send("contact us at liya@gmail.com");
// });

// app.get("/students/:id/courses/:course",(req,res)=>{
//     res.json({studentid:req.params.id,courseName:
//         req.params.course
//     });
// });

// app.get("/search",(req,res)=>
//     {
//         res.json({
//             search:req.query.asd,
//             barnd:req.query.brand

//     });
// });

// app.get("/api/students",(req,res)=>

// {
//     res.json({
//         message:"students retrived successfully",
//         student:[
//             {id:102,name:liya},
//             {id:103,nmae:mmm}
//         ]
//     });
// });


// app.listen(3000,()=>
// {
//  console.log("server running");    
// })























// import express from "express";

// import studentRoutes from "./Routes/studentRoutes.js";

//  const app = express();

// // Middleware
// app.use(express.json());

// // custom middleware
// const requestLogger = (req, res, next) => 
//     {
//         console.log("request method:", req.method);
//         console.log("request url:", req.url);
//         console.log("request time:", new Date());
//         next();
//     };
// app.use(requestLogger);

// // Student API routes
// app.use("/api/students", studentRoutes);

// // Home route
// app.get("/liya", (req, res) => {
//     res.send("Welcome to Student API");
// });


// //EJS ROUTES
// app.get("/welcome", (req, res) => 
//     {
//         res.render("welcome", 
//             {  
//                 name: "Liya" 
//             });
//     });        


// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// //student page Ejs
// app.get("/students-page", (req, res) => 
//     {
//         const students = [
//             { id: 1, name: "John Doe", age: 20 ,course:"IT" },
//             { id: 2, name: "Jane Smith", age: 22 ,course:"CS" },
//             { id: 3, name: "Mike Johnson", age: 19 ,course:"IT" },
//         ];   
//         res.render("students-page", { students: students });


//     })       







// import express from "express";

//  const app = express();

// // Set EJS as View Engine
// app.set("view engine", "ejs");

// // Set Views Folder
// app.set("views", "./views");





import express from "express";

import studentRoutes from "./Routes/studentRoutes.js";

const app = express();

// EJS Configuration
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


// temperary data for students
let students =[
    { id: 1, name: "John Doe", age: 20, course: "IT" },
    { id: 2, name: "Jane Smith", age: 22, course: "CS" },
    { id: 3, name: "Mike Johnson", age: 19, course: "IT" }
];

// Custom Middleware
const requestLogger = (req, res, next) => {

    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request Time:", new Date());

    next();
};

app.use(requestLogger);

// Student API Routes
app.use("/api/students", studentRoutes);

// Home Route
app.get("/liya", (req, res) => {

    res.send("Welcome to Student API");

});

// EJS Welcome Route
app.get("/welcome", (req, res) => {

    res.render("welcome", 
    {
        title: "Welcome Page",
        course: "IT",
        name: "Liya"
    });

});

// Student Page EJS Route
app.get("/student", (req, res) => {

    const student = [

        { id: 1, name: "John Doe", age: 20, course: "IT" },

        { id: 2, name: "Jane Smith", age: 22, course: "CS" },

        { id: 3, name: "Mike Johnson", age: 19, course: "IT" }

    ];

    res.render("student", {
        student: student,
        title: "Student Page",
        name: "Liya",
        course: "IT",
    });

});

// About Page EJS Route
app.get("/about", (req, res) => 
    {
        res.render("about",{title:"About Page"});

    });

    // Contact Page EJS Route
app.get("/contact", (req, res) => 
    {
        res.render("contact",{title:"Contact Page"});
    });


//Register Page EJS Route
app.get("/register", (req, res) =>
    {
        res.render("register",{title:"Register Page"});
    });



//handle register form submission
app.post("/register", (req, res) => {
    const { name, age, course } = req.body;

    // server-side validation
    const parsedAge=parseInt(age, 10);
    if(
        typeof name !== "string" || name.trim() === "" ||
        !Number.isInteger(parsedAge) || parsedAge <= 0 ||
        typeof course !== "string" || !["IT", "CS"].includes(course)
    )

    {
        return res.status(400).send("Invalid input. Please provide valid name, age, and course.");
    }

    const newStudent = {
        id: Math.max(...students.map(s => s.id)) + 1,
        name: name.trim(),
        age: parsedAge,
        course: course
    };

    students.push(newStudent);
    res.redirect("/student");
    
});







// Start Server
app.listen(3000, () => {

    console.log("Server running on port 3000");

});