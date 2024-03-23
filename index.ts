import inquirer from 'inquirer';
const answer=await inquirer.prompt([
    {message: "Enter first number",name:"firstnumber",type:"number"},
    {message:"Enter second number",name:"secondnumber",type:"number"},
    {message:"Select operation",name:"operation",type:"list",
    choices:["Addition","Subtraction","Multiplication","Division"]}])
    console.log(answer);
let firstnumber = answer.firstnumber;
let secondnumber = answer.secondnumber;
let operation = answer.operation;
switch (operation) {
    
    case "Addition":
        console.log(firstnumber + secondnumber);
        break;
    case "Subtraction":
        console.log(firstnumber - secondnumber);
        break;
    case "Multiplication":
        console.log(firstnumber * secondnumber);
        break;
    case "Division":
        console.log(firstnumber / secondnumber);
        break;
        
}