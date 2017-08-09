#!/usr/bin/env node

const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');

const main = require('./spheroid/main');

const version = '0.1.0';

let testtmp;

program
  .version(version)
  .arguments('[tst]')
  .option('-b, --bbq', 'Add BBQ sauce')
  .action(function(tst) {
    console.log('hello');
  })
  .parse(process.argv);

co(function * () {
  console.log(`Spheroid ${version}`);
})
