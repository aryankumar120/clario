import { NextRequest, NextResponse } from "next/server";

type QueryBody = {
  query: string;
  mode?: "analyze" | "summarize" | "visualize";
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GROQ_API_KEY. Set it in your environment." },
      { status: 500 }
    );
  }

  let body: QueryBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const userQuery = (body?.query || "").toString().trim();
  const mode = body?.mode || "analyze";

  if (!userQuery) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  // Instruct the LLM to return strictly JSON we can parse.
  const system = `You are Clario, an SRE assistant that generates concise, actionable insights.
Respond ONLY with strict JSON object using the schema: {"result": string, "evidence": string[], "actions": string[]}. No markdown, no extra text.`;

  const user = `Mode: ${mode}\nUser Query: ${userQuery}\n\nGenerate a short, clear result, 3-5 bullet evidence items, and 3-5 action items.`;

  try {
    const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        temperature: 0.2,
        response_format: { type: "json_object" },
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return NextResponse.json(
        { error: `Groq API error (${resp.status}): ${text}` },
        { status: 502 }
      );
    }

    const data = await resp.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No content returned from Groq API" },
        { status: 502 }
      );
    }

    // content should be a JSON string because we used response_format json_object
    let parsed: { result?: string; evidence?: string[]; actions?: string[] };
    try {
      parsed = JSON.parse(content);
    } catch {
      // If provider returned plain text, try to salvage minimally.
      parsed = { result: content, evidence: [], actions: [] };
    }

    return NextResponse.json({
      result: parsed.result || "",
      evidence: Array.isArray(parsed.evidence) ? parsed.evidence : [],
      actions: Array.isArray(parsed.actions) ? parsed.actions : [],
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: `Unexpected error: ${err?.message || String(err)}` },
      { status: 500 }
    );
  }
}
