"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { getAIResponse } from "./actions/aiActions";
import Image from 'next/image';

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const hanldesubmit = async () => {
    if (!prompt.trim() || loading) return;

    const userPrompt = prompt;
    setOutput((prev) => [...prev, `USER:${userPrompt}`]);
    setPrompt("");
    setLoading(true);

    try {
      const response = await getAIResponse(userPrompt);
      setOutput((prev) => [...prev, `AI:${response}`]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setOutput((prev) => [...prev, "AI:Something went wrong. Please try again.",]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100">
      <main className="mx-auto flex h-screen max-w-3xl flex-col bg-white">

        {/* Header */}
        <div className="border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo2.jpg" alt="AI Assistant" width={40} height={40} className="rounded-full" />

            <div>
              <h1 className="text-xl font-semibold text-blue-500">
                AI Assistant
              </h1>

              <p className="text-sm text-zinc-500">
                Ask anything and get an AI response
              </p>
            </div>

          </div>
        </div>

        {/* Chat Area */}

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {output.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <Image src="/logo2.jpg" alt="AI Assistant" width={100} height={100} className="rounded-full" />

              <h2 className="mt-5 text-xl font-semibold text-zinc-800">
                How can I help you?
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Ask me anything and I'll do my best to help.
              </p>

            </div>
          ) : (

            <div className="space-y-6">
              {output.map((message, index) => {
                const isUser = message.startsWith("USER:");
                const content = message.replace(/^(USER:|AI:)/, "");

                return (
                  <div key={index}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`} >

                    <div className={`max-w-[80%] rounded-2xl px-5 py-2 ${isUser ? "bg-black text-white" : "bg-zinc-100 text-zinc-900"}`} >
                      {isUser ? (
                        <p className="leading-7">
                          {content}
                        </p>
                      ) : (
                        <div>
                          <ReactMarkdown
                            components={{
                              h1: ({ children }) => (
                                <h1 className="mb-4 text-2xl font-bold">
                                  {children}
                                </h1>
                              ),

                              h2: ({ children }) => (
                                <h2 className="mb-3 mt-5 text-xl font-bold">
                                  {children}
                                </h2>
                              ),

                              h3: ({ children }) => (
                                <h3 className="mb-2 mt-4 text-lg font-semibold">
                                  {children}
                                </h3>
                              ),

                              p: ({ children }) => (
                                <p className="leading-7">
                                  {children}
                                </p>
                              ),

                              ul: ({ children }) => (
                                <ul className="mb-4 ml-5 list-disc space-y-1">
                                  {children}
                                </ul>
                              ),

                              ol: ({ children }) => (
                                <ol className="mb-4 ml-5 list-decimal space-y-1">
                                  {children}
                                </ol>
                              ),

                              li: ({ children }) => (
                                <li className="leading-7">
                                  {children}
                                </li>
                              ),

                              strong: ({ children }) => (
                                <strong className="font-semibold">
                                  {children}
                                </strong>
                              ),

                              code: ({ children }) => (
                                <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm">
                                  {children}
                                </code>
                              ),
                            }}
                          >
                            {content}
                          </ReactMarkdown>
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}

              {/* Loading */}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 px-5 py-4">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>


        <div className="border-t bg-white p-4">
          <div className="flex gap-3">

            <input type="text" value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
              placeholder="Type your message..."
              className="flex-1 rounded-xl border text-gray-900 border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400 disabled:bg-zinc-100" />

            <button onClick={hanldesubmit}
              disabled={loading || !prompt.trim()}
              className="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50" >
              {loading ? "Thinking..." : "Send"}
            </button>

          </div>
        </div>

      </main>
    </div>
  );
}