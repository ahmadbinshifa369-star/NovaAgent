const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    name: "NovaAgent",
    creator: "Ahmad bin Shifa",
    status: "online"
  });
});

app.post("/api/chat", (req, res) => {
  const message = req.body.message || "";

  res.json({
    reply: `NovaAgent received: ${message}`
  });
});

app.listen(PORT, () => {
  console.log(`NovaAgent is running on port ${PORT}`);
});
