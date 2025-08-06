"use client"

import React from "react";
import { useEffect,useState } from "react";
import styles from "./about.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import PolicyGrid from "@/app/components/policygrid/page";
import Button from "@/app/components/button/page";
import PolicyCard from "@/app/components/policycard/page";

export default function AboutPage(){

  const [policyCard,setPolicyCard] = useState(false);
  const openPolicyCard = () => setPolicyCard(true);
  const closePolicyCard = () => setPolicyCard(false);



  
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={styles.history}>
            <h1>Company History</h1>
            <p>MAKA ENERGIES LIMITED was registered on the 25th of january,2023 in Zambia by the registrar of companies. With the aim of providing quality goods and services to to both local and international clients.
              Since then the we have made in various sectors of the economy, venturing into electrical and mechanical engineering, civil construction and the 
              supply of varios goods,currently diong business with <span>Grizzly Mining, Golden King Limited, Wideways International Limited, Hui Fan Mining Limited</span> and various other businesses</p>
          </section>
          <section className={styles.policy}>
           <h1>Our Policies</h1>
           <PolicyGrid></PolicyGrid>
           <Button onClick={openPolicyCard}>Details</Button>
          </section>
          <section className={styles.legal}>
           <h1>Legal Compliance</h1>
           <p></p>
           <Button>View Documents</Button>
          </section>
          <section className={styles.future}>
            <h1>Future Strategy</h1>
            <p>The company plans to succeed and position itself as one of the main suppliers on the Copperbelt 
            and other provinces and institutions in Zambia. </p>
          </section>
          <Footer></Footer>


          {/* {policyCard && (<PolicyCard></PolicyCard>)} */}
        </main>

    );
}