import { useEffect, useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import {cajaForm, boton, container,buttonContainer} from './Register.module.css'
import Swal from "sweetalert2";


function Register () {
    useEffect(() => {
        window.scrollTo(0, 0);
      
        
      }, [])
     const[formData, setFormData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''

     })
     const navigate = useNavigate();

     const handleSubmit = async (event)=> {
        event.preventDefault();
        const newUserData= JSON.stringify(formData);
        await fetch('http://localhost:5000/user',
        {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: newUserData
        }

        ).then(() =>{
            Swal.fire({
                title: "Bienvenid@ al equipo!",
                text: "Ya puedes iniciar sesión!",
                icon: "success",
              });
            navigate('/login')}
        )
     }
      const handleChange= (event)=>{
        const {name, value}= event.target;
            setFormData((formData)=>({...formData, [name]:value}))
      }
     
    return(
        <div className={container}>
        <h2>Registrate:</h2>
        <form className={cajaForm} onSubmit={handleSubmit}>
            <label htmlFor="name"> Nombre </label>
            <br />
                <input type="text" placeholder="Nombre" value={formData.name} name="name" onChange={handleChange}/>
            <br/>
            <label htmlFor="email"> Correo Electronico </label>
                <br />
                <input type="text" placeholder="Correo Electronico" value={formData.email} name="email" onChange={handleChange} />
         <br/>
             <label htmlFor="password"> Contraseña </label>
                <br />
                <input type="password" placeholder="Contraseña" value={formData.password} name="password"  onChange={handleChange}/>
         <br/>
            <label htmlFor="confirmPassword"> Repite la contraseña </label>
                <br />
                <input type="password" placeholder="Contraseña" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
            <br/>
            <div className={buttonContainer}>
            <button className={boton}> Registrarse </button>

            </div>
        </form>
        <p>Si ya tienes una cuenta dale a <NavLink to='/login'>Iniciar Sesión</NavLink> </p>
        </div>
    );

}

export default Register;