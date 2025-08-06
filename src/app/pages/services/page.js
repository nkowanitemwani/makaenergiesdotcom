import React from "react";
import styles from "./services.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import PolicyCard from "@/app/components/policycard/page";

export default function ServicesPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <Footer></Footer>
        </main>
    );
}