import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "../styles/Course.module.css";

import { useContext } from "react";
import { UserContext } from "../context/userProvider";

function Course() {
  let location = useLocation();
  const { user } = useContext(UserContext);
  const [lecciones, setLecciones] = useState([]);
  let { id } = useParams();
  const [leccionActual, setLeccionActual] = useState(0);
  const [cursoActual, setCursoActual] = useState(0);
  const [titulo, setTitulo] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location);
    if (location.state == null) {
      setLecciones([]);
      fetch(`http://localhost:5000/course/${id}/lections`, {
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.lections.length < 1) throw new Error("id no existe ");
          console.log(data.lections);

          setLecciones(data.lections);
        })
        .catch((err) => console.log(err));
    } else {
      const newLecciones = [...location.state.leccionesState];
      setLecciones(newLecciones);
      setTitulo(location.state.nombreCurso);
      setCursoActual(location.state.leccionesState[0].idcurso);
    }
  }, [user, location]);

  const handleNext = () => {
    const newArr = [...lecciones];
   
    newArr[leccionActual].completada = true;
    setLecciones(newArr);
    if (leccionActual >= lecciones.length - 1) return;
    setLeccionActual((old) => old + 1);

    
  };
  const handleBefore = () => {
    if (leccionActual <= 0) return;
    setLeccionActual((old) => old - 1);
  };

  const handleSelect = (index) => {
    setLeccionActual(index);
  };

  // function finalSrc(leccion){
  //     console.log(leccion);
  //     return lecciones.contenido + `?start=${leccion.segonInici}&end=${leccion.segonFi}&version=3`;
  // }
  function mediaSelector(leccion) {
    if (leccion.tipo) {
      console.log(leccion.contenido);
      const finalSrc =
        leccion.contenido +
        `?start=${leccion.segonInici}&end=${leccion.segonFi}&version=3`;
      return (
        <iframe
          src={finalSrc}
          className={styles.mediaCursoVideo}
          allowfullscreen
        ></iframe>
      );
    } else {
      console.log(leccion.contenido);
      return (
        <img
          src={`/${leccion.contenido}`}
          alt=""
          className={styles.mediaCursoImg}
          width="400%"
        />
      );
    }
  }

  const handleToggle = (leccion, index) => {
    if (!user) return;
    console.log("toggle en db");

    const newArr = [...lecciones];

    const completed = !newArr[index].completada;
    newArr[index].completada = completed;
    setLecciones(newArr);

    fetch(
      `http://localhost:5000/updateLection/${completed ? 1 : 0}/${
        user.idStudent
      }/${leccion.idLeccion}`,
      {
        method: "get",
      }
    ).then(() => {
      let progress = 100 / lecciones.length;
      if (!completed) progress = progress - progress * 2;
      console.log(progress);
      console.log(user.idStudent);
      console.log(cursoActual);
      fetch(
        `http://localhost:5000/updateProgress/${user.idStudent}/${cursoActual}/${progress}`,
        {
          method: "get",
        }
      );
    });
    console.log(
      "toggle en leccion " +
        leccion.idLeccion +
        " para el usuario " +
        user.idStudent +
        " en el curso " +
        cursoActual
    );
  };

  return (
    <>
      <div className={styles.contentHeader}>
        <h3> {!lecciones[leccionActual] ? "Cargando" : titulo} </h3>
      </div>

      <div className={styles.courseContainer}>
        {/* <iframe width="900" height="394" src="https://www.youtube.com/embed/LpxedaKMMCk?start=235&end=240&version=3"   allowfullscreen></iframe> */}

        <div className={styles.content}>
          <div className={styles.contentBody}>
            <div className={styles.contentButtonAnterior}>
              {leccionActual > 0 && (
                <button onClick={handleBefore}> Anterior </button>
              )}
            </div>
            <div className={styles.media}>
              <div className={styles.imagenContent}>
                {lecciones[0] && mediaSelector(lecciones[leccionActual])}
              </div>
            </div>
            <div className={styles.contentButtonSiguiente}>
              {leccionActual < lecciones.length - 1 && (
                <button onClick={handleNext}> Siguiente </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles.list}>
          <h2>Tareas del curso</h2>
          <div>
            {lecciones.map((leccion, index) => (
              <li
                key={leccion.idLeccion}
                className={styles.listElem}
                onClick={() => handleSelect(index)}
              >
                {user && (
                  <input
                    type="checkbox"
                    checked={leccion.completada ? true : false}
                    onChange={() => handleToggle(leccion, index)}
                  />
                )}
                <h3>
                  {index + 1}. {leccion.titulo}
                </h3>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Course;
