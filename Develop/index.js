// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const allAnswer ={};
const secondRoundQuestionArray =[];
const allQuestions = [
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
        choices:["Installation","Usage","Credits","Built With","Contributers","API Resources","License","Badges","Features","Contributing","Tests"],
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
        message:"Contributing - If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. If you don't need just return blank answer",
        name:'contribute'
    },
    {
        type:"input",
        message:"Tests - Go the extra mile and write tests for your application. Then provide examples on how to run them in array. If you don't need just return blank answer",
        name:'tests'
    }
];

const startQuestions =[
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
        message:"Info list in README - Choose section(s) you want to put in your README file.",
        choices:["Live_link", "Table_of_Contents" ,"Installation","Usage","Credits","Built_With","API_Resources","Contributing","License","Badges","Features","Tests"],
        name:'contents'
    },
    // {
    //     type:"checkbox",
    //     message:"List in README file - Choose section(s) you want to put in your README file.",
    //     choices:["Live_link", "Table of Contents" ,"Installation","Usage","Credits","Built_With","Contributers","API_Resources","License","Badges","Features","Contributing","Tests"],
    //     name:'list'
    // },
]

const contentsQuestion ={
    Live_link:{
        type:"input",
        message:"Live link - Enter your project's live link.",
        name:'live'
    },
    // Table_of_Contents:{
    //     type:"checkbox",
    //     message:"Table of Contents - Choose section(s) you want to put in your README file.",
    //     choices:["Live_link", "Table of Contents" ,"Installation","Usage","Credits","Built_With","Contributers","API_Resources","License","Badges","Features","Contributing","Tests"],
    //     name:'contents'
    // },
    Installation:
    [{
        type:"input",
        message:"Installation - Enter your project clone https",
        name:'clone'
    },
    {
        type:"input",
        message:"Installation - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. Make a Array [] and put your answer",
        name:'installation'
    }],
    Usage:
    {
        type:"input",
        message:"Usage - Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.:",
        name:'usage'
    },
    Credits:
    {
        type:"input",
        message:"Credits - List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
        name:'credits'
    },
    Built_With:
    {
        type:"input",
        message:"Built_With - List your Languegs you used in your project, list them in array.",
        name:'built'
    },
    API_Resources:
    {
        type:"input",
        message:"API_Resources - List your API_Resources that you used in your project, put them in array.",
        name:'api'
    },
    Contributing:
    {
        type:"input",
        message:"Contributing - Larger projects often have sections on contributing to their project, in which contribution instructions are outlined. Sometimes, this is a separate file. If you have specific contribution preferences, explain them so that other developers know how to best contribute to your work.",
        name:'contributing'
    },
    License:[{
        type:'rawlist',
        message: "License - The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/].",
        name:"license",
        choices:["MIT License - I want it simple and permissive","Apache License 2.0 - Use the license preferred by the community you're contributing to or depending on. Your project will fit right in.","GNU Lesser General Public License - I care about sharing improvements."]
    },
    {
        type:"input",
        message:"License - The year of your project created",
        name:'licenseYear'
    },
    {
        type:"input",
        message:"License - name of copyright owner",
        name:'licenseName'
    }
    ],
    Badges:
    {
        type:"input",
        message:"Badges - Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. If you don't need just return blank answer",
        name:'badges'
    },
    Features:
    {
        type:"input",
        message:"Features - If your project has a lot of features, list them in array. If you don't need just return blank answer",
        name:'features'
    },
    Tests:
    {
        type:"input",
        message:"Tests - Go the extra mile and write tests for your application. Then provide examples on how to run them in array. If you don't need just return blank answer",
        name:'tests'
    }
}

const startQuestion = () =>{
    inquirer.prompt(startQuestions).then((answer)=>{
        const newallAnswer= Object.assign(allAnswer,answer);
        // console.log("first newallAnswer",allAnswer);
        // console.log("answer.contents",answer.contents);
        for (let i = 0; i < answer.contents.length; i++) {
            const element = answer.contents[i];
            // console.log("element",element);
            for (const key in contentsQuestion) {
                // console.log("key in contentsQuestion",key);
                if(answer.contents[i]===key){
                    if(Array.isArray(contentsQuestion[key])){
                        // console.log("is arry");
                        for (let i = 0; i < contentsQuestion[key].length; i++) {
                            secondRoundQuestionArray.push(contentsQuestion[key][i])
                        }
                    }else{
                        // console.log("is object");
                        secondRoundQuestionArray.push(contentsQuestion[key])
                    }
                }
            }
        }
        // console.log("secondRoundQuestionArray",secondRoundQuestionArray);
        secondRoundQuestion(secondRoundQuestionArray);
    })
}
function secondRoundQuestion(questions) {
    // console.log("secondRoundQuestion",questions);
    inquirer.prompt(questions).then((response) =>{
        // console.log(response);
        const newallAnswer = Object.assign(allAnswer,response);
        console.log("second newallAnswer",allAnswer);
        writeToFile("README.md", newallAnswer)
    })
}
// inquirer.prompt(questions).then((response) =>{
//     console.log("response", response);
//     writeToFile("README.md", response)
// })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log("fileName", fileName);
    console.log("data", data);
    const readmeinfo = generateMarkdown(data);
    // Function call to initialize app
    // init(data);
    fs.writeFile(fileName, readmeinfo, (err) => {
        err? console.log(err):console.log("created success README file!!!!");
    })
}

// TODO: Create a function to initialize app
// function init(data) {
//     const template = data;
    
// }


startQuestion();