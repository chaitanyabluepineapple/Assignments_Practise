import { useState } from "react";
import styles from "../../styles/Forms.module.css";
import Link from "next/link";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <form>
        <label className={styles.label}>
          Enter First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Enter Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <button className={styles.button} onClick={handleSubmit}>
          Greeet Me
        </button>
      </form>
    </div>
  );
}
