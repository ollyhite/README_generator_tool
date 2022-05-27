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
  let templateApiResources = "\n ## API_Resources \n"
    if(data.api.includes("[")){
      let apiArray = JSON.parse(data.api);
      for (let i = 0; i < apiArray.length; i++) {
        templateApiResources +=
        `
        \n - ${apiArray[i]}
        `
      }
      return templateApiResources
    }else{
      return `${templateApiResources} \n ${data.api}`;
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

function templateLicense(data){
  return `\n ${licenseTemplate(data.license, data.licenseYear, data.licenseName)} \n`
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
//lice icon
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//text
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // //if you use template.js to export data
  // let currentTemplate = template(data);
  // return currentTemplate;
  return `
  ${data.contents.includes("Live_link") ? templateLiveLink(data): ""}
  ${templateHeater(data)}
  ${data.contents.includes("Table_of_Contents")? templateContents(data): ""} 
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
