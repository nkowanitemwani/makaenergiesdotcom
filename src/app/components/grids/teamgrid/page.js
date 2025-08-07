import styles from "./teamgrid.module.css"
import TeamCard from "../../cards/teamcard/page";



const members = [
    {
        name:"Cosmas Mukuka",
        title:"Cheif Executive Officer"
    },
    {
        name:"Mutale Mukuka",
        title:"Finance Director"
    },
    {
        name:"Discson Musankata",
        title:"Chief Linesman"
    },
    {
        name:"Simmis Chisala Mabwe",
        title:"Cable Joiner"
    },            
];


export default function TeamGrid (){
  return(
    <div className={styles.teamGrid}>
      {members.map((member,index) => (
        <TeamCard
        key={index}
        name={member.name}
        title={member.title}></TeamCard>
      ))}
    </div>
  );

}