const express = require("express");
const { route } = require(".");
const router = express.Router();

router.get("/comentarios/:postid", (req, res) => {
  res.json({
    conteudo: "Oi",
    autor: "Zé",
  });
});

module.exports = router;
