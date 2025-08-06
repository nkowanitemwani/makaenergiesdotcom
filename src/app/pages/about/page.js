"use client"

import React from "react";
import { useEffect,useState } from "react";
import styles from "./about.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import PolicyGrid from "@/app/components/policygrid/page";
import Button from "@/app/components/button/page";

export default function AboutPage(){

  const [policyCard,setPolicyCard] = useState(false);
  const openPolicyCard = () => setPolicyCard(true);
  const closePolicyCard = () => setPolicyCard(false);



  
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={styles.history}>
            <h1>Our History</h1>
            <p>MAKA ENERGIES LIMITED was registered on the 25th of january,2023 in Zambia by the registrar of companies. With the aim of providing quality goods and services to to both local and international clients.
              Since then the we have made in various sectors of the economy, venturing into electrical and mechanical engineering, civil construction and the 
              supply of varios goods,currently diong business with <span>Grizzly Mining, Golden King Limited, Wideways International Limited, Hui Fan Mining Limited</span>adn various other businesses</p>
          </section>
          <section className={styles.policy}>
           <h1>Our Policies</h1>
           <PolicyGrid></PolicyGrid>
           <Button onClick={openPolicyCard}>Details</Button>
          </section>
          <Footer></Footer>


          {policyCard && <PolicyGrid></PolicyGrid>};
        </main>

    );
}