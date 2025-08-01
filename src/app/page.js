import Image from "next/image";
import styles from "./page.module.css";
import HomeNav from "./components/navbar/page";

export default function Home() {
  return (
      <main>
        <header>
          <HomeNav></HomeNav>
        </header>
      </main>
  );
}
