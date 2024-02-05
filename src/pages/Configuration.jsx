import react from 'react';
import styles from '../styles/Configuracion.module.css';


function Configuration(){

    return(
        <>
            <h2 className={styles.titulosh2}>Configuración</h2>
            <h3 className={styles.titulosh3}>Tamaño del texto:</h3>
            <p className={styles.parrafosConfig}>Para seleccionar el tamaño de texto de la página web haz click en los circulos que aparecen debajo de los ejemplos o en el mismo ejemplo:</p>
            <div className={styles.separarBotones}>
                <div className={styles.separarInputs}>
                <label htmlFor='Boton1' className={`${styles.botonesConfig} ${styles.textoEjemplo1}`}>Texto de ejemplo 1</label>
                <input id='Boton1' className={styles.inputTamaño} type="radio" name='texto'/> 
                </div>
               
                <div className={styles.separarInputs}>
                <label htmlFor='Boton2' className={`${styles.botonesConfig} ${styles.textoEjemplo2}`}>Texto de ejemplo 2</label>
                <input id='Boton2' className={styles.inputTamaño} type="radio" name='texto'/> 
                </div> 
                <div className={styles.separarInputs}>
                <label htmlFor='Boton3'className={`${styles.botonesConfig} ${styles.textoEjemplo3}`}>Texto de ejemplo 3</label>
                <input id='Boton3'className={styles.inputTamaño} type="radio" name='texto'/> 
                </div>
            </div>
            <h3 className={styles.titulosh3}>Tema:</h3>
            <p className={styles.parrafosConfig}>Para seleccionar el tema de la página web haz click en los siguientes botones:</p>
            
            <div className={styles.separarBotonesTema}>
                <div className={styles.separarInputs}>
                    <label htmlFor='temaClaro' className={`${styles.botonesTemas} ${styles.temaClaro}`}>Tema claro</label>
                    <input id='temaClaro' className={styles.inputTamaño} type="radio" name='tema'/> 
                </div>

                <div className={styles.separarInputs}>
                    <label htmlFor='temaOscuro' className={`${styles.botonesTemas} ${styles.temaOscuro}`}>Tema oscuro</label>
                    <input id='temaOscuro' className={styles.inputTamaño} type="radio" name='tema'/> 
                </div>
            </div>


            <div>
                <button className={styles.botonGuardar}>Guardar cambios</button>
                <button className={styles.botonReestablecer}>Reestablecer página</button>
            </div>
            
        </>
    )
}
export default Configuration;