import React from "react";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import TeamGrid from "@/app/components/grids/teamgrid";
import Head from "next/head";
import SectionHeader from "../components/sectionheader";

export default function TeamPage(){
    return(
        <>
      <Head>
      <title>Team - Maka Energies Limited</title>
      <meta name="team" content="meet the Maka Energies Limited leadership team and founding members" />
       </Head>
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section>
            <SectionHeader
            title="Meet The Maka Energies Team"
            subtitle="Our founding members"></SectionHeader>
            <p>Our leadership team represents a powerful combination of academic excellence, practical industry experience, 
              and entrepreneurial vision. With collective decades of experience in Zambia&apos;s electrical utilities sector, 
              our directors bring deep technical knowledge and proven track records from their tenure with ZESCO and other leading organizations.</p>
            <TeamGrid></TeamGrid>
          </section>
          <Footer></Footer>
        </main>
        </>
    );
}