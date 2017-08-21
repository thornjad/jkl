#!/usr/bin/env node

const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');

const main = require('./jkl');
const pjson = require('../package.json')

let testtmp;

// TODO --verbose

program
  .version(pjson.version)
  .arguments('[tst]');

program
  .option('-b, --bbq', 'Add BBQ sauce');

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
