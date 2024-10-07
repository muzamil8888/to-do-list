
import inquirer from "inquirer";
let todos = [];
let condition = true


while(condition)


{let addtask = await inquirer.prompt
(
 [
    {

      name:"todo",
      type:"input",
      message: "What you want to add in your todo",
    },
    
    {
     name:"addmore",
     message:"Do you want to add more?",
     type:"confirm",
     default:"false",
    }
 ]
);
todos.push(addtask.todo);
condition = addtask.addmore;

console.log(todos);
};