import os
from pathlib import Path
from typing import Optional


class FileStore:
    def __init__(self, base_path: str) -> None:
        self.base_path = Path(base_path)
        self.base_path.mkdir(parents=True, exist_ok=True)
        (self.base_path / "chunks").mkdir(parents=True, exist_ok=True)

    def save_document(self, title: str, content: str) -> Path:
        safe_title = title.replace(" ", "_")
        path = self.base_path / f"{safe_title}.txt"
        path.write_text(content, encoding="utf-8")
        return path

    def save_chunk(self, title: str, index: int, content: str) -> Path:
        safe_title = title.replace(" ", "_")
        path = self.base_path / "chunks" / f"{safe_title}_{index}.txt"
        path.write_text(content, encoding="utf-8")
        return path

    def load_document(self, title: str) -> Optional[str]:
        safe_title = title.replace(" ", "_")
        path = self.base_path / f"{safe_title}.txt"
        if not path.exists():
            return None
        return path.read_text(encoding="utf-8")
