import React from "react";
import InfoCard from "../../cards/infocard";
import { Hospital, Lock, Trees } from "lucide-react";
import styles from "../missiongrid/missiongrid.module.css"

const policies = [
    {
        title:"Health And Safety Policy",
        icon: Hospital,
        subtitle: " Ensures workers are safe and healthy at all times, and that services delivered are not hazardous to clients or the company."
    },
    {
        title:"Environmental Policy",
        icon:Trees,
        subtitle:"Ensures compliance with national environmental policies formulated by ZEMA, delivering safe products and services to clients."
    },
    {
        title:"Security Policy",
        icon: Lock,
        subtitle: "Ensures worker interests are protected at all times."
    }
];


export default function PolicyGrid(){
    return(
        <div className={styles.missionGrid}>
            {policies.map((policy,index) => (
                <InfoCard
                style={{'--icon-color': ' #ff6b35','--title-color': '#1a2332','--subtitle-color': '#64748b'}}
                key={index}
                title={policy.title}
                icon={policy.icon}
                subTitle={policy.subtitle}></InfoCard>
            ))}
        </div>
    );
}