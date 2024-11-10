import styles from "./Header.module.css";
import LoginBtn from "./LoginBtn";
import { ReactComponent as Bell } from "./bell.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <button className={styles.logo}>Carpool</button>
        <div className={styles.rightContainer}>
          <Bell width={30} height={30} style={{ cursor: "pointer" }} />
          <LoginBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
