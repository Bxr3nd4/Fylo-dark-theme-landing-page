import "./Header.module.css";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.header}>
          <nav>
            <ul className={styles.list}>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Team</a>
              </li>
              <li>
                <a href="/">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
