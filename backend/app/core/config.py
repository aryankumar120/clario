from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List, Optional


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    PROJECT_NAME: str = "Clario"
    API_V1_PREFIX: str = "/api"
    EMBEDDING_DIM: int = 384
    VECTOR_STORE_PATH: str = "./data/vector.index"
    DOCUMENT_STORE_PATH: str = "./data/documents"
    ALLOWED_FILE_TYPES: List[str] = [".txt", ".md"]
    DEFAULT_TOP_K: int = 5

    # Use Optional[str] for Python 3.9 compatibility
    LLM_ENDPOINT: Optional[str] = None
    EMBEDDING_ENDPOINT: Optional[str] = None


settings = Settings()
