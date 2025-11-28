"use client"

import React from "react";
import { useState } from "react";
import styles from "./about.module.css";
import style from "@/app/page.module.css"
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import PolicyGrid from "@/app/components/grids/policygrid";
import Button from "@/app/components/button";
import PolicyCard from "@/app/components/cards/policycard";
import Head from "next/head";
import Image from "next/image";
import SectionHeader from "../components/sectionheader";

export default function AboutPage(){

  const [policyCard,setPolicyCard] = useState(false);
  const openPolicyCard = () => setPolicyCard(true);
  const closePolicyCard = () => setPolicyCard(false);


  const viewResgistration = () => {
  window.open("https://drive.google.com/file/d/1PQqzhMcWzgBHm6Dbo-NoVd98rP7z7NM3/view?usp=drive_link","_blank");
};



  
    return(
     <>
    <Head>
      <title>About Us - Maka Energies Limited</title>
      <meta name="description" content="Learn about Maka Energies Limited's history , policies, compliance and future strategy" />
    </Head>

        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={style.whoSection}>
            <div className={style.contentWrapper}>
              <div className={style.imageContent}>
                  <Image
                  src="/images/history.png"
                  alt="company history illustration"
                  width={400}
                  height={400}
                  className={style.whoImage}
                  priority></Image>
              </div>
              <div className={style.textContent}>
                <h1>Company History</h1>
                <p>MAKA ENERGIES LIMITED was registered on the 25th of january,2023 in Zambia by the registrar of companies. With the aim of providing quality goods and services to both local and international clients.
                  Since then we have made steady progress in various sectors of the economy, venturing into electrical and mechanical engineering, civil construction and the 
                  supply of various goods,currently doing business with <span>Grizzly Mining, Golden King Limited, Wideways International Limited, Hui Fan Mining Limited</span> and various other businesses</p>
              </div>
            </div>

          </section>
          <section className={styles.policy}>
           <SectionHeader
           title="Our Policies"
           subtitle="We put our workers and clients best interests first"></SectionHeader>
           <PolicyGrid></PolicyGrid>
           <Button onClick={openPolicyCard}>View Policies</Button>
          </section>
          {policyCard && (<PolicyCard onClose={closePolicyCard}></PolicyCard>) }
          <section className={styles.legal}>
            <SectionHeader
            title="Legal Compliance"
            subtitle="We are fully compliant with"
            titleColor="#f8f9fb">
          
            </SectionHeader>
            <ol>
              <li>PACRA: registered as PRIVATE COMPANY LIMITED BY SHARES.</li>
              <li>Zambia Revenue Authority: certification for general tax clearance and value added tax account registration.</li>
              <li>National Pension Scheme Authority.</li>
              <li>Workers Compensation Fund.</li>
              <li>Engineering Registration Board: registered as an engineering organisation and authorised to practice engineering in Zambia.</li>
              <li>National Council For Construction: grade 6 category C general engineering works certification.</li>
              <li>Zambia Public Procurement Authority.</li>
            </ol>
           <Button onClick={viewResgistration}>View Documents</Button>
          </section>
          <section className={style.whoSection}>
            <div className={style.contentWrapper}>
              <div className={style.textContent}>
                <h1>Our Vision For Growth</h1>
                <p>We&apos;re positioning ourselves to become one of the main suppliers on the Copperbelt and across Zambia&apos;s provinces. Our future strategy includes expanding our services nationally and building international relationships with neighboring countries including South Africa, Tanzania, and Democratic Republic of Congo.</p>
              </div>

              <div className={style.imageContent}>
                <Image
                src="/images/growthvision.png"
                alt="growth vision illustration"
                width={400}
                height={400}
                className={style.whoImage}
                priority
                ></Image>
              </div>
            </div>
          </section>
          <Footer></Footer>

        </main>
     </>

    );
}