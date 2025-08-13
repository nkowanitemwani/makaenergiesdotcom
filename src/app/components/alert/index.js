"use client"

import React, { useEffect } from "react";
import styles from "./alert.module.css";
import Button from "../button";
import { X } from "lucide-react";

export default function Alert({
    icon: Icon,
    message,
    onClose,
    type = "info",
    showCloseButton = true,
    autoClose = false,
    autoCloseDelay = 5000
}) {
    
    // Auto-close functionality
    useEffect(() => {
        if (autoClose && onClose) {
            const timer = setTimeout(onClose, autoCloseDelay);
            return () => clearTimeout(timer);
        }
    }, [autoClose, autoCloseDelay, onClose]);
    
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

    // Prevent body scroll when alert is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div 
            className={styles.overlay} 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="alert-message"
        >
            <div 
                className={styles.main} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`${styles.container} ${styles[type] || ''}`}>
                    {/* Close button in top-right corner */}
                    {showCloseButton && (
                        <button 
                            className={styles.closeButton}
                            onClick={onClose}
                            aria-label="Close alert"
                        >
                            <X size={16} />
                        </button>
                    )}
                    
                    {/* Icon */}
                    {Icon && (
                        <div className={styles.iconWrapper}>
                            <Icon className={styles.icon} size={32} strokeWidth={1.5} />
                        </div>
                    )}
                    
                    {/* Message */}
                    <h2 id="alert-message">{message}</h2>
                    
                    {/* Action button */}
                    <Button 
                        onClick={onClose} 
                        style={{
                            padding: "0.75rem 1.5rem", 
                            backgroundColor: "#1a2332",
                            minWidth: "120px"
                        }}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}