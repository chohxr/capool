import styles from "./Header.module.css";
import LoginBtn from "./LoginBtn";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>Carpool</div>
        <LoginBtn />
      </div>
    </header>
  );
};

export default Header;
