import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
// import { UserContext } from "../context/userProvider";
import { useNavigate} from 'react-router-dom'
import styles from './Cursos.module.css'


function Cursos () {

     const [courseList, setCourseList]=useState([]);
     const [cursosTematica, setCursosTematica] = useState({});
     
        const navigate = useNavigate();
        
        useEffect(()=>{
            fetch('http://localhost:5000/themes',{
                method: 'GET'
            })
                .then(resp=>resp.json())
                .then(data=> {

                    const {themes}=data;
                    const temas = {};
                    themes.forEach(({tituloTema}) => {
                        
                        temas[tituloTema] = []
                        // setCursosTematica((old) => ({...old,tema:[]}));
                        // setCursosTematica((old)=>({...old, [tema]:[]}));
                        fetch('http://localhost:5000/course',{
                               method:'GET',
                        })
                           .then(resp=>resp.json())
                           .then(data => {
                               const {courses} = data;
                               setCourseList([...courses]);
                               console.log(courseList);
                                courses.forEach(course=>{
                                    if(course.tituloTema==tituloTema){
                                        temas[tituloTema].push(course);
                                        //console.log(temas);
                                    }
                                   
                                })
                                setCursosTematica(temas);
                                
                           })            
                           .catch(err=> console.log(err.message));
                    });
                
                })
                .catch(err=> console.log(err.message));
        },[])
        //console.log(Object.keys(cursosTematica).length);
        console.log(cursosTematica);
        
        const goTo = (path) => {
            navigate(path);
            
        }

        function imprimir(tema){
            for(let i=0; i<Object.keys(cursosTematica).length; i++){
                //console.log(Object.getOwnPropertyNames(cursosTematica)[i]);
                const a=Object.getOwnPropertyNames(cursosTematica)[i];// a es tema
                if(a==tema){
                    const cursosenposi=Object.values(cursosTematica)[i];//array cursos que cumplen el tema a
                    //const objeto = courseList.find((course) => (JSON.stringify(course)=== JSON.stringify(cursosenposi[0])))
                   //if(objeto.tituloTema!== undefined) { console.log(objeto.tituloTema)}
                    return ( 
                        <div className={styles.categoria}>
                        <h2>{tema}</h2>
                        <br/>
                        <div className={styles.cajas} >
                        {cursosenposi.map(course => 
                            <>
                                <Card  key={course.idcourse} className={styles.card}>
                                    <Card.Img variant="top" width = "300px" height="200px" src={'/assets/'+ course.media}/>
                                    
                                    <Card.Body>
                                    <Card.Title style={{textDecoration: 'underline'}}>{course.nameCourse} </Card.Title> 
                                    <Card.Text> <p>{course.descripcio}</p> </Card.Text>

                                    </Card.Body>
                                    <Card.Footer className={styles.cardFooter}>
                                    <button onClick={ () => goTo(`/coursePreview/${course.idcourse}`)}>Ir al curso</button>

                                    </Card.Footer>
                                </Card>
                                
                            
                            </>
                            )}
                            </div>
                        </div>
                        )
                }
            }
        
        }
        
    


    return(
        <>
        
        <h2 className={styles.titulo}>Nuestros cursos</h2>

        <br />
        
       
            
            {Object.keys(cursosTematica).map(tema=>
            <>
                {imprimir(tema)}
            </>
            )}
        
        </>
    );

}

export default Cursos;