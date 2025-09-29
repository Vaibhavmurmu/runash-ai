"use client";
import { useState, forwardRef, useImperativeHandle } from "react";

type Message = {
  sender: "user" | "ai";
  text: string;
};


const Chat = forwardRef(function Chat(_, ref) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    addPrompt: (prompt: string) => {
      setMessages((msgs) => [...msgs, { sender: "user", text: prompt }]);
      setInput("");
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          { sender: "ai", text: `AI: This is a response to "${prompt}"` },
        ]);
        setLoading(false);
      }, 1200);
      setLoading(true);
    },
  }));

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setLoading(true);
    const prompt = input;
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: "ai", text: `AI: This is a response to "${prompt}"` },
      ]);
      setLoading(false);
    }, 1200);
  };

  const SUGGESTIONS = [
    "Show me organic product ideas",
    "Suggest sustainable living tips",
    "Generate a vegan recipe",
    "Create a product description for eco-friendly soap",
    "Generate an AI image of a green smoothie",
    "Start a live stream about organic farming",
    "Help me write a recipe for plant-based burgers",
    "Generate a video about sustainable packaging",
    "Talk to live about composting at home",
    "Help me write a product description for bamboo toothbrush",
    "Show me trending organic recipes",
    "Suggest a live stream topic for eco-friendly cooking"
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">AI Chat</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {SUGGESTIONS.slice(0, 6).map((s, i) => (
          <button
            key={i}
            type="button"
            className="px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 text-sm text-gray-700 border border-gray-200 transition"
            onClick={() => {
              setInput(s);
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="w-full h-64 overflow-y-auto bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 flex flex-col gap-2">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center">No messages yet.</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`text-sm p-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-100 dark:bg-blue-900 self-end text-right"
                : "bg-gray-200 dark:bg-gray-700 self-start text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-gray-400 text-center">AI is typing...</div>
        )}
      </div>
      <div className="flex w-full gap-2">
        <input
          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-black dark:text-white"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
        />
        <button
          className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition"
          onClick={handleSend}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
});

export default Chat;
