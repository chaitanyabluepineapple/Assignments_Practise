import { data } from "../excercise_eight/data";
import Link from "next/link";
import styles from "../../styles/Eight.module.css";

export default function renderingjson() {
  return (
    <>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <div className={styles.mainContainer}>
        {data.map((item) => (
          <div className={styles.container}>
            <h2>{item.setup}</h2>
            <h4>{item.punchline}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
