import React from "react";
import InfoCard from "../../cards/infocard";
import styles from "../missiongrid/missiongrid.module.css"


const contacts = [
    {
        title:"COSMAS MUKUKA",
        subTitle:["+260 966 787 930","+260 955 881 931"]
    },
    {
        title:"MUTALE MUKUKA",
        subTitle:["+260 955 432 663"]
    }
];



export default function ContactCards(){
    return(
      <div className={styles.missionGrid}>
        {contacts.map((contact,index) => (
            <InfoCard
            key={index}
            title={contact.title}
            subTitle={contact.subTitle}
            style={{'--icon-color': ' #ff6b35','--title-color': '#1a2332','--subtitle-color': '#1a2332'}}></InfoCard>
        ))}
      </div>
    );
}