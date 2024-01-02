import React,{useState, useEffect} from "react";
import api from '../api.js'
import { Link } from "react-router-dom";


export default function Menu(){


    //declaro mis Hooks

    const [platos, setPlatos] = useState([])


    //declaro mis funciones

    const fetchPlatos = async ()=>{
        const response = await api.get('/platos')
        setPlatos(response.data)
    }

    useEffect(()=>{
        fetchPlatos();
    },[])

    return(


            <div className="container d-flex vh-100 ">
                <div className="row mt-3">
                        {platos.map((plato)=>{
                            return(
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 " key={plato.id}>
                                <div className="card products-cards__item__link" >
                                    <div className="container p-0 overflow-hidden ">
                                        <img
                                        className="card-img-top products-cards__item__img  "
                                        src={plato.imagen}
                                        alt={plato.nombre}
                                        />
                                    </div>

                                    <div className="card-body cards__item__text">
                                        <h5 className="card-title"> {plato.nombre}</h5>
                                        <h5 className="card-text"> Precio: {plato.precio}$</h5>
                                    </div>

                                    <div className="d-flex justify-content-between p-2">
                                        <Link to='' className="btn btn-success mt-2 rounded-3 ">
                                            To order <i className="far fa-credit-card ms-2"></i>
                                        </Link>
                                        <button  type="button" className="btn btn-outline-warning mt-2"><i className="fa-solid fa-heart"></i></button>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
    );

}