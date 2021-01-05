const { Command } = require("commander");
const fs = require("fs");
const path = require("path");
const program = new Command();

program.option("-t, --target [type]");
program.parse(process.argv);
fs.writeFileSync(path.resolve(__dirname, './build.json'), JSON.stringify({ "name": program.target }), { encoding: 'utf8' });