"use client"

import React from "react";
import styles from "./alert.module.css";
import Button from "../button";

export default function Alert({icon:Icon,message,onClose}){
    return(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.main} onClick={(e) => e.stopPropagation()}>
                <div className={styles.container}>
                {Icon && (
                <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} size={32} strokeWidth={1.5} />
                </div>
            )}
            <h2>{message}</h2>
            <Button onClick={onClose} style={{padding : "0.25rem 0.25rem", backgroundColor : "#1a2332"}}>Close</Button>

                </div>

            </div>

        </div>
    );
}