const axios = require("axios");


const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateTaskSummary = async (taskDescription) => {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are an operations manager",
      },
      {
        role: "user",
        content: taskDescription,
      },
    ],
  });

  return {
    summary: response.choices[0].message.content,
    effort: "Medium",
    risk: "Low",
  };
};



module.exports = {generateTaskSummary} ;