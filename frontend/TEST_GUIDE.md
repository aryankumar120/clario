# Clario Test Guide

## API Tests

### Query API (`/api/query`)

**Test 1: Valid Query**
```bash
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d '{"query":"Why did latency increase?","mode":"analyze"}' | jq
```
Expected: 200 response with `result`, `evidence`, `actions`

**Test 2: Empty Query**
```bash
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d '{"query":""}' | jq
```
Expected: 400 error - "Query is required"

**Test 3: Different Modes**
```bash
# Analyze mode
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d '{"query":"Test","mode":"analyze"}' | jq

# Summarize mode
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d '{"query":"Test","mode":"summarize"}' | jq

# Visualize mode
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d '{"query":"Test","mode":"visualize"}' | jq
```
Expected: 200 for all modes

---

### Dashboard Metrics API (`/api/dashboard/metrics`)

**Test 1: Default Metrics**
```bash
curl http://localhost:3000/api/dashboard/metrics | jq
```
Expected: Default scenario with confidence=78

**Test 2: Latency Scenario**
```bash
curl "http://localhost:3000/api/dashboard/metrics?query=latency" | jq
```
Expected: P95 Latency KPI with confidence=92

**Test 3: CPU Scenario**
```bash
curl "http://localhost:3000/api/dashboard/metrics?query=cpu" | jq
```
Expected: CPU Usage KPI with confidence=88

**Test 4: Error Scenario**
```bash
curl "http://localhost:3000/api/dashboard/metrics?query=error" | jq
```
Expected: Error Rate KPI with confidence=95

---

## End-to-End Flow Test

1. **Go to Query Page**
   - Visit: http://localhost:3000/query

2. **Submit Query**
   - Type: "Why did latency increase?"
   - Click send or press Enter

3. **Verify Results**
   - Should see Result section with insights
   - Should see Evidence section
   - Should see Recommended Actions section

4. **Navigate to Dashboard**
   - Click "Dashboard" in navigation

5. **Verify Context**
   - Dashboard should show latency-specific metrics
   - KPI should show "P95 Latency: 342ms"
   - Confidence score should show 9.2

6. **Test Different Query**
   - Go back to /query
   - Submit: "Why is CPU high?"
   - Go to Dashboard
   - Should now show CPU metrics (87% CPU Usage)

---

## Manual Component Testing

### Query Page
- [ ] Can type in input field
- [ ] Can submit with Enter key
- [ ] Can submit with button click
- [ ] Loading spinner shows during request
- [ ] Results appear after response
- [ ] Evidence displays bullet points
- [ ] Actions display bullet points

### Dashboard Page
- [ ] KPI cards fade in
- [ ] Activity items animate
- [ ] Analytics bars grow from bottom
- [ ] Confidence score displays correctly
- [ ] Metrics update based on URL/localStorage query
- [ ] Metrics change when navigating from different queries

### Navigation
- [ ] Home link works
- [ ] Query link works
- [ ] Dashboard link works
- [ ] User icon link goes to dashboard
- [ ] Back to Home link works

---

## Known Limitations

- Tests are manual (curl/browser) - not automated CI/CD
- Component tests would require Jest + React Testing Library setup
- No E2E tests with Playwright/Cypress
- No visual regression testing

## Next Steps

To add automated tests:
1. Install Jest: `npm install --save-dev jest @testing-library/react @testing-library/jest-dom`
2. Create component test files in `__tests__/components/`
3. Run: `npm test`
