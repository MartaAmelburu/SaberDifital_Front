import { useContext, useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { UserContext } from "../context/userProvider";
import{cursProg, foto,botoiProgres, contDeCont,container, caixaInfoUser,boton, blockProg,infoUser} from './Profile.module.css'
import { useNavigate} from 'react-router-dom';
function Profile(){
    
    const {user}=useContext(UserContext);
     const [progress,setProgress]=useState([])

     const navigate=useNavigate();
    useEffect(()=>{
        window.scrollTo(0, 0);
        const userId=user.idStudent;
        // console.log(user);
        const baseUrl=`http://localhost:5000/progress/${userId}`;
        fetch(baseUrl, {
            method: 'GET'
        })
        .then(resp=>resp.json())
        .then(data=> {
            setProgress(data.themes)
        })
        .catch(error => console.log(error))
    },[]);
    // const avatar=`/${user.avatar}`
 
    console.log(progress);
    const goTo = (path) => {
        console.log(path);
        navigate(path);
        navigate(0);
    }

    return(
        <>

            <div className={contDeCont}>

            <div className={caixaInfoUser}>
                
                <img className={foto} src={'/avatarUno.jpg'} alt="Imagen de perfil" width={224} height={224}/>
                <div className={infoUser}>
                <h2>Hola {user.name}, {user.surname} <br /> </h2>
                <br />
                {/* <h3> DESDE SABER DIGITAL CELEBRAMOS TU PROGRESO Y DEDICACIÓN Y SABEMOS EL IMPACTO QUE TIENE QUE LO VEAS </h3> */}
                <h3> Desde SABER DIGITAL celebramos tu progreso y dedicación 🎉  </h3>
                
                {/* 🎉 */}
                </div>
            </div>
           
            <div className={container}>
            <h2>Aprendizajes en curso</h2>
            
            <div className={blockProg}>

            {progress.map(prog=> 
            <>
                <div className={botoiProgres}>
                <div className={cursProg} key={prog.course_idcorse}>
                <h4>{prog.nameCourse}  </h4>
                
                <ProgressBar style={{ '--bs-success-rgb':'126,79,154' }} variant='success' now={prog.progress} label={`${ Math.round(prog.progress)}%`}/>
                </div>
                <button 
                onClick={()=>{ goTo(`/coursePreview/${prog.course_idcourse}`)}}
                className={boton} >Acceder al Curso</button>
                

                </div>
            </>
            )}
            </div>
            </div>
            <br />
            </div>
           
        </>
    )
}
export default Profile;