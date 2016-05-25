#!/usr/bin/env node

const fs = require('fs');
const transformer = require('./transformer');

const files = fs.readdirSync('.');

files
  .filter(value => {
    return (
      value.endsWith('.flac') ||
      value.endsWith('.ogg') ||
      value.endsWith('.wav'))
  })
  .forEach(old => {
    const newName = transformer(old);
    
    console.log(`renaming "${old}" to "${newName}"`);
    
    fs.renameSync(old, newName);
  });
