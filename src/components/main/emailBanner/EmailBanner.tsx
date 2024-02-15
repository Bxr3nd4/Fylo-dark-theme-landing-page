import styles from "./EmailBanner.module.css";
import { useState } from "react";

function EmailBanner() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      setMessage("Message was sent!");
    } else {
      setMessage("Please enter a valid email");
    }
  };
  return (
    <>
      <div className={styles.contentBanner}>
        <h2> Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className={styles.input}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <p>{message}</p>
        </div>
        <button onClick={validateEmail}>Get Started For Free</button>
      </div>
    </>
  );
}

export default EmailBanner;
