"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css"
import Link from "next/link";
import Button from "../button";

export default function HomeNav ({...props}){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return(
        <>
            <header {...props}>
                <nav className={styles.navbar}>
                    <div className={styles.navbarLinks}>
                        <Link href="../" className={styles.navbarLinksTitle}>Maka Energies</Link>
                    </div>
                    
                    {/* Desktop/Tablet Navigation Links */}
                    <div className={styles.navbarLinks}>
                        <Link href="../pages/about">About</Link>
                        <Link href="../pages/services">Services</Link>
                        <Link href="../pages/contact">Contact</Link>
                        <Link href="../pages/team">Our Team</Link>
                        <Link href="../pages/careers">Careers</Link>
                    </div>
                    
                    {/* Desktop/Tablet Get Quote Button */}
                    <div className={styles.navRight}>
                        <Button href="../pages/contact#quote" style={{padding : "5px 50px"}}>
                            Get A Quote
                        </Button>
                    </div>
                    
                    {/* Mobile Hamburger Menu Button */}
                    <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
                <button className={styles.closeButton} onClick={closeMobileMenu}>
                    &times;
                </button>
                <Link href="../pages/about" onClick={closeMobileMenu}>About</Link>
                <Link href="../pages/services" onClick={closeMobileMenu}>Services</Link>
                <Link href="../pages/contact" onClick={closeMobileMenu}>Contact</Link>
                <Link href="../pages/team" onClick={closeMobileMenu}>Our Team</Link>
                <Link href="../pages/careers" onClick={closeMobileMenu}>Careers</Link>
                <div style={{marginTop: '1rem'}}>
                    <Button 
                        href="../pages/contact#quote" 
                        style={{padding : "10px 40px"}}
                        onClick={closeMobileMenu}
                    >
                        Get A Quote
                    </Button>
                </div>
            </div>
        </>
    );
}