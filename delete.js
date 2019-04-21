var fs = require('fs-extra'); //var fs = require('fs')

fs.remove('./recordings', function(err){
  if (err) return console.error(err);

  console.log("🚮 Recordings deleted on startup!")
});

fs.removeSync('./recordings');