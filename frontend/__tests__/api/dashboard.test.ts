/**
 * Dashboard Metrics API Tests
 * Tests the /api/dashboard/metrics endpoint with different query scenarios
 */

describe("Dashboard Metrics API", () => {
  const apiUrl = "http://localhost:3000/api/dashboard/metrics";

  test("should return default metrics when no query provided", async () => {
    const response = await fetch(apiUrl);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty("kpis");
    expect(data).toHaveProperty("activities");
    expect(data).toHaveProperty("analytics");
    expect(data).toHaveProperty("confidence");

    expect(Array.isArray(data.kpis)).toBe(true);
    expect(data.kpis.length).toBe(3);
    expect(data.confidence).toBe(78);
  });

  test("should return latency metrics when query contains 'latency'", async () => {
    const response = await fetch(`${apiUrl}?query=Why%20did%20latency%20increase`);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.confidence).toBe(92);
    expect(data.kpis[0].label).toBe("P95 Latency");
  });

  test("should return CPU metrics when query contains 'cpu'", async () => {
    const response = await fetch(`${apiUrl}?query=Why%20is%20CPU%20high`);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.confidence).toBe(88);
    expect(data.kpis[0].label).toBe("CPU Usage");
  });

  test("should return error metrics when query contains 'error'", async () => {
    const response = await fetch(`${apiUrl}?query=What%20caused%20the%20errors`);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.confidence).toBe(95);
    expect(data.kpis[0].label).toBe("Error Rate");
  });

  test("should return valid structure for all scenarios", async () => {
    const queries = ["latency", "cpu", "error", ""];

    for (const query of queries) {
      const url = query ? `${apiUrl}?query=${query}` : apiUrl;
      const response = await fetch(url);
      expect(response.status).toBe(200);

      const data = await response.json();
      expect(Array.isArray(data.kpis)).toBe(true);
      expect(Array.isArray(data.activities)).toBe(true);
      expect(Array.isArray(data.analytics)).toBe(true);
      expect(typeof data.confidence).toBe("number");

      // Validate KPI structure
      data.kpis.forEach((kpi: any) => {
        expect(kpi).toHaveProperty("label");
        expect(kpi).toHaveProperty("value");
        expect(kpi).toHaveProperty("delta");
      });

      // Validate activity structure
      data.activities.forEach((activity: any) => {
        expect(activity).toHaveProperty("title");
        expect(activity).toHaveProperty("desc");
        expect(activity).toHaveProperty("time");
      });
    }
  });
});
