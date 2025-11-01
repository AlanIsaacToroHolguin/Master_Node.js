//(Object Destructuring)
//extract only the Router property from the object that Express exports.
// (Object Destructuring)
// Extract only the Router property from Express
const { Router } = require("express");
const router = Router();

const articleController = require("../controller/article");

// Test route
router.get("/ruta-de-prueba", articleController.prueba);

module.exports = router;
