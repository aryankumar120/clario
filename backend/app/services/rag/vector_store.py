from __future__ import annotations
from typing import List, Tuple
import numpy as np


class VectorStore:
    def __init__(self, dim: int = 384) -> None:
        self.dim = dim
        self._store: List[Tuple[np.ndarray, str]] = []

    def add(self, vectors: List[np.ndarray], payloads: List[str]) -> None:
        for vec, payload in zip(vectors, payloads):
            self._store.append((vec.astype(np.float32), payload))

    def search(self, query_vector: np.ndarray, top_k: int = 5) -> List[str]:
        if not self._store:
            return []
        query_vector = query_vector.astype(np.float32)
        scores = []
        for vec, payload in self._store:
            sim = float(np.dot(vec, query_vector) / (np.linalg.norm(vec) * np.linalg.norm(query_vector) + 1e-8))
            scores.append((sim, payload))
        scores.sort(key=lambda x: x[0], reverse=True)
        return [payload for _, payload in scores[:top_k]]
