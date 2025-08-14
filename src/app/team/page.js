import React from "react";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import TeamGrid from "@/app/components/grids/teamgrid";

export default function TeamPage(){
    return(
        <main>
          <HomeNav style={{background : "#1a2332"}}></HomeNav>
          <section>
            <h1>Meet The Maka Energies Team</h1>
            <p>Our leadership team represents a powerful combination of academic excellence, practical industry experience, 
              and entrepreneurial vision. With collective decades of experience in Zambia&apos;s electrical utilities sector, 
              our directors bring deep technical knowledge and proven track records from their tenure with ZESCO and other leading organizations.</p>
            <TeamGrid></TeamGrid>
          </section>
          <Footer></Footer>
        </main>
    );
}