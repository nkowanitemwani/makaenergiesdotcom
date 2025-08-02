import Image from "next/image";
import styles from "./page.module.css";
import HomeNav from "./components/navbar/page";
import Button from "./components/button/page";
import MissionGrid from "./components/missiongrid/page";
import WorksGrid from "./components/worksgrid/page";
import GetInTocuh from "./components/getintouch/page";

export default function Home() {
  return (
      <main>
        <section className={styles.hero}>
          <HomeNav></HomeNav>
          <div className={styles.heroContainer}>
          <div className={styles.heroInfo}>
            <h1 className={styles.title}>Powering Zambia With Reliable Engergy Solutions</h1>
            <p className={styles.description}>Electrical,Civil,Mechanical & Supply Services</p>
          </div>
          <div className={styles.heroCtas}>
            <Button style={{padding : "0 80px"}}>Get A Quote</Button>
            <Button style={{background : "#1e2a3a"}}>Contact Us</Button>
          </div>
          </div>
        </section>
        <section className={styles.who}>
          <h1>Who Are We ?</h1>
          <p>MAKA ENERGIES LIMITED is a proudly Zambian-owned company committed to advancing the nation's energy sector through innovation, affordability, and quality service delivery. 
            Rooted in a deep understanding of Zambia's unique energy needs, the company is dedicated to providing efficient and cost-effective electricity solutions that empower both individuals and businesses.
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
        </section>
        <section className={styles.quickContact}>
          <h1>Get In Touch</h1>
          <GetInTocuh></GetInTocuh>
        </section>
        
      </main>
  );
}
