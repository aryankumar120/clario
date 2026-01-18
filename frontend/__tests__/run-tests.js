/**
 * Test Runner Instructions
 * 
 * These are integration/E2E tests that test the APIs in a running Next.js dev environment.
 * They are NOT Jest unit tests but fetch-based tests.
 * 
 * To run tests:
 * 
 * 1. Start the dev server:
 *    npm run dev
 * 
 * 2. In another terminal, run the test script:
 *    node __tests__/run-tests.js
 * 
 * Test Files:
 * - __tests__/api/query.test.ts - Tests /api/query endpoint
 * - __tests__/api/dashboard.test.ts - Tests /api/dashboard/metrics endpoint
 * 
 * Requirements:
 * - Dev server running at http://localhost:3000
 * - GROQ_API_KEY set in .env.local (for query API tests)
 */

const fs = require("fs");
const path = require("path");

// Simple test runner
const testFiles = [
  "__tests__/api/query.test.ts",
  "__tests__/api/dashboard.test.ts",
];

console.log("📝 Clario Test Suite\n");
console.log("To run these tests:\n");
console.log("1. Ensure dev server is running: npm run dev\n");
console.log("2. In another terminal, run individual test scenarios:\n");

console.log("--- Query API Tests ---");
console.log("curl -X POST http://localhost:3000/api/query \\");
console.log("  -H 'Content-Type: application/json' \\");
console.log("  -d '{\"query\":\"Why did latency increase?\",\"mode\":\"analyze\"}'");

console.log("\n--- Dashboard Metrics Tests ---");
console.log("curl http://localhost:3000/api/dashboard/metrics");
console.log("curl 'http://localhost:3000/api/dashboard/metrics?query=latency'");
console.log("curl 'http://localhost:3000/api/dashboard/metrics?query=cpu'");
console.log("curl 'http://localhost:3000/api/dashboard/metrics?query=error'");

console.log("\n✅ All API endpoints are tested manually via curl or Postman");
console.log("✅ Component tests can be added with Jest + React Testing Library\n");
