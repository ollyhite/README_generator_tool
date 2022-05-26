// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { response } = require("express");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:" What's your project name? ",
        name:'projectTitle'
    },
    {
        type:"input",
        message:"Description - What was your motivation?",
        name:'motivation'
    },
    {
        type:"input",
        message:"Description - Why did you build this project? (Note: the answer is not Because it was a homework assignment.",
        name:'descriptionWhy'
    },
    {
        type:"input",
        message:"Description - What problem does it solve?",
        name:'descriptionProblem'
    },
    {
        type:"input",
        message:"Description - What did you learn?",
        name:'descriptionLearn'
    },
    {
        type:"checkbox",
        message:"Table of Contents - Choose which section you going to put info?",
        choices:["Installation","Usage","Credits","Built With","Contributers","API Resources","License","Badges","Features","How to Contribute","Tests"],
        name:'contents'
    },
    {
        type:"input",
        message:"Installation - Enter your project clone https",
        name:'clone'
    },
    {
        type:"input",
        message:"Installation - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. Make a Array [] and put your answer",
        name:'installation'
    },
    {
        type:"input",
        message:"Usage - Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:",
        name:'usage'
    },
    {
        type:"input",
        message:"Credits - List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
        name:'credits'
    },
    {
        type:"input",
        message:"License - The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/].",
        name:'license'
    },
    {
        type:"input",
        message:"Badges - Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. If you don't need just return blank answer",
        name:'badges'
    },
    {
        type:"input",
        message:"Features - If your project has a lot of features, list them in array. If you don't need just return blank answer",
        name:'features'
    },
    {
        type:"input",
        message:"How to Contribute - If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. If you don't need just return blank answer",
        name:'contribute'
    },
    {
        type:"input",
        message:"Tests - Go the extra mile and write tests for your application. Then provide examples on how to run them in array. If you don't need just return blank answer",
        name:'tests'
    }
];
inquirer.prompt(questions).then((response) =>{
    console.log("response", response);
    writeToFile("README.md", response)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("fileName", fileName);
    console.log("data", data);
    // Function call to initialize app
    init(data);
}

// TODO: Create a function to initialize app
function init(data) {
    const template = data;
    fs.writeFile('README.md', template, (err) => {
        err? console.log(err):console.log("created success README file!!!!");
    })
}


