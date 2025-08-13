"use client";
import { useParams } from "next/navigation";
import HomeNav from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import CareerForm from "@/app/components/forms/careerform";


export default function ApplyPage(){

    const {slug} = useParams();

  // Convert slug back to readable text
    const jobTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");    

    return(
        <main>
            <HomeNav style={{background : "#1a2332"}}></HomeNav>
            <section>
                <h1>Maka Energies Career Form</h1>
                <p>{jobTitle} Position</p>
                <CareerForm></CareerForm>
            </section>
            <Footer></Footer>
        </main>
    );
}