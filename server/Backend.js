const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();
// Configuración de Multer para guardar la imagen de forma temporal
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `imagen_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Configuración de Nodemailer (reemplaza con tus datos de SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail", // Usa el servicio de tu preferencia (Gmail, SendGrid, etc.)
  auth: {
    user: "gamalop0104@gmail.com", // Tu correo electrónico
    pass: "gabrielporquesi0104.", // Tu contraseña o contraseñas de aplicación
  },
});

// Ruta para manejar la subida de la imagen y enviarla por correo
app.post("/Usabilidad/uploads", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No se recibió ningún archivo" });
  }

  const filePath = path.join(__dirname, "uploads", req.file.filename);
  const fileName = req.file.filename;

  // Configuración del correo electrónico
  const mailOptions = {
    from: "gamalop0104@gmail.com", // Tu correo
    to: "gamalop0104@gmail.com", // Correo del destinatario
    subject: "Carta ",
    text: "",
    attachments: [
      {
        filename: fileName,
        path: filePath,
      },
    ],
  };
  try {
    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

// Iniciar el servidor
app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080");
});
