from fastapi import FastAPI, HTTPException, Depends
from database import Base, engine, get_db
from sqlalchemy.orm import Session
from schemas import PlatoBase, PlatoShow, PlatoUpdate
from typing import List
from models import Plato
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI(
    docs_url="/",
    title="FastAPI CRUD",
    description="Prueba de ubisotf, donde solitan poder obtener, crear, modificar y eliminar un plato del menú",
    version="1.0.0",
    openapi_tags=[{'name':'Platos', 'description': 'Platos routes'}]
    )

origins = [
    "http://localhost:3000",
    "https://bpth7fr5-3000.use2.devtunnels.ms/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers=["*"]
)

Base.metadata.create_all(bind=engine)

@app.get("/hello")
async def hello():
    return {"Message":"Welcome to your fucking fastAPI working"}

@app.get("/platos", response_model=List[PlatoShow], status_code=200, tags=['Platos'])
async def get_platos(db: Session = Depends(get_db), skip: int =0, limit: int =100):
    platos = db.query(Plato).offset(skip).limit(limit).all()
    return platos

@app.post('/platos', response_model=PlatoShow, status_code=201, tags=['Platos'])
async def create_plato(plato: PlatoBase, db: Session = Depends(get_db)):
    find_plato = db.query(Plato).filter(Plato.nombre == plato.nombre).first()
    if find_plato:
        raise HTTPException(status_code=400, detail="Nombre del plato ya esta en uso")
    
    new_plato = Plato(**plato.model_dump())
    new_plato.oferta = plato.inicio_actividad <= datetime.utcnow().date()
    db.add(new_plato)
    db.commit()
    db.refresh(new_plato)

    return new_plato

@app.patch('/platos/{plato_id}', response_model=PlatoShow, status_code=202, tags=['Platos'])
async def update_plato(plato_id: int, plato: PlatoUpdate, db: Session = Depends(get_db)):
    db_plato = db.query(Plato).filter(Plato.id == plato_id)
    result = db_plato.first()
    if not result: 
        raise HTTPException(status_code=404, detail="Plato not found")
    
    print(plato.model_dump(exclude_unset=True))
    db_plato.update(plato.model_dump(exclude_unset=True))
    db.commit()
    db.refresh(result)

    return result

@app.put('/platos/{plato_id}', response_model=PlatoShow, status_code=202, tags=['Platos'])
async def update_plato(plato_id: int, plato: PlatoUpdate, db: Session = Depends(get_db)):
    find_plato = db.query(Plato).filter_by(id = plato_id)
    result = find_plato.first()
    if not result:
        raise HTTPException(status_code=404, detail="Plato not found")
    
    find_plato.update(plato.model_dump())
    db.commit()
    db.refresh(result)

    return result

@app.delete('/platos/{plato_id}', status_code=204, tags=['Platos'])
async def delete_plato(plato_id: int, db: Session = Depends(get_db)):
    find_plato = db.query(Plato).filter_by(id = plato_id).first()
    if not find_plato:
        raise HTTPException(status_code=404, detail="Plato not found")
    
    db.delete(find_plato)
    db.commit()

    return None