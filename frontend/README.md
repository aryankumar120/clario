# 🎯 Clario - Operational Intelligence Platform

**Clario** is an AI-powered operational intelligence system that analyzes real-time operational data and provides explainable, actionable insights through a 7-agent reasoning pipeline.

## Features

- 🤖 **AI-Powered Analysis** - Groq LLM backend with specialized agents (Intent, Retrieval, Signal, Reasoning, Risk, Verification, Synthesizer)
- 💬 **Natural Language Queries** - Ask questions in plain English, get intelligent insights
- 📊 **Context-Aware Dashboard** - Metrics update based on your query context
- 🎨 **Minimalist Design** - Professional grayscale UI with smooth animations
- ⚡ **Real-Time Updates** - Instant results with skeleton loading states
- 🔐 **Type-Safe** - Full TypeScript support throughout

## Tech Stack

### Frontend
- **Next.js 14** - React framework with server-side rendering
- **React 18** - UI components and state management
- **TypeScript 5.3** - Static typing
- **Tailwind CSS 3.4** - Utility-first styling
- **Node.js** - JavaScript runtime

### Backend
- **FastAPI** - Python web framework (for future backend integration)
- **Groq API** - LLM provider for intelligent analysis
- **Python 3.9** - Agent pipeline logic


## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Groq API key (free from [console.groq.com](https://console.groq.com))

### Installation

1. **Clone or navigate to the frontend folder**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

4. **Add your Groq API key**
Edit `.env.local`:
```
GROQ_API_KEY=gsk_your_key_here
GROQ_MODEL=llama-3.1-8b-instant
```

Get a free API key: https://console.groq.com/keys

5. **Start the dev server**
```bash
npm run dev
```

6. **Open in browser**
```
http://localhost:3000
```


## Project Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER (Browser/Frontend)                     │
│                                                                   │
│  Homepage (Hero, Features, How It Works)                        │
│         ↓                                                        │
│  Query Page (Ask questions via text)                            │
│         ↓                                                        │
│  Dashboard (See metrics, insights, activity)                    │
└──────────────────────┬──────────────────────────────────────────┘
                       │ HTTP REST API calls
                       ↓
┌─────────────────────────────────────────────────────────────────┐
│                  BACKEND (FastAPI Server)                        │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  7-Agent Pipeline (Core Intelligence)                    │   │
│  │  1. Intent Agent → Understands user's question           │   │
│  │  2. Retrieval Agent → Fetches relevant operational data  │   │
│  │  3. Signal Agent → Identifies important patterns         │   │
│  │  4. Reasoning Agent → Explains the patterns              │   │
│  │  5. Risk Agent → Assesses potential issues               │   │
│  │  6. Verification Agent → Validates findings              │   │
│  │  7. Synthesizer Agent → Creates final response           │   │
│  └──────────────────────────────────────────────────────────┘   │
│         ↓                                                        │
│  Database / Data Sources (Logs, metrics, events)                │
└─────────────────────────────────────────────────────────────────┘

```

## Credits

Built by Aryan ❤️ Clario

