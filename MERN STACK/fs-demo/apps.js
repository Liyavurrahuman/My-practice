
        // file write
// const fs=require("fs");
// fs.writeFileSync("student.text","name:ahamed");
// console.log("file created successfully")



    //file Read
// const fs=require("fs");
// const data=fs.readFileSync("student.text","utf8");
// console.log(data);



     //append data
const fs=require("fs")
fs.appendFileSync("student.text","course:MERN STACK");
console.log("data added succefully")


