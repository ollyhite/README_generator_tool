module.exports = (data) => {
    const templateHeater =
    `# ${data.projectTitle}

    ## Description

    ${data.motivation}
    ${data.descriptionWhy}
    ${data.descriptionProblem} 
    ${data.descriptionLearn}

    `
    let templateContents= "## Table of Contents";

    for (let i = 0; i < data.contents.length; i++) {
        // const element = data.contents[i];

        templateContents +=
        `
        \n - ${data.contents[i]}
        `
    }

    const templateInstallation =
    `
    ## Installation

    \`\`\` git clone  ${data.clone} \`\`\`

    - ${data.installation}

    `


    return `
        ${templateHeater}
        ${templateContents}
        ${data.contents.includes("Installation") ? templateInstallation: ""}
    `
}
