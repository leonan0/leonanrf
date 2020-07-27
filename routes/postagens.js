const express = require("express");
const { route } = require(".");
const router = express.Router();

router.get("/postagens", (req, res) => {
  res.json({
    titulo: "Meu primeiro Post",
    conteudo: "Olá",
    autor: "Leonan",
  });
});

module.exports = router;
