const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

const message = getNotes();
console.log(chalk.green(validator.isURL("example@examplem")));
console.log(chalk.blue(message));
