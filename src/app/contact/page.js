"use client";

import React from "react";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ContactCards from "@/app/components/grids/contactcardgrid";
import QuoteForm from "@/app/components/forms/quoteform";
import Head from "next/head";
import SectionHeader from "../components/sectionheader";


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
            <SectionHeader
            title="Get In Touch With Us"
            subtitle="Reach out to us on any of the below contacts for quick reply"></SectionHeader>
            <ContactCards></ContactCards>
          </section>
          <section id="quote">
          <SectionHeader
          title="Get A Quote"
          subtitle="Send a us a description of the service you require and we will get back to you within 24 hours"></SectionHeader>
          <QuoteForm></QuoteForm>
          </section>
          <Footer></Footer>
        </main>
        </>
    );

}
