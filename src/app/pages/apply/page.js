import styles from "./apply.module.css"
import HomeNav from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import CareerForm from "@/app/components/forms/careerform";


export default function ApplyPage(){
    return(
        <main>
            <HomeNav style={{background : "#1a2332"}}></HomeNav>
            <section>
                <CareerForm></CareerForm>
            </section>
            <Footer></Footer>
        </main>
    );
}