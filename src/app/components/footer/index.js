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
             <Link href="./" ><h1>Maka Energies</h1></Link>
             <p>Powering Zambia With Reliable Engergy Solutions</p>      
            </div>
           </div>
          <div className={styles.footerInfoCenter}>
            <h3>Navigation</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>    
            </ul>
           </div>
          <div className={styles.footerInfoRight}>
            <h3>Contact Info</h3>
            <ul>
              <li>+260 966 787 930 </li>
              <li>+260 955 432 663</li>
              <li>+269 955 881 931</li>
              <li>omicronelectricals@gmail.com</li>
              <li>Plot No. 68 Umulu Kalulushi-District</li>
            </ul>
          </div>
        </div>
        <div className={styles.termsPolicies}>
          <span><Link href="/terms">Terms Of Use</Link>{"|"}<Link href="/policies">Privacy Policy</Link></span>
        </div>
        <hr></hr>
        <p className={styles.footerText}>© 2025 Maka Energies Ltd. All rights reserved</p>
      </footer>
  );
}