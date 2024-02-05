import styles from '../styles/AboutUs.module.css';

function AboutUs(){
    return(
        <>
        
        <div className={styles.margenesContenedor}>
        <div className={styles.iconoTitle}>
            <img width="100px" height="100px" src='../../assets/aboutus.png'></img>
            <h2 className={styles.sobreNosotrosTitle}>Sobre nosotros</h2>
        </div>
            <p className={styles.sobreNosotrosP}>Saber Digital es una iniciativa apasionada por cerrar la brecha digital y promover la inclusión digital. En el corazón de nuestro proyecto se encuentra el compromiso de empoderar a personas mayores y colectivos en situación de vulnerabilidad a través de la alfabetización digital.</p>
             
             
            <div className={styles.iconoTitle}>
            <img width="100px" height="100px" src='../../assets/historia.png'></img>
            <h3 className={styles.sobreNosotrosTitle}>Nuestra Historia</h3>
            </div>
            <p className={styles.sobreNosotrosP}>Surgimos de la convicción de que la tecnología es un puente hacia un mundo más inclusivo y enriquecedor. Nuestra historia está marcada por el deseo de facilitar el acceso a la educación digital, capacitando a quienes enfrentan desafíos para adentrarse en el vasto mundo de la tecnología.</p>
            
            <div className={styles.iconoTitle}>
            <img width="100px" height="100px" src='../../assets/mision.png'></img>
            <h3 className={styles.sobreNosotrosTitle}>Misión y Valores</h3>
            </div>
            <p className={styles.sobreNosotrosP}>Nuestra misión es clara: facilitar el aprendizaje digital de manera accesible y personalizada. Nos guían valores como la inclusión, la igualdad de oportunidades y el compromiso con el bienestar de la comunidad.</p>
            
            <div className={styles.iconoTitle}>
            <img width="100px" height="100px" src='../../assets/descarga.png'></img>
            <h3 className={styles.sobreNosotrosTitle}>Compromiso Social</h3>
            </div>
                 <p className={styles.sobreNosotrosP}>En Saber Digital, no solo enseñamos a usar la tecnología; construimos puentes hacia la independencia digital y la participación activa en la sociedad. Estamos comprometidos con la creación de un entorno digital donde cada persona, sin importar su edad o situación, pueda prosperar.

                Únete a nosotros en esta emocionante travesía hacia un futuro digital inclusivo. Juntos, estamos formando una comunidad conectada, educada y empoderada.</p>
            </div>
        </>
    )
}
export default AboutUs;