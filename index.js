#!/usr/bin/env node

const fs = require('fs');
const options = require('./options');
const transformer = require('./transformer');

const files = fs.readdirSync(options.directory);
// console.log(files);

files
  .filter(value => {
    return (
      value.endsWith('.flac') ||
      value.endsWith('.ogg') ||
      value.endsWith('.wav'))
  })
  .forEach(value => {
    console.log(value);
    console.log(transformer(value));
  });
