"use client";
import React, { useEffect } from "react";
import styles from "./policycard.module.css"
import Button from "../../button";
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
            <div className={styles.main} onClick={(e) => e.stopPropagation()}>
                <div className={styles.container}>
                    {/* Close button */}
                    <button 
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Close policy dialog"
                    >
                        <X size={18} />
                    </button>
                    
                    <h1 id="policy-title">Maka Energies Company Policies</h1>
                    <hr />
                    
                    <section>
                        <h2>Health And Safety Policy</h2>
                        <p>
                            This is a policy guideline that helps to ensure that workers are safe and healthy at all times. It 
                            also ensures that the services delivered are not hazardous and harmful to the clients in 
                            particular and the company in general.      
                        </p>
                    </section>
                    
                    <section>
                        <h2>Environmental Policy</h2>
                        <p>
                            This policy is paramount to the firm which delivers safety hazardous and non-hazardous 
                            products and services to the clients and the people around. This same policy ensures that the 
                            company complies with the national Environmental policies formulated by Zambia 
                            Environmental Management Agency (ZEMA).
                        </p>   
                    </section>
                    
                    <section>
                        <h2>Security Policy</h2>
                        <p>This policy is mainly to ensure that workers interests are protected at all times.</p>   
                    </section>
                    
                    <hr />
                    
                    <Button 
                        onClick={onClose}
                        style={{ minWidth: "120px", marginTop: "0.5rem" }}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}