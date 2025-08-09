import React from "react";
import styles from "./contact.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import ContactCards from "@/app/components/grids/contactcardgrid/page";
import Button from "@/app/components/button/page";


export default function ContactPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section className={styles.contact}>
            <h1>Get In Touch With Us</h1>
            <p>Reach out to us on any of the below contacts for quick reply</p>
            <ContactCards></ContactCards>
          </section>
          <section className={styles.quote}>
          <h1>Get a Quote</h1>
          <p>Send a us a description of the service you require and we will get back to you within 24 hours</p>
          <form className={styles.quoteform}>
            <div className={styles.formtop}>
              <input type="text" placeholder="Name" required></input>
              <input type="email" placeholder="Email" required></input>
              <input type="text" placeholder="Phone Number" required></input>
              <input type="text" placeholder="Address" required></input>
            </div>
            <div className={styles.formbottom}>
            <input type="text" placeholder="Service Required"></input>
            <input className={styles.formdescription} type="text" placeholder="Description"></input>
            </div>
            <Button style={{padding : "5px 5px", background : "#1a2332"}}>Send</Button>
          </form>
          </section>
          <section className={styles.map}>
           <h1>Pay Us a Visit</h1>
          </section>
          <Footer></Footer>
        </main>
    );

}
