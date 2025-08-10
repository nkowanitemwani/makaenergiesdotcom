import React from "react";
import styles from "./navbar.module.css"
import Link from "next/link";
import Button from "../button/page";

export default function HomeNav ({...props}){
    return(
      <header {...props}>
        <nav className={styles.navbar}>
            <div className={styles.navbarLinks}>
              <Link href="../" className={styles.navbarLinksTitle}>Maka Engergies</Link>
            </div>
            <div className={styles.navbarLinks}>
                <Link href="../pages/about">About</Link>
                <Link href="../pages/services">Services</Link>
                <Link href="../pages/contact">Contact</Link>
                <Link href="../pages/team">Our Team</Link>
                <Link href="../pages/careers">Careers</Link>
            </div>
            <div className={styles.navRight}>
            <Button href="#" style={{padding : "5px 50px"}}>Get A Quote</Button>
            </div>
          </nav>
      </header>
    );
}