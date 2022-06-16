#!/usr/bin/node
import inquirer from "inquirer";
import execCmd from "../utils/exec";

const LANGUAGES = ["Typescript", "Javascript"];

inquirer
    .prompt([
        {
            type: "input",
            name: "project_name",
            message: "What is the project name?",
            validate(value) {
                return Boolean(value.trim())
                    ? true
                    : "Please enter a project name!";
            },
        },
        {
            type: "list",
            name: "language",
            message: "Which language do you use?",
            choices: LANGUAGES,
        },
    ])
    .then((answers) => {
        // TODO: 
        // - Silent command execution
        // - Custom command output
        // - Duplicate folder check
        if (answers.language == LANGUAGES[0]) {
            execCmd(
                "npx create-next-app --ts " + answers.project_name.toString(),
                "Failed to create a Next.js app using TypeScript"
            );
            return;
        }

        execCmd(
            "npx create-next-app " + answers.project_name.toString(),
            "Failed to create a Next.js app using Javascript"
        );
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.error("prompt failure: ", error);
        } else {
            console.error("error : ", error);
        }
    });
