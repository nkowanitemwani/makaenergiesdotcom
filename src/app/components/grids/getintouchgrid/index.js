import React from "react";
import InfoCard from "../../cards/infocard";
import { Locate, Mail, Map, PhoneForwarded } from "lucide-react"; 
import styles from "../missiongrid/missiongrid.module.css"



const contacts = [
    {
        icon: PhoneForwarded,
        title: "Call Us on",
        subTitle:["+260 966 787 930","+260 955 881 931","+260 955 432 663"]
    },
    {
       icon: Mail,
       title:"Send An Email To",
       subTitle:["makaenergies@gmail.com"]
    },
    {
        icon: Map,
        title: "Visit Us At",
        subTitle:["Plot No. 68 Umulu Kalulushi-District"]
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
            style={{'--icon-color': ' #ff6b35','--title-color': '#1a2332','--subtitle-color': '#1a2332'}}
            ></InfoCard>
         ))}
        </div>
    );
}