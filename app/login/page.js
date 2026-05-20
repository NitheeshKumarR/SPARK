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
            <h1>Login</h1>
            <form className={styles.authform} action="/login" method="POST">
                <label htmlFor="name">Enter username or email:</label>
                <input type="name" id="name" name="name" required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
                <span>Don't have an account? <Link href="/signup">Sign Up</Link></span>
            </form>
        </div>

      </main>
    </div>
  );
}
