import React from "react";
import styles from "./services.module.css";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ServiceGrid from "@/app/components/grids/servicegrid";
import Head from "next/head";

export default function ServicesPage(){
    return(
        <>
       <Head>
      <title>Services - Maka Energies Limited</title>
      <meta name="services" content="Services provided by Maka Energies Limited" />
       </Head>
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <div className={styles.serviceContainer}>
            <section className={styles.service}>
              <h1>What We Do</h1>
              <p>Our expertise spans multiple sectors of the economy, specializing in:</p>
              <p><span>•Electical Supplies And Maintenance:</span> Panels, Switch gears, contactors, 
              breakers, cables, motors, generator installations and maintenance, transformer equipment
              and accessories, among other numerous items. </p>
              <p><span>•Goods Supply:</span>
              Computer Stationeries and Hardware, Office and Domestic Equipment. Supply of 
              mining tools, Protective clothes & PPE, Food stuffs, Grocery and Sales services, Building 
              material, electrical tools, cleaning material and reagents, Road construction materials. </p>
            </section>
            <ServiceGrid className={styles.ServiceGrid}></ServiceGrid>
          </div>
          <Footer></Footer>
        </main>
        </>
    );
}