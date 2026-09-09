"use client"
import { useState } from "react";
import { getAIResponse } from "./actions/aiActions";


export default function Home() {

  const [prompt, setPrompt] = useState<String>("");
  const [output, setOutput] = useState<String>("");

  const hanldesubmit = async () => {
    const response = await getAIResponse(prompt);
    setOutput((prev)=>prev + "\n" + response);
    setPrompt("");
  }

  return (
    <div className="flex justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex justify-between flex-col item-center w-full h-screen max-w-3xl py-20 px-16 bg-white dark:bg-black">
        {
          output && (
            <div>
              <h1 className="text-4xl p-3">AI Response:</h1>
              <h1 className="p-3">{output}</h1>
            </div>
          )
        }


        <div>
          <input type="text" onChange={(e) => setPrompt(e.target.value)} value={prompt}
            className="w-4/6 rounded-md border border-zinc-200 bg-transparent px-3 py-2 my-4 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-100 dark:focus:ring-zinc-400 dark:focus:ring-offset-black" placeholder="Type your message here..." />
          <button className="text-white py-2 px-4 rounded-lg bg-gray-600 mx-5" onClick={hanldesubmit}>submit</button>
        </div>

      </main>
    </div>
  );
}
