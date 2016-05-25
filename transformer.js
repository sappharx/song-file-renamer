function transformer (filename) {
  const re = /^(?:(\d\d)\s-\s)(.+)\.(flac|ogg|wav)$/;
  const result = re.exec(filename);
  
  if (!result) {
    return filename;
  }

  const track = result[1];
  const title = getSongTitle(result[2]);
  const type = result[3];

  return `${track} - ${title}.${type}`;
}

function getSongTitle (artistAndTitle) {
  return artistAndTitle.split('-').slice(1)
    .map(str => str.trim())
    .join(' - ');
}

module.exports = transformer;
