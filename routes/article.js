//(Object Destructuring)
//extract only the Router property from the object that Express exports.
const {Router} = require("express");
const router = Router();

const articlecontroller = require("../controller/article");



//test routes
router.get("/ruta-de-prueba",articlecontroller.prueba);


module.exports = router;

