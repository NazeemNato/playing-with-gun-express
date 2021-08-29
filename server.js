const express = require("express");
const cors = require("cors");
const Gun = require("gun");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(Gun.serve);

app.get("/", (req, res) => {
  return res.send("Playing with GUN 🔫");
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

Gun({ web: server });
