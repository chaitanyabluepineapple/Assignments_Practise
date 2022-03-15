import React from "react";
import styles from "../../styles/One.module.css";
import Link from "next/link";

export default function Excersice() {
  return (
    <>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <div className={styles.container}>
        <h1>Hello World!!!</h1>
      </div>
    </>
  );
}
