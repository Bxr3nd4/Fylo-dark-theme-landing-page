import styles from "./Banner.module.css";
import img from "../../../assets/illustration-stay-productive.png";
import arrow from "../../../assets/icon-arrow.svg"

function Banner() {
  return (
    <>
      <div className={styles.bannerContent}>
        <div className={styles.productiveImg}>
          <img src={img} alt="" />
        </div>
        <div className={styles.mainContent}>
          <h2> Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. <br /> <br />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <br />
          <div className={styles.clicking}>
            <a href="/">See how Fylo works</a>
            <img src={arrow}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
