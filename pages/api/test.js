import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req, res) {
  const prompt = req.body.prompt;

  if (!prompt || prompt === "") {
    return res.status(400).json({
      error: "Please send your prompt",
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 2048,
    });

    const response =
      completion.choices[0].message.content ||
      "Sorry, there was a problem!";

    return res.status(200).json({
      text: response,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Failed to generate response",
    });
  }
}
