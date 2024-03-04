import styles from "../footer/Footer.module.css";
import iconLocation from "../../assets/icon-location.svg";
import iconPhone from "../../assets/icon-phone.svg";
import iconEmail from "../../assets/icon-email.svg";
import logo from "../../assets/logo.svg";
import EmailBanner from "../main/emailBanner/EmailBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <EmailBanner />
      <div className={styles.content}>
        <div className={styles.blank}></div>
        <div className={styles.imgLogo}>
          <img src={logo} />
        </div>
        <div className={styles.container}>
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
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                className={styles.icons}
              />
            </div>
            <div className={styles.socialIcons}>
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className={styles.icons}
              />
            </div>
            <div className={styles.socialIcons}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className={styles.icons}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
