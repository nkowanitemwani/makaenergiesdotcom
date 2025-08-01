import InfoCard from "../infocard/page";
import React from "react";
import styles from "../missiongrid/missiongrid.module.css"

const works = [
    {
        title: "Avocodo Mining Limited",
        subTitle: (<ul>
            <li>11kV overhead line construction</li>
            <li>1600kVA transformer installation</li>
            <li>high voltage cable termination</li>
            <li>medium voltage equipment installation</li>
        </ul>)
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