import React from "react";
import styles from "./compliance.module.css"
import InfoCard from "../../cards/infocard";
import SectionHeader from "../../sectionheader";
import Button from "../../button";
import { Building, Construction, HandCoins, HardHat, Landmark, Paperclip, Shield, ToolCase } from "lucide-react";

const compliances = [
    {
        icon:Building,
        title:"PACRA",
        subtitle: "registered as a Private Company Limited  by Shares"
    },
    {
        icon:Landmark,
        title:"Zambia Revenue Authority",
        subtitle:"certification for general tax clearance and value added tax account registration"
    },
    {
        icon:Shield,
        title:"National Pension Scheme Authority",
        subtitle:"Fully registered and compliant with national pension regulation"
    },
    {
        icon:HardHat,
        title:"Workers Compensation Fund",
        subtitle:"Ensuring the safety and security coverage for our entire workforce"
    },
    {
        icon:ToolCase,
        title:"Engineering Registration Board",
        subtitle:"Registered as an engineering authorised to practise engineering in Zambia"
    },
    {
        icon:Construction,
        title:"National Council for Construction",
        subtitle:"Grade 6 Category C general engineering works Certification"
    },
    {
        icon:HandCoins,
        title:"Zambia Public Procurement Authority",
        subtitle:"Adherent to all procurement guidelines and standards"
    },
];



export default function ComplianceGrid(){

    const viewResgistration = () => {
    window.open("https://drive.google.com/file/d/1PQqzhMcWzgBHm6Dbo-NoVd98rP7z7NM3/view?usp=drive_link","_blank");
    };


    return(
        <div className={styles.complianceGrid}>
            <SectionHeader
            title="Legal Compliance"
            subtitle="We are fully compliant with"
            titleColor="#f8f9fb">
          
            </SectionHeader>
            <div className={styles.cardContainer}>
                {compliances.map((compliance,index) => (
                    <InfoCard
                    style={{background : "#1a2332", '--icon-color': ' #ff6b35','--title-color': '#f8f9fb','--subtitle-color': '#64748b'}}
                    key={index}p
                    icon={compliance.icon}
                    title={compliance.title}
                    subTitle={compliance.subtitle}
                    ></InfoCard>
                ))}
            </div>
            <Button onClick={viewResgistration}>View Documents</Button>
        </div>
    );
}