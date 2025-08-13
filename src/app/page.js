"use client"

import styles from "./page.module.css";
import HomeNav from "./components/navbar";
import Button from "./components/button";
import MissionGrid from "./components/grids/missiongrid";
import WorksGrid from "./components/grids/worksgrid/page";
import GetInTocuh from "./components/grids/getintouchgrid";
import Footer from "./components/footer";

export default function Home() {

const viewCertificates = () => {
  window.open("https://drive.google.com/file/d/1bo_sKdUtIFGizRQOFmmYkOaXHAUC3Ug8/view?usp=sharing","_blank");
};


  return (
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
          <p>MAKA ENERGIES LIMITED is a proudly Zambian-owned company committed to advancing the nation&apos;s energy sector through innovation, affordability, and quality service delivery. 
            Rooted in a deep understanding of Zambia&apos;s unique energy needs, the company is dedicated to providing efficient and cost-effective electricity solutions that empower both individuals and businesses.
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
  );
}
