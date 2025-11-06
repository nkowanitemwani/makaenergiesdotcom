"use client";
import React, { useEffect } from "react";
import styles from "./policycard.module.css";
import { X } from "lucide-react";

export default function PolicyCard({ onClose }){
    
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return(
        <div 
            className={styles.overlay} 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="policy-title"
        >
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close policy dialog"
                >
                    <X size={20} />
                </button>
                
                <h1 id="policy-title">Company Policies</h1>
                
                <section>
                    <h2>Health And Safety Policy</h2>
                    <p>
                        Ensures workers are safe and healthy at all times, and that services 
                        delivered are not hazardous to clients or the company.
                    </p>
                </section>
                
                <section>
                    <h2>Environmental Policy</h2>
                    <p>
                        Ensures compliance with national environmental policies formulated by 
                        ZEMA, delivering safe products and services to clients.
                    </p>   
                </section>
                
                <section>
                    <h2>Security Policy</h2>
                    <p>Ensures worker interests are protected at all times.</p>   
                </section>
            </div>
        </div>
    );
}