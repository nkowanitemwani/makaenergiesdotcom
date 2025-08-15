"use client";

import React from "react";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ContactCards from "@/app/components/grids/contactcardgrid";
import QuoteForm from "@/app/components/forms/quoteform";
import Head from "next/head";


export default function ContactPage(){
    return(
        <>
        <Head>
      <title>Contact - Maka Energies Limited</title>
      <meta name="contact" content="Get in touch with Maka Energies Limited's via phone , email or quote" />
       </Head>
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section>
            <h1>Get In Touch With Us</h1>
            <p>Reach out to us on any of the below contacts for quick reply</p>
            <ContactCards></ContactCards>
          </section>
          <section id="quote">
          <h1>Get a Quote</h1>
          <p>Send a us a description of the service you require and we will get back to you within 24 hours</p>
          <QuoteForm></QuoteForm>
          </section>
          <Footer></Footer>
        </main>
        </>
    );

}
