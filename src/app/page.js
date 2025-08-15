"use client"

import styles from "./page.module.css";
import HomeNav from "./components/navbar";
import Button from "./components/button";
import MissionGrid from "./components/grids/missiongrid";
import WorksGrid from "./components/grids/worksgrid/page";
import GetInTocuh from "./components/grids/getintouchgrid";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {

const viewCertificates = () => {
  window.open("https://drive.google.com/file/d/1bo_sKdUtIFGizRQOFmmYkOaXHAUC3Ug8/view?usp=sharing","_blank");
};


  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maka Energies Limited",
    "url": "https://makaenergiesdotcom.vercel.app/",
    "description": "Energy solutions provider in Zambia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot Number 68 Umulu",
      "addressLocality": "Kalulushi",
      "addressCountry": "ZM"
    },
    "telephone" : ["+260 966 787 930",
                  "+260 955 432 663",
                  "+260 955 881 931"
    ],
    "email": "omicronelectricals@gmail.com"
  }


  return (
    <>
     <Head>
        <title>Maka Energies Limited - Energy Solutions</title>
        <meta name="description" content="Maka Energies Limited provides comprehensive energy solutions and services..." />
        <meta name="keywords" content="Maka Energies, energy solutions, power generation" />
        <link rel="canonical" href="https://makaenergiesdotcom.vercel.app/" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
          <main>
        <section className={styles.hero}>
          <HomeNav></HomeNav>
          <div className={styles.heroContainer}>
          <div className={styles.heroInfo}>
            <h1>Powering Zambia With Reliable Engergy Solutions</h1>
            <p>Electrical,Civil,Mechanical & Supply Services</p>
          </div>
          <div className={styles.heroCtas}>
            <Button href="/contact#quote">Get A Quote</Button>
            <Button href="/contact" style={{background : "#1e2a3a"}}>Contact Us</Button>
          </div>
          </div>
        </section>
        <section className={styles.who}>
          <h1>Who Are We ?</h1>
          <p>MAKA ENERGIES LIMITED is a proudly Zambian-owned company based in Kalulushi District, Copperbelt Province committed to advancing the nation&apos;s energy sector through innovation, affordability, and quality service delivery. 
            Rooted in a deep understanding of Zambia&apos;s unique energy needs, the company is dedicated to providing efficient and cost-effective electricity solutions that empower both individuals and businesses across Zambia
          </p>
        </section>
        <section className={styles.mission}>
           <h1>Our Mission</h1>
          <p>built on four core principles</p>
          <MissionGrid></MissionGrid>
        </section>
        <section className={styles.work}>
           <h1>Past Work & Achievements</h1>
           <WorksGrid></WorksGrid>
           <Button onClick={viewCertificates}>View Certificates</Button>
        </section>
        <section className={styles.quickContact}>
          <h1>Get In Touch</h1>
          <GetInTocuh></GetInTocuh>
        </section>
        <Footer></Footer>
        
      </main>
    </>
  );
}
