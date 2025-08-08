import styles from "./careersgrid.module.css"
import CareerCard from "../../cards/careercard/page"

const careers = [
    {
        title:"Marketing Director",
        duration:"fulltime",
        dueDate:"01/01/2020",
        qualifications:["marketing degree","2 years experience"],
        roles:["marketing","etc"]
    },
    {
        title:"Marketing Director",
        duration:"fulltime",
        dueDate:"01/01/2020",
        qualifications:["marketing degree","2 years experience"],
        roles:["marketing","etc"]
    }    
];


export default function CareersGrid(){
    return(
        <div className={styles.careersGrid}>
          {careers.map((career,index) => (
            <CareerCard
            key={index}
            title={career.title}
            duration={career.duration}
            dueDate={career.dueDate}
            qualifications={career.qualifications}
            roles={career.roles}></CareerCard>
          ))
          }
        </div>
    );

}