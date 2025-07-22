"use client";
import { useChat } from "ai/react";


import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  return (
<div className="
  fixed bottom-0 left-0 
  lg:left-64 
  w-full lg:w-[calc(100%-16rem)] 
  z-10 
  bg-gradient-to-r 
  from-purple-600 
  via-teal-500 
  via-sky-900 
  to-sky-400
  shadow-xl
  backdrop-blur-md
">
      <div className="max-w-screen-md mx-auto p-4">
        <div className="h-32 overflow-y-auto mb-3 border rounded bg-gray-50 p-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`mb-2 ${
                m.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block geistMono px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-line ${geistSans.variable} ${geistMono.variable} antialiased ${
                  m.role === "user"
                    ? "bg-blue-100 text-blue-900"
                    : "bg-green-100 text-green-900"
                }`}
              >
                {m.content}
              </span>
            </div>
          ))}
          {isLoading && <div className="text-gray-400">در حال پاسخ...</div>}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 geistMono text-right border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={input}
            onChange={handleInputChange}
            placeholder="بپرس | اسأل | Ask"
            disabled={isLoading}
          />
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            type="submit"
            disabled={isLoading}
          >
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
}
