const chalk = require("chalk");
const yargs = require("yargs");
const { readNote, addNote, removeNote, listNotes } = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function ({ title }) {
    removeNote(title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler: listNotes,
});

// Create read command
yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: ({ title }) => {
    readNote(title);
  },
});

yargs.parse();
