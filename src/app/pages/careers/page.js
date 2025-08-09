import React from "react";
import styles from "./careers.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import CareersGrid from "@/app/components/grids/careersgrid/page";
import InfoCard from "@/app/components/cards/infocard/page";
import { StopCircle } from "lucide-react";

export default function CareersPage(){
    return(
        <main>
        <HomeNav style={{background : "#1a2332"}}></HomeNav>
        <section className={styles.career}>
            <h1>Join The Maka Energies Team</h1>
            <p>We pride ourselves on our commitment to train, empower and motivate our workers to excel in everything they do,
               offering equal employment opportunities regardless of gender, race, nationality or religion. 
            </p>
            <InfoCard icon={StopCircle} title={"No openings at the moment"}></InfoCard>
        </section>
        <section>
        {/* <CareersGrid></CareersGrid> */}
        </section>
        <Footer></Footer>
        </main>
    );
}