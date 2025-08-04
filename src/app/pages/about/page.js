import React from "react";
import styles from "./about.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";

export default function AboutPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section classname={styles.history}>
            <h1>Our History</h1>
            <p></p>
          </section>
          <Footer></Footer>
        </main>
    );
}