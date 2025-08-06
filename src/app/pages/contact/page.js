import React from "react";
import styles from "./contact.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import ContactCards from "@/app/components/contactcardgrid/page";


export default function ContactPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={styles.contact}>
            <h1>Get In Touh With Us</h1>
            <p>Reach out to us on any of the below contacts for quick reply</p>
          </section>
          <ContactCards></ContactCards>
          <section className={styles.map}>
           <h1>Pay Us a Visit</h1>
          </section>
          <Footer></Footer>
        </main>
    );

}
