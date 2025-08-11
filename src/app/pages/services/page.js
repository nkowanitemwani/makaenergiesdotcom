import React from "react";
import styles from "./services.module.css";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import PolicyCard from "@/app/components/cards/policycard";
import ServiceGrid from "@/app/components/grids/servicegrid";

export default function ServicesPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={styles.service}>
            <h1>Our Services</h1>
            <p><span>Electical Supplies And Maintenance:</span> Panels, Switch gears, contactors, 
            breakers, cables, motors, generator installations and maintenance, transformer equipment
            and accessories, among other numerous items. </p>
            <p><span>Goods Supply:</span>
            Computer Stationeries and Hardware, Office and Domestic Equipment. Supply of 
            mining tools, Protective clothes & PPE, Food stuffs, Grocery and Sales services, Building 
            material, electrical tools, cleaning material and reagents, Road construction materials. </p>
          </section>
          <ServiceGrid></ServiceGrid>
          <Footer></Footer>
        </main>
    );
}