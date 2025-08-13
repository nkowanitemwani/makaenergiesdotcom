import React from "react";
import styles from "./navbar.module.css"
import Link from "next/link";
import Button from "../button";

export default function HomeNav ({...props}){
    return(
      <header {...props}>
        <nav className={styles.navbar}>
            <div className={styles.navbarLinks}>
              <Link href="./" className={styles.navbarLinksTitle}>Maka Engergies</Link>
            </div>
            <div className={styles.navbarLinks}>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/team">Our Team</Link>
                <Link href="/careers">Careers</Link>
            </div>
            <div className={styles.navRight}>
            <Button href="/contact#quote" style={{padding : "5px 50px"}}>Get A Quote</Button>
            </div>
          </nav>
      </header>
    );
}