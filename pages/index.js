import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus
        blanditiis mollitia aspernatur, reiciendis sapiente ipsa consectetur
        repellat eveniet voluptatibus.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus
        blanditiis mollitia aspernatur
      </p>
      <Link className={styles.btn} href={"ninjas"}>
        See Ninja Listing
      </Link>
    </div>
  );
}
