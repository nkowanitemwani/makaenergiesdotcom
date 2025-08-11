import React from "react";
import styles from "./team.module.css";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import TeamGrid from "@/app/components/grids/teamgrid";

export default function TeamPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={styles.team}>
            <h1>Meet The Maka Energies Team</h1>
            <p>Our founding members are a group of individuals with years of experience in the electrical industry and service delivery </p>
            <TeamGrid></TeamGrid>
          </section>
          <Footer></Footer>
        </main>
    );
}