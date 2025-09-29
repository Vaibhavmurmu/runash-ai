"use client";
import Chat from "@/components/chat";
import { useEffect, useRef } from "react";

export default function ChatPage() {
  const chatRef = useRef<any>(null);
  useEffect(() => {
    // If a prompt was set in sessionStorage, send it as the first message
    if (typeof window !== "undefined") {
      const prompt = sessionStorage.getItem("heroPrompt");
      if (prompt && chatRef.current && chatRef.current.addPrompt) {
        chatRef.current.addPrompt(prompt);
        sessionStorage.removeItem("heroPrompt");
      }
    }
  }, []);
  return <Chat ref={chatRef} />;
}
