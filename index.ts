import inquirer from "inquirer";

//initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;  

// Print welcome message
console.log("welcome to yusra hanif - ATM Machine");

let Pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (Pinanswer.pin === Pinanswer){
    console.log("pin is Correct, Login Succesfully!");
    // console.log(`Current Acount Balance is ${myBalance}`)
 
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: "Withdraw amount, myBalance"
        }
    ])

    if(operationans.operation === "withdraw amount"){
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])
        if(amountans.amount > myBalance){
            console.log("insufficient Balance");
        }
        else{
            myBalance -= amountans.amount;
            console.log(`${amountans.amount} Withdraw Successfully`)
            console.log(`Your Remaining Balance is: ${myBalance}`)
        }
    }     
    else if (operationans.operation === "Check Balance"){
         console.log(`Your Acount Balance is: ${myBalance}`)
    };
}
else{ 
    console.log("Pin is Incorrect, Try Again!");
}

 

