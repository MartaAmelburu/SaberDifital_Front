// import Cursos from '../components/Cursos';
// import Slider from '/assets/home-img.png';
import styles from '../styles/Home.module.css';
import AyudaBarra from '../components/AyudaBarra';
import {NavLink} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { UserContext } from "../context/userProvider";


//import Header from "../components/Header";

function Home () {
 const {user}=useContext(UserContext);    
    useEffect(() => {
      window.scrollTo(0, 0);
    
      
    }, [])


    
   return(
       <>
      <div className={styles.slider}> 
      
        <div className={styles.textoHome}>
        <h1 className={styles.tituloHome}>Saber Digital</h1>
        <p className={styles.parrafoHome}>En Saber Digital creemos en la igualdad de oportunidades para todas las personas, es por eso que queremos acercar la educación sobre el uso de tecnologías a todo el mundo, ofreciendo recursos y tutoriales para conseguir romper la brecha digital.</p>
        
        </div>
        <NavLink to = '/aboutus'>
        <button className={styles.botonHome}>Más información </button></NavLink>
        <img src="/assets/home-img.png" className={styles.hiddenImg} />
      </div>
       
        
        {/* <img className={styles.slider} src={Slider} alt="Fotografía de una señora alegre utilizando un móvil y un ordenador"/>  */}
        
        <h2 className={styles.titulosh2}>Nos Adapatamos a ti</h2>

        <div className={styles.bloquesNosAdaptamos}>
          <div className={styles.bloqueNosAdaptamos}>
            <img width="100px" height="100px"src="/assets/descarga.png" />
            <h3 className={styles.bloqueNosAdaptamos1}> <b>Clases en línea</b> - Para que le dediques el tiempo que quieras cuando quieras.</h3>
          </div>
          
          <div className={styles.bloqueNosAdaptamos}>
            <img width="100px" height="100px"src="/assets/education.png"/>
            <h3 className={styles.bloqueNosAdaptamos2}><b>Diversidad en el aprendizaje</b> - Traemos nuevos conocimientos a Saber Digital constantemente.</h3>
          </div>
          <div className={styles.bloqueNosAdaptamos}>
            <img width="100px" height="100px"src="/assets/free.png"/>
            <h3 className={styles.bloqueNosAdaptamos3}><b>Cursos gratuitos</b> - Porque creemos que el conocimiento debe estar al alcance de todo el mundo.</h3>
          </div>
        </div>
        
      <div className={styles.fondo}>
      <h2  className={styles.titulosh2}>PARA EMPEZAR </h2>
      <div className={styles.nuestrosCursos}>

      <div className={styles.divsVideos}>

      
      <img className={styles.videosCursos} width = "300px" height="200px"src='../../assets/registerFoto.jpg'></img>
      
      

      <NavLink className={styles.colorEnlaces} to={"/coursePreview/1"}>Curso para aprender a registrarse</NavLink>
      </div>  

      <div className={styles.divsVideos}>

      
      <img className={styles.videosCursos} width = "300px" height="200px"src='../../assets/loginFoto.jpg'></img>
      
      

      <NavLink className={styles.colorEnlaces} to={"/coursePreview/2"}>Curso para aprender a Iniciar sesión</NavLink>
      </div>

      <div className={styles.divsVideos}>
        
      <img className={styles.videosCursos} width = "300px" height="200px"src='../../assets/logoutFoto.jpg'></img>
      <NavLink className={styles.colorEnlaces} to={"/coursePreview/3"}>Curso para aprender a Cerrar sesión</NavLink> 
      </div>

      </div>
      <NavLink to={'/courses'}>
        
      <button  className={styles.botonVerCursos}>
        Ver todos los cursos
      </button>
      </NavLink>
      </div>

       
       {user &&<AyudaBarra/>}
       
       </>
   );

}

export default Home;