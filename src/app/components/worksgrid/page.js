import InfoCard from "../infocard/page";
import React from "react";
import styles from "../missiongrid/missiongrid.module.css"

const works = [
    {
        title: "AVOCODO MINING LIMITED",
        subTitle:[
             "11kV overhead line construction.",
            "1600kVA transformer installation.",
            "High voltage cable termination.",
            "Medium voltage equipment installation."
        ]
           
    },
    {
        title: "HUI FAN COMPANY",
        subTitle:[
            "15M overhead line construction.",
            "11kV switch gear intstallation.",
            "Excavation,laying & connection of 65M 11kV XLPE cable."
        ]
    },
    {
        title: "WIDEWAY INTERNATIONAL COMPANY",
        subTitle:[
            "Substation construction.",
            "Ground mounted 500kVA transformer installation with earthing.",
        ]
    }
];


export default function WorksGrid(){
     return(
        <div className={styles.missionGrid}>
            {works.map((work,index) => (
                <InfoCard 
                key={index}
                title={work.title}
                subTitle={work.subTitle}>
            </InfoCard>
            ))}
        </div>
     );
}