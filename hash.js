const md5File = require('md5-file')
 
/* Async usage */
let date = new Date();

md5File('./bin/BBT/The.Big.Bang.Theory.S11E01.HDTV.x264-LOL[eztv].mkv', (err, hash) => {
  if (err) throw err 
  console.log(`The MD5 sum of LICENSE.md is: ${hash}`);
  console.log(new Date().getTime() - date.getTime());
})
 
/* Sync usage */
// const hash = md5File.sync('./bin/BBT/The.Big.Bang.Theory.S11E01.HDTV.x264-LOL[eztv].mkv')
// console.log(`The MD5 sum of LICENSE.md is: ${hash}`)