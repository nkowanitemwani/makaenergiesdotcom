import React from "react";
import InfoCard from "../infocard/page";
import { Mail, PhoneForwarded } from "lucide-react"; 
import styles from "../missiongrid/missiongrid.module.css"



const contacts = [
    {
        icon: PhoneForwarded,
        title: "Call",
        subTitle:["+260 966 787 930","+260 955 881 931","+260 955 432 663"]
    },
    {
       icon: Mail,
       title:"Email",
       subTitle:"mwenzoenergeysolutions@gmail.com"
    }
];


export default function GetInTocuh(){
    return(
        <div className={styles.missionGrid}>
         {contacts.map((contact,index) =>(
            <InfoCard
            key={index}
            icon={contact.icon}
            title={contact.title}
            subTitle={contact.subTitle}
            ></InfoCard>
         ))}
        </div>
    );
}