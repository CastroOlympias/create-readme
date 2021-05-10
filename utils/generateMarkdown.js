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
  return `
# ${data.yourName}
# ${data.githubName}
---

# ${data.projectName}
Villainous things I say
 
I will smite thine enemy, oh lord. Smash them beneath my feet, that they would never rise again, like the worms deep within the earth. never to rise again.
 
1) Diana isn't allowed to have friends
2) I'm just here to make money, not friends
3) It's not like I'm leading you astray
4) Don't be a slave to your comforts
5) Only crazy people need validation
6) This is a little game of 'Make up the rules as you please'
7) Just as some seek for hidden knowledge, so do others seek for ignorance.
8) Pure imagination - I just love that song, probably because the song was written and created by occultists
9) Don't act like you're some special victim or something, I victimized EVERYBODY
10) You should never start a fight unless you already know you're going to win." *begins whistling
11) I can't be the only Super Noggin around here
12) Trust no one ><
13) Betray every one ><
14) You know who you are in relation to all that surrounds you, but who are you, without those things.
15) Every word spoken and every deed performed is a seed, planted
16) If you say nice things and I'm offended by it, then you're still an asshole

`;
}

module.exports = generateMarkdown;
