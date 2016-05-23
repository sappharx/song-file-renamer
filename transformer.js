function transformer (filename) {
  const re = /^(\d\d)\s-\s(.+)\s-\s(.+)\.(flac|ogg|wav)$/;
  const result = re.exec(filename);

  const track = result[1];
  const artist = result[2];
  const title = result[3];
  const type = result[4];

  console.log(track, artist, title, type);

  return `${track} - ${title}.${type}`;
}

module.exports = transformer;
