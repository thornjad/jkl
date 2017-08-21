#!/usr/bin/env node

const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');

const main = require('./jkl');
const pjson = require('../package.json')

const verbosity = 0;

let testtmp;

const increaseVerbosity = (v) => ++verbosity;

program
  .version(pjson.version)
  .arguments('[tst]');

program
  .option('-b, --bbq', 'Add BBQ sauce')
  .option('-v, --verbose', 'Increase verbose output', increaseVerbosity, 0);

program
  .option('-f, --flat', 'Assume Earth is flat')
  .action(function() {
    console.log('ERROR: Earth is an oblate spheroid');
    process.exit(1);
  });

program.parse(process.argv);

co(function * () {
  console.log(`jkl ${pjson.version}\n`);
});
