// //import template.js in here and use module.exports export out
//const template = require("./template")

function templateHeater(data) {
  return `# ${data.projectTitle} \n
    ## Description \n
    ${data.motivation}${data.descriptionWhy}${data.descriptionProblem}${data.descriptionLearn}
    `
}
function templateContents(data){
  let templateContents= "\n ## Table of Contents \n";
  console.log(data.contents);
    for (let i = 0; i < data.contents.length; i++) {
        // const element = data.contents[i];
        templateContents +=
        `
        \n - [${data.contents[i]}](#${data.contents[i]}.name)
        `
    }
    console.log("templateContents",templateContents);
    return templateContents;
}
function templateInstallation(data){
  let templateInstallation ="\n ## Installation \n \`\`\` git clone  ${data.clone} \`\`\` \n"
  if(data.contents.includes("Installation")){
    if(Array.isArray(data.installation)){
      for (let i = 0; i < data.installation.length; i++) {
      templateInstallation +=
      `
      \n - ${data.installation[i]}
      `
      }
      return templateInstallation;
    }else{
      return templateInstallation + data.installation;
    }
  }else{
    return ""
  }
}

function templateUsage(data){
  if(data.contents.includes("Usage")){
    return `\n ## Usage \n

    \`\`\`md
    ![alt text](${data.usage})
    \`\`\`
    `
  }else{
    return ""
  }
}

function templateCredits(data){
  if(data.contents.includes("Credits")){
    return `\n ## Credits \n
    ${data.credits}
    `
  }else{
    return ""
  }
}

function templateBuiltWith(data){
  let templateBuiltWith = "\n ## Built With \n"
  if(data.contents.includes("Built_With")){
    if(Array.isArray(data.built)){
      for (let i = 0; i < data.built.length; i++) {
        templateBuiltWith+=
        `
        \n - ${data.built[i]}
        `
      }
      return templateBuiltWith
    }else{
      return templateBuiltWith + data.built;
    }
  }else{
    return ""
  }
}
function templateApiResources(data){
  let templateApiResources = "\n ## API_Resources \n"
  if(data.contents.includes("API_Resources")){
    if(Array.isArray(data.api)){
      for (let i = 0; i < data.api.length; i++) {
        templateApiResources+=
        `
        \n - ${data.api[i]}
        `
      }
      return templateApiResources
    }else{
      return templateApiResources + data.api;
    }
  }else{
    return ""
  }
}

function templateBadges(data){
  if(data.contents.includes("Badges")){
    return `\n ## Badges \n
      ${data.badges}
    `
  }else{
    return ""
  }
}

function templateFeatures(data){
  if(data.contents.includes("Features")){
    return `\n ## Features \n
      ${data.features}
    `
  }else{
    return ""
  }
}

function templateContribute(data){
  if(data.contents.includes("Contribute")){
    return `\n ## How to Contribute \n
      ${data.contribute}
    `
  }else{
    return ""
  }
}

function templateTests(data){
  let templateTests = "\n ## Tests \n"
  if(data.contents.includes("Tests")){
    if(Array.isArray(data.tests)){
      for (let i = 0; i < data.tests.length; i++) {
        templateTests+=
        `
        \n - ${data.tests[i]}
        `
      }
      return templateTests
    }else{
      return templateTests + data.tests;
    }
  }else{
    return ""
  }
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
  // let currentTemplate = template(data);
    let currentTemplate = templateHeater(data) + templateContents(data) + templateInstallation(data)
    + templateUsage(data) + templateCredits(data) +templateBuiltWith(data)+templateApiResources(data) + templateBadges(data) + templateFeatures(data) + templateContribute(data) + templateTests(data);
    ;
  // data.contents.includes("Installation")?templateHeater(data):""
  // let currentHeater = templateHeater(data);
  // return `# ${data.title}
  return currentTemplate;

}

module.exports = generateMarkdown;
