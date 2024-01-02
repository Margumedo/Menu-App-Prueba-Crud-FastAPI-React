from sqlalchemy import Column, Integer, Float, Numeric, String, Boolean, DateTime
from datetime import datetime
from database import Base




class Plato(Base): 
    __tablename__ = "platos"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    nombre = Column(String(80), unique=True, nullable=False, index=True)
    color = Column(String(50),nullable=False)
    precio = Column(Numeric(10,2), nullable=False)
    campos = Column(String(80))
    fecha = Column(DateTime, default=datetime.utcnow)
    inicio_actividad = Column(DateTime)
    oferta = Column(Boolean, default=False, index=True)
    imagen = Column(String(150), nullable=False)


    