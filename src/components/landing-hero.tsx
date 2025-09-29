"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { LaptopMockup } from "@/components/ui/landing-laptop-mockup";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    // Store prompt in sessionStorage for chat page to pick up
    if (typeof window !== "undefined") {
      sessionStorage.setItem("heroPrompt", prompt);
    }
    router.push("/chat");
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container relative flex flex-col items-center justify-center mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm mb-8">
            <span className="text-black bg-white rounded-full px-3 py-1">
              New
            </span>
            <span className="ml-3 h-4 w-px bg-white/20" />
            <a
              href="https://runash.in/blog"
              className="ml-3 flex items-center text-white hover:text-gray-300"
            >
              Introducing <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            RunAsh AI
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-8">
            The next-gen platform for AI-powered live video streaming, image
            generation, and real-time chat. Create, stream, and interact with AI
            in ways never before possible.
          </p>
          <form onSubmit={handlePromptSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 w-full max-w-xl mx-auto">
            <input
              className="flex-1 p-3 rounded border border-gray-300 bg-white text-black text-lg shadow"
              placeholder="Ask anything or try a prompt..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              autoFocus
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white min-w-[160px]"
              type="submit"
            >
              Try with AI
            </Button>
          </form>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {SUGGESTIONS.slice(0, 6).map((s, i) => (
              <button
                key={i}
                type="button"
                className="px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 text-sm text-gray-700 border border-gray-200 transition"
                onClick={() => {
                  setPrompt(s);
                  setTimeout(() => {
                    if (typeof window !== "undefined") {
                      sessionStorage.setItem("heroPrompt", s);
                    }
                    router.push("/chat");
                  }, 100);
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/app">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 min-w-[200px]"
              >
                Watch Demo
              </Button>
            </Link>
            <Link href="https://github.com/runash-ai-community">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-5xl">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-4xl mb-2">🎥</span>
            <h3 className="font-bold text-lg mb-1">Live Video Generation</h3>
            <p className="text-gray-400 text-sm text-center">
              Generate and stream AI-powered videos in real time from your
              prompts.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-600/20 to-yellow-500/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-4xl mb-2">🖼️</span>
            <h3 className="font-bold text-lg mb-1">AI Image Generation</h3>
            <p className="text-gray-400 text-sm text-center">
              Create stunning images instantly with advanced AI models and
              prompt enhancement.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-600/20 to-cyan-500/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-4xl mb-2">💬</span>
            <h3 className="font-bold text-lg mb-1">Real-Time Chat & Talk</h3>
            <p className="text-gray-400 text-sm text-center">
              Interact with AI via chat or voice, and get instant responses and
              live feedback.
            </p>
          </div>
        </div>

        {/* App Screenshot */}
        <div className="relative group max-w-6xl mx-auto ">
          <div className="absolute transform-flat translate-z-8 rotate-x-50 rotate-z-45 inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-3xl opacity-20" />
          <LaptopMockup>
            <Image
              src="/screenshot.webp?height=800&width=1200"
              width={1200}
              height={800}
              alt="Live Video Streaming"
              className="w-full h-auto rotate-x-15 -rotate-y-30 -skew-y-12 transform-flat translate-z-8 rotate-x-50 rotate-z-45"
              priority
            />
          </LaptopMockup>
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl opacity-20" />
        </div>
      </div>
    </section>
  );
}
