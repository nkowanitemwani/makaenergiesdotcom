import React from "react";
import styles from "./policycard.module.css"
import Button from "../../button/page";
import AboutPage from "@/app/pages/about/page";


export default function PolicyCard(){
    return(
        <div className={styles.main}>
         <div className={styles.container}>
         <h1>Maka Engergies Comapny Policies</h1>
         <hr></hr>
            <section>
             <h1>Health And Safety Policy</h1>
             <p>
             This is a policy guideline that help to ensure that workers are safe, and healthy at all times. It 
            also ensures that the services delivered are not hazardous and harmful to the clients in 
            particular and the company in general.      
             </p>
            </section>
            <section>
            <h1>Environmental Policy</h1>
            <p>
            This policy is   
            paramount to the firm which delivers safety hazardous   and non-hazardous 
            products and services to the clients and the people around. This same policy ensure that the 
            company complies with the national Environmental policies formulated by Zambia 
            Environmental Management Agency (ZEMA.) </p>   
            </section>
            <section>
            <h1>Security Policy</h1>
            <p>This policy is mainly to ensure that workers interests are protected at all time.</p>   
            </section>
            <hr></hr>
            <Button>Close</Button>
         </div>
           
        </div>
    )
}