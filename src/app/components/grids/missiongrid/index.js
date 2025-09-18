import InfoCard from "../../cards/infocard";
import React from "react";
import { Handshake,Users,Link,Zap } from "lucide-react";
import styles from "@/app/components/grids/servicegrid/servicegrid.module.css"
import CompactCard from "../../cards/compactcard";



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
    <div className={styles.cardContainer}>
      {missions.map((mission,index) =>(
        <CompactCard 
        key={index}
        icon={mission.icon}
        title={mission.title}>   
        </CompactCard>
      ))}
    </div>
  );
}