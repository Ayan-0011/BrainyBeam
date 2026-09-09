"use server";

import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function getAIResponse(prompt: string): Promise<string> {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "openai/gpt-oss-20b",
        });

        return (
            chatCompletion.choices[0]?.message?.content ||
            "No output received from the AI model."
        );
    } catch (error) {
        console.error("Groq API Error:", error);
        return "Something went wrong while getting AI response.";
    }
}