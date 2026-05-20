import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/about">About</Link>
      </nav>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/signup">Sign Up</Link>
        <Link className={styles.link} href="/login">Login</Link>
      </nav>
      </header>

      <main className={styles.main}>


      </main>
    </div>
  );
}
