import React from "react";
import styles from "./team.module.css";
import HomeNav from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";

export default function TeamPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <Footer></Footer>
        </main>
    );
}