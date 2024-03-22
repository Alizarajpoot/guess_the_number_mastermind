#! /usr/bin/env node
import inquirer from "inquirer";
// compute will generate a random number
// user input for gussing number
// compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "userguessednumber",
        type: "number",
        message: "please guess a number 1-6:",
    },
]);
if (answers.userguessednumber === randomNumber) {
    console.log("congrulation! you guessed number");
}
else {
    console.log("you guessed wrong number");
}
