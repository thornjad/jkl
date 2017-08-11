#!/usr/bin/env node

const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');

const main = require('./jkl');
const pjson = require('../package.json')

let testtmp;

program
  .version(pjson.version)
  .arguments('[tst]')
  .option('-b, --bbq', 'Add BBQ sauce')
  .option('-f, --flat', 'Assume Earth is flat')
  .action(function(tst) {
    console.log('hello');
  })
  .parse(process.argv);

co(function * () {
  console.log(`jkl ${pjson.version}\n`);
});
