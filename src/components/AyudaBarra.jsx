import React from 'react';
import styles from '../styles/StickyAyuda.module.css';
const AyudaBarra = () => {
    return (
        <div className={styles.ayudaBarra}>
          <p>¿Necesitas ayuda? Llámanos al <b>933-443-356</b> o introduce tu número de teléfono a continuación:</p>
          <div className={styles.alinear}><input className={styles.ayudaBarraPlaceholder} type="text" placeholder="Ingresa tu número de telefono"/>
          <button className={styles.ayudaBarraBoton}>¡Te llamamos!</button>
          </div>
        </div>
      );

}

export default AyudaBarra;