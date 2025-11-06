import styles from "./servicegrid.module.css"
import CompactCard from "../../cards/compactcard";
import { Bolt, Building, Power, Sun, ToolCase, Zap } from "lucide-react";
import SectionHeader from "../../sectionheader";

const services = [
    {
     icon:Zap,
     title:"Electrical Supplies and Maintence"
    },
    {
    icon: Power,
    title:"Transformer Installations"
    },
    {
    icon:Sun,
    title:"Solar Product Installations"
    },
    {
    icon:Bolt,
    title:"High/Medium voltage Line Construction"
    },
       
    {
    icon:ToolCase,
    title:"Generator and Auto-Electrical Maintenance"
    },
    {
    icon:Building,
    title:"Mining Tools,Office Equipment and PPE Supply"
    }     
    
];

export default function ServiceGrid(){
    return(
        <div className={styles.serviceGrid}>
            <div className={styles.gridHeader}>
                <SectionHeader
                title="Our Services"
                subtitle="Comprehensive solutions for your business needs"></SectionHeader>
                
            </div>
            <div className={styles.cardContainer}>
                {services.map((service,index) => (
                    <CompactCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                    />
                ))}
            </div>
        </div>
    );
}