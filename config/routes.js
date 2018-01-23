//Update the name of the controller below and rename the file.
// const template = require("../controllers/template.js")
const cards = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/', cards.index);

  app.get('/cards/add/:id', cards.add)

  app.get ('/cards/remove/:id', cards.remove)

  app.post('/cards', cards.addOne);
}
