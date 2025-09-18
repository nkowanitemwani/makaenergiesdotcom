import styles from "./servicegrid.module.css"
import CompactServiceCard from "../../cards/servicecard";
import { Bolt, Building, Power, Sun, ToolCase, Zap } from "lucide-react";

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
                <h1>Our Services</h1>
                <p>Comprehensive solutions for your business needs</p>
            </div>
            <div className={styles.cardContainer}>
                {services.map((service,index) => (
                    <CompactServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                    />
                ))}
            </div>
        </div>
    );
}