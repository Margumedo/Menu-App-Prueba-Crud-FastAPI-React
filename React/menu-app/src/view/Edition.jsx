import React, { useEffect, useState } from "react";
import api from "../api";
import swal from 'sweetalert';


export default function Edition(){

    //declaro mis hooks

    const [platos, setPlatos] = useState([])
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        color: '',
        campos: '',
        inicio_actividad: '',
        imagen: ''
        
    })

    //creo mis funciones

    const fetchPlatos = async ()=>{
        const response = await api.get('/platos')
        setPlatos(response.data)
    }

    const handleInputChange = (e)=>{
        const value = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        const response = await api.post("/platos", formData)
        response.status && swal("Good job!", "Dished Created!", "success");
        fetchPlatos();
        setFormData({
            nombre: '',
            precio: '',
            color: '',
            campos: '',
            inicio_actividad: '',
            imagen: ''
        })
    }

    const handlePlatoDelete = async (id)=>{
        await api.delete(`/platos/${id}`)
        fetchPlatos();
    }

    const handleDeleteNotification = (id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this dished!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
            handlePlatoDelete(id)
            swal("Ok! Your dished has been deleted!", {
                icon: "success",
            });
            } else {
            swal("Your special dished is safe!");
            }
        });
    }

    const handleUploadImage = async (event)=>{
        const file = event.target.files[0];
        
        const data = new FormData();
        
        data.append('file',file)
        data.append('upload_preset','menuapp')

        const response = await api.post('https://api.cloudinary.com/v1_1/maicolino/image/upload', data);

        setFormData({
            ...formData,
            [event.target.name]: response.data.secure_url
        })
    }

    useEffect(()=>{
        fetchPlatos()
    },[])

    return(
        
        <div className="container mt-3">
            <h5>Registra un nuevo plato</h5>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="nombre" className="form-label mt-3">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" onChange={handleInputChange} value={formData.nombre} />

                <label htmlFor="amount" className="form-label mt-2" >Precio</label>
                <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type='text' className="form-control" aria-label="Amount" id="precio" name="precio" onChange={handleInputChange} value={formData.precio} ></input>
                </div>
                <label htmlFor="color" className="form-label mt-2">Color</label>
                <input type="text" className="form-control mt-2" id="color" name="color" onChange={handleInputChange} value={formData.color} />
                
                <label htmlFor="campos" className="form-label mt-2">Campos</label>
                <input type="text" className="form-control mt-2" id="campos" name="campos" onChange={handleInputChange} value={formData.campos}  />
                
                <label htmlFor="inicio_actividad" className="form-label mt-2">Incio de Actividad</label>
                <input type="date" className="form-control mt-2" id="inicio_actividad" name="inicio_actividad" onChange={handleInputChange} value={formData.inicio_actividad} />

                <label htmlFor="imagen" className="form-label mt-3">Imagen</label>
                <div className="input-group my-2">
                    <input type="file" className="form-control" id="imagen" name="imagen" accept="image/*" onChange={handleUploadImage}  />
                </div>

                <button className="btn btn-primary rounded-3 mt-3">Submit</button>
            </form>

            <h5 className="mt-5">Lista de platos</h5>
            <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover mt-3 mb-5 w-100" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Amount</th>
                        <th>Color</th>
                        <th>Campos</th>
                        <th>Fecha</th>
                        <th>Is_Ofert</th>
                        <th>Inicio de Actividad</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {platos.map((plato)=>(
                        <tr key={plato.id}>
                            <td>{plato.nombre}</td>
                            <td>{plato.precio}</td>
                            <td>{plato.color}</td>
                            <td>{plato.campos}</td>
                            <td>{new Date(plato.fecha).toLocaleDateString('es-VE',{year: 'numeric', month: 'long', day: 'numeric'})}</td>
                            <td className={plato.oferta?'table-success':'table-danger'} >{plato.oferta ? 'Yes' : 'No' }</td>
                            <td>{new Date(plato.inicio_actividad).toLocaleDateString('es-VE', {year:'numeric', month:'long', day:'numeric'})}</td>
                            <td className="d-flex justify-content-evenly">
                                <button className="btn btn-primary rounded-3"  >Edit</button>
                                <button className="btn btn-danger rounded-3" onClick={()=>handleDeleteNotification(plato.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

