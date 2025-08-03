import React from "react";
import styles from "./footer.module.css";

export default function Footer(){
  return(
      <footer>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoLeft}> 
           <div className={styles.footerInfoImage}>
            </div>
            <div className={styles.footerInfoLeftText}>
             <h1>Maka Engergies</h1>
             <p>Powering Zambia With Reliable Engergy Solutions</p>      
            </div>
           </div>
          <div className={styles.footerInfoCenter}>
            <h3>Navigation</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>    
            </ul>
           </div>
          <div className={styles.footerInfoRight}>
            <h3>Get In Touch</h3>
            <ul>
              <li>jengosoftware@gmail.com</li>
              <li>+260 964 615 456</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p className={styles.footerText}>© 2025 Maka Engergies Ltd. All rights reserved</p>
      </footer>
  );
}