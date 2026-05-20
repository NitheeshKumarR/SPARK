import styles from "../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">Back to Home</Link>
      </nav>
      </header>
      <main className={styles.main}>
        <div>
            <h1>Sign Up</h1>
            <form className={styles.authform} action="/signup" method="POST">
                <label htmlFor="name">Enter username</label>
                <input type="name" id="name" name="name" required/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <button type="submit">Sign Up</button>
                <span>Already have an account? <Link href="/login">Login</Link></span>
            </form>
        </div>
      </main>
    </div>
  );
}