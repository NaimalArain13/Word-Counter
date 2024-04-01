#! /usr/bin/env node

//01
import chalk from "chalk";
import inquirer from "inquirer";

//Step 01 Import required Packages.
//Step 02 creating prompt to take user input.
//Step 03 write a function to remove spaces from beginning and ending of the string, convert the string into array and check the length of that array to find word count.
//Step 04 Display the word count

console.log("**".repeat(5) + chalk.italic.bold.greenBright("Word Counter") + "**".repeat(5) );


//02
    const answer = await inquirer.prompt([
        {
            type : "input",
            name : "sentence",
            message :chalk.blue.bold`Please enter the sentence to find the word count`,
        },
    ]);


//03
    function wordCount(input: string): number{
    
        let split = answer.sentence.trim().split(" ")
        let wordCount = split.length
        return wordCount
    }


//04
let myWordCounter = wordCount(answer.sentence)

console.log(chalk.cyanBright.italic.bold(`Total words in the sentence are: ${chalk.magenta.bold(myWordCounter)}`));


