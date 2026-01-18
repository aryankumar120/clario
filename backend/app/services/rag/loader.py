import os
from typing import List
from app.storage.file_store import FileStore
from .chunker import chunk_text


class DocumentLoader:
    def __init__(self, base_path: str) -> None:
        self.store = FileStore(base_path)

    def ingest(self, title: str, content: str) -> List[str]:
        path = self.store.save_document(title, content)
        chunks = chunk_text(content)
        # store chunks on disk for traceability
        for idx, chunk in enumerate(chunks):
            self.store.save_chunk(title, idx, chunk)
        return chunks
