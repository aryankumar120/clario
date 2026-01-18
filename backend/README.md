# Clario Backend (FastAPI)

## Quick start

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Architecture

- FastAPI with modular routers under `app/api/routes`
- Agent pipeline orchestrated in `app/services/pipeline.py`
- Lightweight RAG stub: documents -> chunks -> deterministic embeddings -> in-memory vector search
- Structured insight response defined in `app/models/insight.py`

## Key endpoints

- `GET /api/health` – liveness check
- `POST /api/ingest` – ingest a document `{title, content, tags}`
- `POST /api/insights/query` – run the agentic pipeline on a question and optional signals

## Configuration

Environment variables (override defaults in `app/core/config.py`):
- `VECTOR_STORE_PATH` – path to store index (unused for in-memory stub)
- `DOCUMENT_STORE_PATH` – path to store raw documents and chunks
- `EMBEDDING_DIM` – embedding dimension

## Next steps

- Swap `SimpleEmbedder` with real embedding service
- Persist vector store (e.g., FAISS on disk)
- Add auth + multi-tenant workspace separation
- Add PostgreSQL-backed metadata for documents and insights
