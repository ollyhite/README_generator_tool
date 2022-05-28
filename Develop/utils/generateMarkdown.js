// //import template.js in here and use module.exports export out
//const template = require("./template")
const licenseTemplate = require("./license_template");

function switchContentsLink(listName){
  let response;
  switch(listName){
    case "Live_link" : response = "#live-link";
    break;
    case "Description" : response = "#description";
    break;
    case "Installation" : response = "#installation";
    break;
    case "Usage" : response = "#usage";
    break;
    case "Credits" : response = "#credits";
    break;
    case "Built_With" : response = "#built-with";
    break;
    case "API_Resources" : response = "#api-resources";
    break;
    case "License" : response = "#license";
    break;
    case "Badges" : response = "#badges";
    break;
    case "Features" : response = "#features";
    break;
    case "Contributing" : response = "#contributing";
    break;
    case "Tests" : response = "#tests";
    break;
  }
  return response;
}

function templateHeater(data) {
  return `
    \n # ${data.projectTitle} \n ${data.contents.includes("License") ? renderLicenseBadge(data.license): ""}\n ${data.contents.includes("Live_link") ? templateLiveLink(data): ""} \n ## Description \n ${data.motivation}${data.descriptionWhy}${data.descriptionProblem}${data.descriptionLearn}
    `
}
function templateContents(data){
  let templateContents= "\n ## Table of Contents \n - [Description](#description)";
    for (let i = 0; i < data.contents.length; i++) {
        // let lowercase = data.contents[i].toLowerCase()
        if(data.contents[i]=== "Table_of_Contents" || data.contents[i]=== "Live_link"){
          templateContents += ""
        }
        // else if(data.contents[i].includes("_")){
        //   let p = data.contents[i].replaceAll('_', ' ')
        //   console.log("new p",p);          
        //   templateContents +=
        //   `
        //   \n - [${p}](${switchContentsLink(data.contents[i])})
        //   `
        // }
        else{
          templateContents +=
        `
        \n - [${data.contents[i]}](${switchContentsLink(data.contents[i])})
        `
        }
    }
    return templateContents;
}
function templateLiveLink(data){
  return `
    \n ## Live link \n [${data.live}](${data.live})
    `
}
function templateInstallation(data){
  let templateInstallation ="\n ## Installation \n"
    if(data.installation.includes("[")){
      let installArray = JSON.parse(data.installation)
      templateInstallation += `\`\`\` \n git clone  ${data.clone} \n \`\`\``;

      for (let i = 0; i < installArray.length; i++) {
      templateInstallation +=
      `
      \n - ${installArray[i]}
      `
      }
      return templateInstallation;
    }
    else{
      return `${templateInstallation} \n ${data.installation}`;
    }
}

function templateUsage(data){
    return `
    \n ## Usage \n ![alt text](${data.usage})
    `
}

function templateCredits(data){
  let templateCredits = "`\n ## Credits \n"
    if(data.credits.includes("[")){
      let creditsArray = JSON.parse(data.credits);
      for (let i = 0; i < creditsArray.length; i++) {
        templateCredits +=
        `
        \n - ${creditsArray[i]}
        `
      }
      return templateCredits
    }else{
      return `${templateCredits} \n ${data.credits}`;
    }
}

function templateBuiltWith(data){
  let templateBuiltWith = "\n ## Built With \n"
    if(data.built.includes("[")){
      let builtArray = JSON.parse(data.built)
      for (let i = 0; i < builtArray.length; i++) {
        templateBuiltWith +=
        `
        \n - ${builtArray[i]}
        `
      }
      return templateBuiltWith
    }else{
      return `${templateBuiltWith} \n ${data.built}`;
    }
}
function templateApiResources(data){
  let templateApiResources = "\n ## API Resources \n"
    if(data.api.includes("[")){
      let apiArray = JSON.parse(data.api);
      for (let i = 0; i < apiArray.length; i++) {
        templateApiResources +=
        `
        \n - ${apiArray[i]}
        `
      }
      return templateApiResources;
    }else{
      return `${templateApiResources} \n ${data.api} \n`;
    }
}

function templateBadges(data){
    return `
    \n ## Badges \n ${data.badges} \n
    `
}

function templateFeatures(data){
    return `
    \n ## Features \n ${data.features} \n
    `
}

function templateContributing(data){
    return `
    \n ## Contributing \n ${data.contributing}\n
    `
}

function templateTests(data){
  let templateTests = "\n ## Tests \n"
    if(data.tests.includes("[")){
      let testArray = JSON.parse(data.tests)
      for (let i = 0; i < testArray.length; i++) {
        templateTests +=
        `
        \n - ${testArray[i]}
        `
      }
      return templateTests
    }else{
      // console.log(JSON.parse(data.tests));
      // console.log("templateTests is not array");
      return `${templateTests} \n ${data.tests}`;
    }
}

// function templateLicense(data){
//   return `\n ${licenseTemplate(data.license, data.licenseYear, data.licenseName)} \n`
// }

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT License - I want it simple and permissive"){
    return `\n [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(license === "GNU Lesser General Public License - I care about sharing improvements."){
    return `\n [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }else{
    return `\n [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}
//lice icon
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT License - I want it simple and permissive"){
    return `\n [https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)`
  }else if(license === "GNU Lesser General Public License - I care about sharing improvements."){
    return `\n [https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)`
  }else{
    return `\n [https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return `\n ${licenseTemplate(data.license, data.projectTitle, data.licenseYear, data.licenseName)} \n`
}
//text
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // //if you use template.js to export data
  // let currentTemplate = template(data);
  // return currentTemplate;
  return `
  ${templateHeater(data)}
  ${data.contents.includes("Table_of_Contents")? templateContents(data): ""} 
  ${data.contents.includes("Installation") ? templateInstallation(data): ""}
  ${data.contents.includes("Usage") ? templateUsage(data): ""}
  ${data.contents.includes("Credits") ? templateCredits(data): ""}
  ${data.contents.includes("Built_With") ? templateBuiltWith(data): ""}
  ${data.contents.includes("API_Resources") ? templateApiResources(data): ""}
  ${data.contents.includes("Badges") ? templateBadges(data): ""}
  ${data.contents.includes("Features") ? templateFeatures(data): ""}
  ${data.contents.includes("Contributing") ? templateContributing(data): ""}
  ${data.contents.includes("Tests") ? templateTests(data): ""}
  ${data.contents.includes("License") ? renderLicenseSection(data): ""}
  ${data.contents.includes("License") ? renderLicenseLink(data.license): ""}
  `
}

module.exports = generateMarkdown;
