import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <button className={styles.reservationBtn}>즉시 예약</button>
      </div>
    </footer>
  );
};

export default Footer;
