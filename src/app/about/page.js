"use client"

import React from "react";
import { useState } from "react";
import styles from "./about.module.css";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import PolicyGrid from "@/app/components/grids/policygrid";
import Button from "@/app/components/button";
import PolicyCard from "@/app/components/cards/policycard";

export default function AboutPage(){

  const [policyCard,setPolicyCard] = useState(false);
  const openPolicyCard = () => setPolicyCard(true);
  const closePolicyCard = () => setPolicyCard(false);


  const viewResgistration = () => {
  window.open("https://drive.google.com/file/d/1PQqzhMcWzgBHm6Dbo-NoVd98rP7z7NM3/view?usp=drive_link","_blank");
};



  
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={styles.history}>
            <h1>Company History</h1>
            <p>MAKA ENERGIES LIMITED was registered on the 25th of january,2023 in Zambia by the registrar of companies. With the aim of providing quality goods and services to to both local and international clients.
              Since then we have made steady progress in various sectors of the economy, venturing into electrical and mechanical engineering, civil construction and the 
              supply of varios goods,currently diong business with <span>Grizzly Mining, Golden King Limited, Wideways International Limited, Hui Fan Mining Limited</span> and various other businesses</p>
          </section>
          <section className={styles.policy}>
           <h1>Our Policies</h1>
           <PolicyGrid></PolicyGrid>
           <Button onClick={openPolicyCard}>View Policies</Button>
          </section>
          {policyCard && (<PolicyCard onClose={closePolicyCard}></PolicyCard>) }
          <section className={styles.legal}>
           <h1>Legal Compliance</h1>
           <p>We are fully compliant with</p>
            <ol>
              <li>PACRA: registered as PRIVATE COMPANY LIMITED BY SHARES.</li>
              <li>Zambia Revenue Authority: certification for general tax clearance and value added value added tax account registration.</li>
              <li>National Pension Scheme Authority.</li>
              <li>Workers Compensation Fund.</li>
              <li>Engineering Registration Board: registered as an engineering organisation and authorised to practice engineering in Zambia.</li>
              <li>National Council For Construction: grade 6 category C general engineering works certification.</li>
              <li>Zambia Public Procurement Authority.</li>
            </ol>
           <Button onClick={viewResgistration}>View Documents</Button>
          </section>
          <section className={styles.future}>
            <h1>Our Vision For Growth</h1>
            <p>We're positioning ourselves to become one of the main suppliers on the Copperbelt and across Zambia's provinces. Our future strategy includes expanding our services nationally and building international relationships with neighboring countries including South Africa, Tanzania, and Democratic Republic of Congo.</p>
          </section>
          <Footer></Footer>


          {/* {policyCard && (<PolicyCard></PolicyCard>)} */}
        </main>

    );
}