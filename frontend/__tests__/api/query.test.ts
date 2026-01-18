/**
 * API Query Endpoint Tests
 * Tests the /api/query endpoint with various inputs
 */

describe("Query API Endpoint", () => {
  const apiUrl = "http://localhost:3000/api/query";

  test("should return error when GROQ_API_KEY is missing", async () => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "test" }),
    });

    expect(response.status).toBe(500);
  });

  test("should return error when query is empty", async () => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "" }),
    });

    expect(response.status).toBe(400);
  });

  test("should return proper structure with valid query", async () => {
    if (!process.env.GROQ_API_KEY) {
      console.log("Skipping: GROQ_API_KEY not set");
      return;
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: "Why did latency increase?",
        mode: "analyze",
      }),
    });

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty("result");
    expect(data).toHaveProperty("evidence");
    expect(data).toHaveProperty("actions");
    expect(Array.isArray(data.evidence)).toBe(true);
    expect(Array.isArray(data.actions)).toBe(true);
  });

  test("should handle different modes", async () => {
    if (!process.env.GROQ_API_KEY) {
      console.log("Skipping: GROQ_API_KEY not set");
      return;
    }

    const modes = ["analyze", "summarize", "visualize"];

    for (const mode of modes) {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: "Test query",
          mode,
        }),
      });

      expect(response.status).toBe(200);
    }
  });
});
