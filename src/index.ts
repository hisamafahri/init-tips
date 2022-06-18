#!/usr/bin/node
import inquirer from "inquirer";
import execCmd from "../utils/exec";
import { isDirExist } from "../utils/check";

const LANGUAGES = ["Typescript", "Javascript"];
const STYLING = ["Vanilla CSS", "TailwindCSS"];

inquirer
    .prompt([
        {
            type: "input",
            name: "project_name",
            message: "Project name?",
            validate(value) {
                return Boolean(value.trim())
                    ? true
                    : "Please enter a project name!";
            },
        },
        {
            type: "list",
            name: "styling",
            message: "Styling?",
            choices: STYLING,
        },
        {
            type: "list",
            name: "language",
            message: "Language?",
            choices: LANGUAGES,
        },
    ])
    .then((answers) => {
        // TODO: Silent command execution

        // Check if directory already exist
        if (isDirExist(answers.project_name)) {
            console.log("error: Directory already exist");
            return;
        }

        // Generate Next.js with Typescript
        if (answers.language == LANGUAGES[0]) {
            execCmd(
                "npx create-next-app --ts " + answers.project_name.toString(),
                "Failed to create a Next.js app using TypeScript"
            );
            return;
        }

        // Generate Next.js with Javascript
        execCmd(
            "npx create-next-app " + answers.project_name.toString(),
            "Failed to create a Next.js app using Javascript"
        );
    })
    .catch((error) => {
        // Check if prompt couldn't be rendered in the current environment
        if (error.isTtyError) {
            console.error("prompt failure: ", error);
        } else {
            console.error("error : ", error);
        }
    });
