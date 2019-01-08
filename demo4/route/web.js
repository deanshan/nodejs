const express=require('express');

module.exports = (function() {
  let router = express.Router();

  router.get('/', (req, res)=>{
    let data = {
      text: '我是web'
    }
    res.send(JSON.stringify(data)).end();
  });

  return router;
}());
