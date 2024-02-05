import { useContext, useEffect, useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import { UserContext } from "../context/userProvider";
import Swal from 'sweetalert2'
import {cajaForm, boton, container,buttonContainer,errorMsg} from './LogIn.module.css'

function LogIn () {
    useEffect(() => {
        window.scrollTo(0, 0);
      
        
      }, [])
     const[formData, setFormData]=useState({
        email:'',
        password:'',
     })
     const {setejarUser} = useContext(UserContext);
     const [isError,setIsError]=useState(null);
     const navigate = useNavigate();


     const handleSubmit = async (event)=> {
        event.preventDefault();
        const logInData= JSON.stringify(formData);
        
        
        await fetch('http://localhost:5000/login',
        {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: logInData
        }

        ).then(resp=>resp.json())
        .then(resp=>{
            if(!resp.ok){
                setIsError(resp.msg);
                return;
            }
            setIsError(null);
            localStorage.setItem('token',resp.token)
            localStorage.setItem('user', JSON.stringify(resp.user))
            setejarUser(resp.user);
            Swal.fire({
                title: "Enhorabuena!",
                text: "Has iniciado sesion correctamente!",
                icon: "success",
                
              });
            navigate('/');
        
        })
        
     }
      const handleChange= (event)=>{
        const {name, value}= event.target;
            setFormData((formData)=>({...formData, [name]:value}))
      }
      console.log(localStorage.getItem('user'));
    return(
        <>
        <div className={container}>

        <h2> Inicia sesión: </h2>
        <br /> 
        <form className={cajaForm} onSubmit={handleSubmit}> 
            <label htmlFor="email"> Correo Electrónico: </label>
                <br />
                <input type="text" placeholder="Correo Electronico" value={formData.email} name="email" onChange={handleChange} />
         <br/>
             <label htmlFor="password"> Contraseña: </label>
                <br />
                <input type="password" placeholder="Contraseña" value={formData.password} name="password"  onChange={handleChange}/>
        <br />
        {isError && <p className={errorMsg}>{isError}</p>  }
        <div className={buttonContainer}>
            <button className={boton}> Entra </button>

            </div>
        </form>
        <p>Si aun no tienes cuenta dale a <NavLink to='/register'>Registrarte</NavLink>
 </p>

        </div>

        </>
    );

}

export default LogIn;