#!/usr/bin/env node

const program = require('commander');

const main = require('./jkl');
const pjson = require('../package.json')

// TODO export verbosity?
const verbosity = 0;

let testtmp;

const increaseVerbosity = (v) => ++verbosity;

program
  .version(pjson.version)
  .usage('[options] <latitude> <longitude>');

program
  .option('-b, --bbq', 'Add BBQ sauce [false]', false)
  .option('-v, --verbose', 'Increase verbose output', increaseVerbosity, 0);

program
  .option('-f, --flat', 'Assume Earth is flat')
  .action(function() {
    console.log('ERROR: Earth is an oblate spheroid');
    process.exit(1);
  });

program.parse(process.argv);

if (!program.args.length) program.help():
