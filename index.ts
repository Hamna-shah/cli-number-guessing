#! /usr/bin/env node
import inquirer from "inquirer";
const randonNumber=Math.floor(Math.random() *6+1);
const answers= await inquirer.prompt([{name:"userGaussedNumber",type:"number",message:"please guess a number between 1-6"},],)

if(answers.userGaussedNumber===randonNumber){console.log("congratulations you guessed correct number")}
else{console.log("you guessed wrong number")}









