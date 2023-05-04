const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

/**  en cb defino donde se va a guardar el archivo-> /public/uploads
 *  debo crear la carpeta previamente */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

app.use(multer({ storage }).single("photo"));

/** 'photo' es el name de mi input en el html
 *   <input type="file" name="photo" required><br>
 */
app.post("/mascotas", (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = new Error("Por favor sube un archivo");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(`Archivo <b>${file.originalname}</b> subido correctamente`);
});

const port = 8080;
const server = app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
server.on("error", (err) => console.log("Error en el servidor:", err));
