const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", (req, res) => {
  const message = req.body.message || "";

  res.json({
    reply: "NovaAgent received your message: " + message
  });
});

app.listen(PORT, () => {
  console.log("NovaAgent is running!");
});
