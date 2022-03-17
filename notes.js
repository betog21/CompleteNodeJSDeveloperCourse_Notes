const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Getting notes";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicatedNotes = notes.filter((note) => note.title == title);

  if (duplicatedNotes.length == 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.error("Note title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title != title);

  saveNotes(newNotes);

  const removedNotes = notes.length > newNotes.length;
  removedNotes
    ? console.log(chalk.green("Note removed."))
    : console.log(chalk.red("No note found."));
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow.bold("Your notes:"));
  console.table(notes, ["title"]);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = { getNotes, addNote, removeNote, listNotes };
