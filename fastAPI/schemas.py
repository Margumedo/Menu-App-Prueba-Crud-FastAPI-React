from pydantic import BaseModel, validator
from datetime import datetime,date
from typing import Optional


class PlatoBase(BaseModel):
    nombre: str
    color: str
    precio: float
    campos: str
    inicio_actividad: date
    imagen: str


    class Config:
        orm_mode= True

    @validator('nombre')
    def validar_nombre(cls, value):
        if len(value.split()) <2: 
            raise ValueError("El nombre del plato debe tener al menos dos pabalabras")
        return value

class PlatoShow(BaseModel):
    id: int
    nombre: str
    color: str
    precio: float
    campos: str
    inicio_actividad: datetime
    fecha: datetime
    oferta: bool
    imagen: Optional[str]



class PlatoUpdate(BaseModel):
    nombre: Optional[str] = None
    color: Optional[str] = None
    precio: Optional[float] = None
    campos: Optional[str] = None
    inicio_actividad: Optional[date] = None
    imagen: Optional[str] = None