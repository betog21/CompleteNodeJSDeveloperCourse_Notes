const getNotes = require("./notes.js");
const chalk = require("chalk");

const message = getNotes();

console.log(chalk.blue(message));
