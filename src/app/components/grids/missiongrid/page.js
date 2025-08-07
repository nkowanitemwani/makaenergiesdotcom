import InfoCard from "../../cards/infocard/page";
import React from "react";
import { Handshake,Users,Link,Zap } from "lucide-react";
import styles from "./missiongrid.module.css"


const missions = [
  {
    icon: Users,
   title: "Customer-Centric Flexibility"
  },
  {
    icon:Handshake,
   title:"Local Empowerment"
  },
  {
    icon:Link,
    title:"Collaborative Partnership"
  },
  {
    icon:Zap,
    title:"Affordable, Quality Energy Solutions"
  }

];


export default function MissionGrid(){
  return(
    <div className={styles.missionGrid}>
      {missions.map((mission,index) =>(
        <InfoCard 
        key={index}
        icon={mission.icon}
        title={mission.title}>   
        </InfoCard>
      ))}
    </div>
  );
}