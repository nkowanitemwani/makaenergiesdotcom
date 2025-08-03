import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

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
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Our Team</Link></li>
              <li><Link href="#">Careers</Link></li>    
            </ul>
           </div>
          <div className={styles.footerInfoRight}>
            <h3>Contact Info</h3>
            <ul>
              <li>omicronelectricals</li>
              <li>+260 966 787 930 </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p className={styles.footerText}>© 2025 Maka Engergies Ltd. All rights reserved</p>
      </footer>
  );
}