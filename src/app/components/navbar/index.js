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
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/team">Our Team</Link>
                    </div>
                    
                    {/* Desktop/Tablet Get Quote Button */}
                    <div className={styles.navRight}>
                        <Button href="/contact#quote" style={{padding : "5px 50px"}}>
                            Get A Quote
                        </Button>
                    </div>
                    
                    {/* Mobile Hamburger Menu Button */}
                    <button 
                        className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.open : ''}`} 
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
            
            {/* Mobile Menu Dropdown */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
                <Link href="/about" onClick={closeMobileMenu}>About</Link>
                <Link href="/services" onClick={closeMobileMenu}>Services</Link>
                <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
                <Link href="/team" onClick={closeMobileMenu}>Our Team</Link>
                {/* <Link href="/careers" onClick={closeMobileMenu}>Careers</Link> */}
                <div style={{marginTop: '1rem'}}>
                    <Button 
                        href="/contact#quote" 
                        style={{padding : "10px 40px"}}
                        onClick={closeMobileMenu}
                    >
                        Get A Quote
                    </Button>
                </div>
            </div>
            
            {/* Backdrop overlay */}
            {mobileMenuOpen && (
                <div className={styles.backdrop} onClick={closeMobileMenu}></div>
            )}
        </>
    );
}