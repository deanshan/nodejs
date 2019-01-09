const express=require('express')
const fs = require('fs')
const marked = require('marked')

let data = {
  text = "1111"
}
// let path = "es6.md"
// fs.readFile(path, function(err, data) {
//   if(err) {
//       throw err
//   } else {
//       data = marked(data.toString())
//   }
// })

module.exports = (function() {
  let router = express.Router();

  router.get('/', (req, res)=>{
    res.send(JSON.stringify(data)).end();
  });

  return router;
}());
