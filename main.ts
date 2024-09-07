#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"

        }
    ]
);
if (pinAnswer.pin === myPin) {
    console.log ("Correct pin code!!!");

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"]
        }
    ]
);
if (operationAns.operation === "withdraw")  {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message:"Enter your amount",
                type: "number"
            }
        ]
    );
    if(amountAns.amount > myBalance) {
        console.log("Insufficient Balance")
    }
    // = += -=
    else {
    myBalance -= amountAns.amount;
    console.log(`Your remaining balance is ${myBalance}`)
    }
} 
else if (operationAns.operation === "Fast cash"){
    let Fast = await inquirer.prompt(
        [
            {
                name: "Fastcash",
                message: "Select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]
    );
    myBalance -= Fast.Fastcash;
    console.log (`You have succesfully withdrawal ${Fast.Fastcash} \nYour remaining balance is ${myBalance}`)
}
else if (operationAns.operation === "check balance") {
        console.log (`Your remaining balance is ${myBalance}`)
    }
}
  else {
    console.log ("Incorrect pin code");
}
