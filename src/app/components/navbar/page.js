import React from "react";
import styles from "./navbar.module.css"
import Link from "next/link";
import Button from "../button/page";

export default function HomeNav (){
    return(
      <header>
        <nav className={styles.navbar}>
            <div className={styles.navbarLinks}>
              <Link href="#" className={styles.navbarLinksTitle}>Maka Engergies</Link>
            </div>
            <div className={styles.navbarLinks}>
                <Link href="./">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Contact</Link>
            </div>
            <div className={styles.themeSwitch}></div>
            <div className={styles.navRight}>
            <Button href="../pages/login" style={{fontSize : '16px',fontWeight : '400',padding : '5px 5px'}}>Get A Quote</Button>
            </div>
          </nav>
      </header>
    );
}