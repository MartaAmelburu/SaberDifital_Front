import DatalistInput from 'react-datalist-input';
// import 'react-datalist-input/dist/styles.css';
import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import '../styles/searchbar.css'
import {ReactSVG} from 'react-svg'
import { useContext } from "react";
import { UserContext } from "../context/userProvider";
import Swal from 'sweetalert2';

// import Logo from './assets/logotipo.svg';
function Header () {
 const {user, setejarUser}=useContext(UserContext);    
    const navigate = useNavigate();
 
    useEffect(() => {
        
        
      
    }, [setejarUser])
    
   
    

    const [ suggestions, setSuggestions ] = useState( [] )
    const getSuggestions = ( event ) => {
        const query = event.target.value

        if( query.trim().length == 0 ) {
            setSuggestions( [] );
            return;
        }
            fetch( `http://localhost:5000/suggestions`,
            {
                headers: {'query':`${query}`},
            }
    )
    .then(resp=>resp.json())
    .then(data =>{
        const suggestionsList = [];
        data.courses.forEach( course => {
        suggestionsList.push( {id:`${course.idcourse}`,value:`${course.nameCourse}`} ) 
            setSuggestions( suggestionsList )
    });
    } )
    .catch(err=> console.log(err));
    }

    const goTo = (path) => {
        navigate(path);
        navigate(0);
    }

    const logout = () => {
        localStorage.removeItem('user')
        setejarUser(null);
        Swal.fire({
            title: "Hasta la próxima!",
            text: "Sesión cerrada correctamente!",
            icon: "success",
            
          });
        console.log(user);
    }

    return(
        <>
        <div className={styles.navDiv}>
        <nav className={styles.disp}>
            <NavLink to='/'>
            <ReactSVG src="/logo.svg"/>
            </NavLink>
        <div className={styles.disp}>

        <div className={styles.buscador}>
            <div className={styles.buscadorIcono}>
                <ReactSVG src="/assets/buscarIcon.svg"/>
            </div>
         <DatalistInput 
            placeholder= " Buscar..." 
            onSelect={( item ) => goTo(`/coursePreview/${item.id}`)}
            onInput={getSuggestions}
            items={suggestions}
            /></div>

            <NavLink className={styles.linkBotonesHeader}  to='/courses'> 
            
                <button className={styles.botonesHeader}>            
                    <ReactSVG className={styles.enlaces} src="/assets/pcIcon.svg"/>
                    Cursos 
                </button>
            
            </NavLink > 

            {user? 
            <>
              <NavLink className={styles.linkBotonesHeader} to='/user'>
                  <button className={styles.botonesHeader}> <ReactSVG src="/assets/userIcon.svg"/> Alumno </button>
              </NavLink>  
            
              <NavLink className={styles.linkBotonesHeader} to='/configuracion'>
              <button className={styles.botonesHeader}> <ReactSVG src="/assets/configIcon.svg"/>Configuración </button>
              </NavLink>
              <NavLink className={styles.linkBotonesHeader} to='/'> <button className={styles.botonesHeader} onClick={logout}> <ReactSVG src="/assets/Out.svg"/>Cerrar sesión </button>
              </NavLink>
            </>
            
            :
            <>    
             <NavLink className={styles.linkBotonesHeader} to='/login'>
                  <button className={styles.botonesHeader}> <ReactSVG src="/assets/Enter.svg"/>Iniciar sesión</button>
              </NavLink> 
              <NavLink className={styles.linkBotonesHeader} to='/register'>
                 <button className={styles.botonesHeader}> <ReactSVG src="/assets/registro.svg"/>Registrarse</button>
              </NavLink> 
            </>
        

               
            }
            
            </div>
        </nav>
        </div>
        </>
    );
 
 }
 
 export default Header;