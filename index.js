const readme = require("./readme.js");
const fs = require("fs");
// require("dotenv").config();

// Global variables
const DEFAULT_BIO_FR = "👋 Salut ! Je suis un développeur junior passionné par le développement web. Mon parcours commence ici, sur GitHub, où j'explore les merveilles de la programmation front-end et back-end. Mon objectif est de devenir un développeur full stack accompli, et chaque ligne de code que j'écris me rapproche de cette réalité. Rejoignez-moi dans cette aventure et ensemble, créons des expériences numériques captivantes ! #DéveloppementWeb #FullStackDeveloperEnDevenir";
const DEFAULT_BIO1_FR = "🌱 En herbe, mais déterminé ! Je suis un développeur junior en quête d'apprentissage continu dans le domaine du développement web. Mon GitHub est mon terrain d'entraînement, où je plonge dans les technologies front-end et back-end pour cultiver mes compétences. Je nourris l'ambition de devenir un développeur full stack, capable de concevoir des applications innovantes. Ensemble, cultivons des projets prometteurs ! #DevWebJunior #FuturFullStackDeveloper";
const DEFAULT_BIO2_FR = "🚀 Apprenti full stack en route ! Jeune développeur web enthousiaste, je trace mon parcours vers l'excellence sur GitHub. Chaque projet est une opportunité de grandir en tant que développeur junior, avançant vers mon objectif ultime : devenir un développeur full stack polyvalent. Rejoignez-moi dans cette aventure où nous repoussons les limites du développement web pour créer des solutions performantes et novatrices. Ensemble, allons plus loin ! #DeveloppeurJunior #FullStackEnDevenir";

const DEFAULT_BIO_EN = "👋 Hello there! I'm an aspiring junior web developer, exploring the exciting world of coding on GitHub. My passion lies in both front-end and back-end development. With each line of code, I am one step closer to becoming a skilled full-stack developer. Join me on this journey as we craft impressive digital experiences together! #WebDevelopment #AspiringFullStack";
const DEFAULT_BIO1_EN = "🌱 Growing and learning! I'm a junior web developer eager to enhance my skills on GitHub. I delve into front-end and back-end technologies, aspiring to become a proficient full-stack developer. Together, let's nurture promising projects and create innovative web applications. #JuniorWebDev #FutureFullStackPro";
const DEFAULT_BIO2_EN = "🚀 Embarking on my full-stack adventure! As a young and enthusiastic web developer, GitHub is my playground for honing my craft. I'm determined to excel in both front-end and back-end development, aspiring to be a well-rounded full-stack developer. Join me as we push the boundaries of web development and embark on an exciting journey of innovation! #JuniorDeveloper #FullStackJourney";

function generateNewREADME() {
  // TODO: Generate new READMEs
  const readmeRows = readme.split("\n");
  const textChoose = chooseRandomBio();
  const bioFR = textChoose[0];
  const bioEN = textChoose[1];
  const bioFRIndex = readmeRows.findIndex((row) => row.includes("<#bio_profile_fr>"));
  const bioENIndex = readmeRows.findIndex((row) => row.includes("<#bio_profile_en>"));
  readmeRows[bioFRIndex] = bioFR;
  readmeRows[bioENIndex] = bioEN;
  return readmeRows.join("\n");
}

function chooseRandomBio() {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === 0) {
    return [DEFAULT_BIO_FR, DEFAULT_BIO_EN];
  } else if (random === 1) {
    return [DEFAULT_BIO1_FR, DEFAULT_BIO1_EN];
  } else {
    return [DEFAULT_BIO2_FR, DEFAULT_BIO2_EN];
  }
}

function updateREADME(newREADME) {
  fs.writeFileSync("./README.md", newREADME);
}

// Function to main 
async function main() {
  const newREADME = generateNewREADME();
  // console.log(newREADME);
  updateREADME(newREADME);
}
main();

// Implementation IA API IN PROGRESS
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   organization: "org-KvjXVgEc9gQ8sMjRCRac7Kp2",
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// openai
//   .createCompletion({
//     model: "text-davinci-003",
//     prompt: "Say this is a test",
//     max_tokens: 7,
//     temperature: 0,
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });