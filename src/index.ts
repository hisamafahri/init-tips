#!/usr/bin/node
import inquirer from "inquirer";

inquirer
    .prompt([
        // TODO: Require input
        {
            type: "input",
            name: "project_name",
            message: "What is the project name?",
        },
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.error("tty: ", error);
        } else {
            console.error("other: ", error);
            // Something else went wrong
        }
    });
