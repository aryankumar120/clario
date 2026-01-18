# Clario (PulseOps) Monorepo

Operational intelligence platform with FastAPI backend and Next.js frontend.

## Structure
- backend/ – FastAPI, agent pipeline, RAG stubs
- frontend/ – Next.js + Tailwind UI

## Backend quick start
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
API root: http://localhost:8000/api

## Frontend quick start
```bash
cd frontend
npm install
npm run dev
```
Default frontend expects backend at `http://localhost:8000/api` (override with `NEXT_PUBLIC_API_BASE`).

## High-level flow
1) Ingest docs via `POST /api/ingest` with `{ title, content }`
2) Query insights via `POST /api/insights/query` with `question` and optional `signals`
3) Agents run intent → retrieval → signals → reasoning → risk → verification → synthesis

## Next steps
- Swap deterministic embedder with production embedding service
- Persist vector store to disk/FAISS and add PostgreSQL metadata
- Hook frontend queries to live backend and paginate insight history
- Add auth, multi-tenant workspaces, and Slack/alerting hooks
