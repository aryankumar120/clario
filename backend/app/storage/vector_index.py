from typing import List
import numpy as np
from app.services.rag.vector_store import VectorStore


class SimpleEmbedder:
    """Deterministic bag-of-words style embedder for local dev."""

    def __init__(self, dim: int = 384):
        self.dim = dim

    def encode(self, text: str) -> np.ndarray:
        # simple hash-based embedding for determinism
        vec = np.zeros(self.dim, dtype=np.float32)
        for word in text.split():
            slot = hash(word) % self.dim
            vec[slot] += 1.0
        norm = np.linalg.norm(vec)
        if norm > 0:
            vec /= norm
        return vec


class VectorIndex:
    def __init__(self, dim: int = 384) -> None:
        self.embedder = SimpleEmbedder(dim=dim)
        self.store = VectorStore(dim=dim)

    def add_documents(self, chunks: List[str]) -> None:
        vectors = [self.embedder.encode(chunk) for chunk in chunks]
        self.store.add(vectors, chunks)

    def search(self, query: str, top_k: int = 5) -> List[str]:
        query_vec = self.embedder.encode(query)
        return self.store.search(query_vec, top_k=top_k)
