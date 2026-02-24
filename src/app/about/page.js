"use client"

import React from "react";
import { useState } from "react";
import styles from "./about.module.css";
import style from "@/app/page.module.css"
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import PolicyGrid from "@/app/components/grids/policygrid";
import Head from "next/head";
import Image from "next/image";
import SectionHeader from "../components/sectionheader";
import ComplianceGrid from "../components/grids/compliancegrid";

export default function AboutPage(){

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
          </section>
          <section className={styles.legal}>
            <ComplianceGrid></ComplianceGrid>
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