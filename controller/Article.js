// ✅ Define a controller function named "prueba" using an arrow function.
// It takes two parameters: req (request) and res (response).
const prueba = (req, res) => {

    // 🔹 Sends an HTTP response with status code 200 (OK)
    // and a JSON object containing a message.
    return res.status(200).json({
      mensaje: "Soy una acción de prueba en mi controlador de artículos"
    });
  };
  
  // ⚙️ Exports the "prueba" function so it can be used in other files,
  // such as routes or the main app file.
  module.exports = { 
    prueba 
  };
  