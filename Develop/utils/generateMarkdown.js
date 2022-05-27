// //import template.js in here and use module.exports export out
//const template = require("./template")
const licenseTemplate = require("./license_template");

function templateHeater(data) {
  return `
    \n # ${data.projectTitle} \n ## Description \n ${data.motivation}${data.descriptionWhy}${data.descriptionProblem}${data.descriptionLearn}
    `
}
function templateContents(data){
  let templateContents= "\n ## Table of Contents \n";
    for (let i = 0; i < data.contents.length; i++) {
        let lowercase = data.contents[i].toLowerCase()
        templateContents +=
        `
        \n - [${data.contents[i]}](#${lowercase})
        `
    }
    return templateContents;
}
function templateLiveLink(data){
  return `
    \n ## Live link \n ${data.live}
    `
}
function templateInstallation(data){
  let templateInstallation ="\n ## Installation \n"
    let installArray = JSON.parse(data.installation);
    if(Array.isArray(installArray)){
      console.log("data.installation is arry");
      templateInstallation += `\`\`\` \n git clone  ${data.clone} \n \`\`\``;

      for (let i = 0; i < installArray.length; i++) {
      templateInstallation +=
      `
      \n - ${installArray[i]}
      `
      }
      return templateInstallation;
    }else{
      console.log("data.installation is not arry");
      return templateInstallation + data.installation;
    }
}

function templateUsage(data){
    return `
    \n ## Usage \n ![alt text](${data.usage})
    `
}

function templateCredits(data){
  let templateCredits = "`\n ## Credits \n"
    let creditsArray = JSON.parse(data.credits);
    if(Array.isArray(creditsArray)){
      for (let i = 0; i < creditsArray.length; i++) {
        templateCredits +=
        `
        \n - ${creditsArray[i]}
        `
      }
      return templateCredits
    }else{
      return templateCredits + data.credits;
    }
}

function templateBuiltWith(data){
  let templateBuiltWith = "\n ## Built With \n"
    let builtArray = JSON.parse(data.built)
    if(Array.isArray(builtArray)){
      for (let i = 0; i < builtArray.length; i++) {
        templateBuiltWith +=
        `
        \n - ${builtArray[i]}
        `
      }
      return templateBuiltWith
    }else{
      return templateBuiltWith + data.built;
    }
}
function templateApiResources(data){
  let templateApiResources = "\n ## API_Resources \n"
    let apiArray = JSON.parse(data.api)
    if(Array.isArray(apiArray)){
      for (let i = 0; i < apiArray.length; i++) {
        templateApiResources +=
        `
        \n - ${apiArray[i]}
        `
      }
      return templateApiResources
    }else{
      return templateApiResources + data.api;
    }
}

function templateBadges(data){
    return `
    \n ## Badges \n ${data.badges}
    `
}

function templateFeatures(data){
    return `
    \n ## Features \n ${data.features}
    `
}

function templateContribute(data){
    return `
    \n ## How to Contribute \n ${data.contribute}
    `
}

function templateTests(data){
  let templateTests = "\n ## Tests \n"
    let testArray = JSON.parse(data.tests)
      // console.log(JSON.parse(data.tests));
    if(Array.isArray(JSON.parse(data.tests))){
      // console.log("templateTests is array");
      // let testArray = JSON.parse(data.tests)
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
      return templateTests + data.tests;
    }
}

function templateLicense(data){
  return `\n ${licenseTemplate(data.license, data.licenseYear, data.licenseName)} \n`
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // //if you use template.js to export data
  // let currentTemplate = template(data);
  // return currentTemplate;
  return `
  ${data.contents.includes("Live_link") ? templateLiveLink(data): ""}
  ${templateHeater(data)}
  ${templateContents(data)} 
  ${data.contents.includes("Installation") ? templateInstallation(data): ""}
  ${data.contents.includes("Usage") ? templateUsage(data): ""}
  ${data.contents.includes("Credits") ? templateCredits(data): ""}
  ${data.contents.includes("Built_With") ? templateBuiltWith(data): ""}
  ${data.contents.includes("Api_Resources") ? templateApiResources(data): ""}
  ${data.contents.includes("Badges") ? templateBadges(data): ""}
  ${data.contents.includes("Features") ? templateFeatures: ""}
  ${data.contents.includes("How_to_Contribute") ? templateContribute(data): ""}
  ${data.contents.includes("Tests") ? templateTests(data): ""}
  ${data.contents.includes("License") ? templateLicense(data): ""}
  `
}

module.exports = generateMarkdown;
