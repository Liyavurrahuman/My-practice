// const fs=require("fs");
// fs.writeFileSync("student.text","name:ahamed");
// console.log("file created successfully")

const fs=require("fs");
const data=fs.readFileSync("student.text","utf8");
console.log(data);
