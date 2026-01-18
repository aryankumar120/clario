from typing import List
from pydantic import BaseModel, Field


class DocumentPayload(BaseModel):
    title: str
    content: str = Field(..., description="Raw text content")
    tags: List[str] = Field(default_factory=list)


class IngestionResponse(BaseModel):
    stored: bool
    chunks: int
    message: str
