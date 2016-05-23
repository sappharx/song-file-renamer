const options = require('commander');
const pkg = require('./package.json');

function getList(val) {
  return val.split(',');
}

const descriptions = {
  directory: 'rename all files in a directory',
  file: 'rename specific file',
  ignore: 'ignore specified files [provide comma-separated list]',
  list: 'rename specified files [provide comma-separated list]',
  verbose: 'display additional output',
};

options
  .version(pkg.version)
  .option('-d, --directory <dir>', descriptions.directory, '.')
  .option('-f, --file <file>', descriptions.file)
  .option('-g, --ignore <files>', descriptions.ignore, getList, [])
  .option('-l, --list <files>', descriptions.list, getList, [])
  .option('-v, --verbose', descriptions.verbose)
  .parse(process.argv);

module.exports = options;
