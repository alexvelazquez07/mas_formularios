import React, {useState} from 'react'

const FormUseState = () => {

const [getNombre, setNombre]  = useState("");
const [getApellido, setApellido]  = useState("");
const [getEmail, setEmail]  = useState("");
const [getPassword, setPassword]  = useState("");
const [getConfirmPass, setConfirmPass]  = useState("");

const crearUsuario = (evento) => {
    evento.preventDefault();
    console.log(evento);
}
 
return (
<>
    <form onSubmit={crearUsuario}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
            <input onChange={(evento) => setNombre(evento.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            {(getNombre.length < 2  && getNombre !== "") ? <p className='text-danger'>Nombre no puede tener menos de 2 caractares</p> : null }
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
            <input onChange={(evento) => setApellido(evento.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            {(getApellido.length < 2  && getApellido !== "") ? <p className='text-danger'>Apellido no puede tener menos de 2 caractares</p> : null }
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={(evento) => setEmail(evento.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            {(getEmail.length < 5  && getEmail !== "") ? <p className='text-danger'>Email no puede tener menos de 5 caractares</p> : null }
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={(evento) => setPassword(evento.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
            {(getPassword.length < 8  && getPassword !== "") ? <p className='text-danger'>Password debe tener por lo menos 8 caractares</p> : null }
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirmar Password</label>
            <input  onChange={(evento) => setConfirmPass(evento.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div>
        <p>Nombre: {getNombre} </p>
        <p>Apellido: {getApellido} </p>
        <p>Email: {getEmail} </p>
        <p>Password: {getPassword} </p>
        <p>Confirm Password: {getConfirmPass} </p>
    </div>
</>
)
}

export default FormUseState