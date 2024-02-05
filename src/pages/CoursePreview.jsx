import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/CoursePreview.module.css'
// import placeholder from '/assets/image-placeholder-500x500.jpg'

import { useContext } from "react";
import { UserContext } from "../context/userProvider";

function CoursePreview(){
    const [curso, setCurso] = useState({})
    const [lecciones, setLecciones] = useState([])
    let { id } = useParams();

    const {user}=useContext(UserContext);   

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurso({});
        setLecciones([])
        fetch(`http://localhost:5000/course/${id}`,{
                method: 'GET'
            })
                .then(resp=>resp.json())
                .then(data=> {
                    if ( data.courses.length < 1 ) throw new Error( 'id no existe en course ')
                    console.log(data.courses[0]);
                    setCurso(data.courses[0])

                })
                .catch(err => console.log(err))
            
           
        fetch(`http://localhost:5000/course/${id}/lections`,{
            method: 'GET'
            })
            .then(resp=>resp.json())
            .then(data=> {
                if ( data.lections.length < 1 ) throw new Error( 'id no existe en lections ')
                console.log(data.lections);
                data.lections.map((leccion)=> {
                    fetch(`http://localhost:5000/completada/${user.idStudent}/${leccion.idLeccion}`,{
                        method: 'GET'
                    }).then(resp => resp.json())
                    .then(data => {
                       if (data.lections.length > 0) leccion.completada =data.lections[0].completada
                    })
                })
                
                setLecciones(data.lections)

            })
            .catch(err => console.log(err))
    }, [])
    
    const handleStart = () =>  {
        if(!user) return;
        const idUser = user.idStudent;
        const idCurso = curso.idcourse;
        fetch(`http://localhost:5000/subscribeCourse/${idUser}/${idCurso}`,{
            method: 'GET'
    }).then(
        fetch(`http://localhost:5000/subscribeLections/${idUser}/${idCurso}`,{
            method: 'GET'
    })
    )
}

    return (
    <>
    <div className={styles.container}>

    <div className={styles.imagenDiv}>
        <img width={'500'}  src={'/assets/'+ curso.media} alt="" />
    </div>
    <div className={styles.contenido}>
        
    <h2> { curso.nameCourse } </h2>
    <h3>¿Qué veremos?</h3>
    <p> { curso.descripcio }</p>
    <h3>Índice:</h3>
    <ol>
            {
                lecciones.map((leccion) => <li key={leccion.idLeccion}>{leccion.titulo}</li>)
            }
    </ol>
    <div className={styles.buttonDiv}>
        <Link to={`/course/${id}`} state={{leccionesState: lecciones, nombreCurso: curso.nameCourse}} >
            <button onClick={handleStart}>
                ¡Empecemos!
            </button>
        </Link>
    </div>
    </div>
            </div>
    </>

    )
}
export default CoursePreview;