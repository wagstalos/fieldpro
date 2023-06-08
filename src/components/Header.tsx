import styles from "../styles/Header.module.css";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className={styles.fp__header}>
      <img src={logo} alt="Logotipo fieldpro" />
    </header>
  );
}
