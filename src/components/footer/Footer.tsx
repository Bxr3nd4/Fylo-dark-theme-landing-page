import styles from "../footer/Footer.module.css";
import iconLocation from "../../assets/icon-location.svg";
import iconPhone from "../../assets/icon-phone.svg";
import iconEmail from "../../assets/icon-email.svg";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.imgLogo}>
          <img src={logo} />
        </div>

        <div className={styles.top}>
          <div className={styles.description}>
            <img src={iconLocation} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={styles.description}>
            <img src={iconPhone} />
            <p>+1-543-123-4567</p>
          </div>
          <div className={styles.description}>
            <img src={iconEmail} />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <br />
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className={styles.social}>
          <div className={styles.socialIcons}>
          
          </div>
          <div className={styles.socialIcons}>

          </div>
          <div className={styles.socialIcons}>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
