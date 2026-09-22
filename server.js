const express = require("express");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "Please enter a message."
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5.5",
      instructions:
        "You are NovaAgent, a helpful AI assistant created by Ahmad bin Shifa. Answer clearly, safely, and helpfully.",
      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "NovaAgent could not get an AI response."
    });
  }
});

app.listen(PORT, () => {
  console.log(`NovaAgent is running on port ${PORT}`);
});
