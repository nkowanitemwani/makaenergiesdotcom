import React from "react";
import InfoCard from "../../cards/infocard";
import { Hospital, Lock, Trees } from "lucide-react";
import styles from "../missiongrid/missiongrid.module.css"

const policies = [
    {
        title:"Health And Safety Policy",
        icon: Hospital
    },
    {
        title:"Environmental Policy",
        icon:Trees
    },
    {
        title:"Security Policy",
        icon: Lock
    }
];


export default function PolicyGrid(){
    return(
        <div className={styles.missionGrid}>
            {policies.map((policy,index) => (
                <InfoCard
                style={{'--icon-color': ' #ff6b35','--title-color': '#1a2332','--subtitle-color': '#1a2332'}}
                key={index}
                title={policy.title}
                icon={policy.icon}></InfoCard>
            ))}
        </div>
    );
}