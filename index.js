const readme = require("./readme.js");
const fs = require("fs");
// require("dotenv").config();

// Global variables
const DEFAULT_BIO = '';
const DEFAULT_BIO1 = '';
const DEFAULT_BIO2 = '';

function generateNewREADME() {
  // TODO: Generate new READMEs
  const readmeRows = readme.split("\n");
  return readmeRows.join("\n");
}

function updateREADME(newREADME) {
  fs.writeFileSync("./README.md", newREADME);
}

// Function to main 
async function main() {
  const newREADME = generateNewREADME();
  console.log(newREADME);
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