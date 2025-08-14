import React from "react";
import HomeNav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CareersGrid from "@/app/components/grids/careersgrid";
import InfoCard from "../components/cards/infocard";
import { StopCircle } from "lucide-react";

export default function CareersPage(){
    return(
        <main>
        <HomeNav style={{background : "#1a2332"}}></HomeNav>
        <section>
            <h1>Why Choose a Career with Maka Energies?</h1>
            <p>
            Join a company that's experiencing steady growth across various economic sectors. 
            Our dynamic team of professionals brings together diverse qualifications and extensive experience, creating an environment where every team member's contribution matters.
            </p>
        </section>
        <section>
            <h1>Current Opportunities</h1>
            <p>Ready to be part of Zambia's growing energy sector? Explore our current openings below and join a team that's building the future of electrical engineering and energy solutions in Zambia.</p>
            <InfoCard icon={StopCircle} title={"No openings at the moment"}></InfoCard>
        </section>
        <section>
        {/* <CareersGrid></CareersGrid> */}
        </section>
        <Footer></Footer>
        </main>
    );
}