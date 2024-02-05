import React from 'react';
import styles from '../styles/footer.module.css';
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import {ReactSVG} from 'react-svg'
const iconStyle = { fontSize: '25px' };
const Footer = () => {
    return (
      
      
      
    <div className={styles.footer}>
      <div>
      <ReactSVG src="/logo.svg"/>
      <h4 className={styles.titleLogo}>Saber Digital</h4>
      <p> Reduciendo la desigualdad digital </p>
      </div>
       <ul> 
       <div>
      <h4>Redes sociales</h4>
      <hr />
      <ul>
        <li className={styles.rss}>
          
            <FaFacebook style={iconStyle} /> FaceBook
          
        </li>

        <li className={styles.rss}>
    
            <RiInstagramFill style={iconStyle} /> Instagram
          
        </li>
        <li className={styles.rss}>
          
            <FaSquareXTwitter style={iconStyle} /> X
         
        </li>
        <li>
          
            <IoLogoYoutube style={iconStyle} /> Youtube
          
        </li>
      </ul>
    </div>
        </ul>
        <ul>
        <h4>Más información</h4>
        <hr/>
        <li>Sobre Nosotros</li>
        <li>Contacto</li>
        <li>Aviso legal</li>
        <li>Privacidad</li> 
        
        </ul>
        
        </div>
      );
     
}
export default Footer;