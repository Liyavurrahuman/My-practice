// console.log("Hello, World!");
// var a=10;
// console.log(a);

// let firstName = "Liyaur";
// let lastName = "Rahman";
// console.log(firstName  + lastName);

// let a = 10;
// console.log(a +50);

// let a = "10";
// console.log(a +50);

// let payment = true;
// if(payment)
// {
//     console.log("Payment is done");
// }
// else
// {
//     console.log("Payment is not done");
// }


// let Whoishere="student";


// if(Whoishere=="admin")
// {
//     console.log("Welcome admin");
// }
// else if(Whoishere=="student")
// {
//     console.log("Welcome student");
// }
// else
// {
//     console.log("Welcome Teacher");
// }


// AND operator &&

// let loggedin = true;
// let payment = true;

// if(loggedin && payment)
// {
//     console.log("Allow access to the course");
// }

// else
// {
//     console.log("Please login and pay for the course");
// }


// OR operator ||

// let emailloggedin = true;
// let phoneloggedin = false;

// if(emailloggedin || phoneloggedin)
// {
//     console.log("Allow access to the course");
// }
//  else
// {
//     console.log("Please login and pay for the course");
// }

































































  


// let lang="LIYA";
// console.log(lang +"Rahman");

// console.log("Liyaur"+2006)

// console.log(2026-2006)


//Relational Operators

// console.log(5>2);
// console.log(5<2);
// console.log(5>=2);
// console.log(5<=2);
// console.log(5==2);
// console.log(5!=2);




//logical operators


// console.log(false && false);//false
// console.log(false && true);//false
// console.log(true && false);//false
// console.log(true && true);//true



// console.log(!10);//false
// console.log(!"ok");//false
// console.log(!0);//true
// console.log(!null);//false


// console.log(10 || "ok");//10 true
// console.log("yes" || null);//yes true
// console.log("" || 25);//25 true
// console.log(undefined || name);//0 false



// console.log(10 && "ok");//ok true
// console.log("yes" && null);//null false
// console.log("" && 25);//"" false
// console.log(undefined && "liya");//undefined false


// let fullName="liyaur"+"rahman";
// console.log(fullName);


                                   //Arrays

// let fruits=["apple","banana","mango","grapes"];
// console.log(fruits)
// console.log(fruits[0])//apple
// console.log(fruits[1])//banana
// console.log(fruits[2])//mango
// console.log(fruits[3])//grapes
// console.log(fruits.length)//4

// console.log(fruits.length +" available fruits")

// console.log(`There are  ${fruits.length}       fruits available.`)

// fruits.push("orange");
// console.log(fruits)


                                      //function

// function sayHello(name, name1)
// {
//     console.log(name * name1);
// }
// sayHello(5,40);

 

let fruits=["apple","banana","mango","grapes"];

fruits.forEach(function(value,position)
{
    console.log(`${position + 1} : ${value}`); 
    // console.log(`${position + 1} : ${value}`);
    
}
)










