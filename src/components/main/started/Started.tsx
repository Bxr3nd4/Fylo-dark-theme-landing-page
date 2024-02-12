import styles from "./Started.module.css";
import filesImg from "../../../assets/illustration-intro.png";

function Started() {
  return (
    <>
      <div className={styles.started}>
        <div className={styles.filesImg}>
          <img src={filesImg} alt="" />
        </div>
        <div className={styles.info}>
          <h1> All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button> Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Started;
