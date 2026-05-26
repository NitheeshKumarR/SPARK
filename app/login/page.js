"use client"
import styles from "../page.module.css";
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn, signUp } from "@/lib/auth-client"


export default function Login() {
  const router = useRouter()
  const [error, setError] = useState("")

  // Login form state
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")


  const handleGoogleSignIn = async () => {
    setError("")
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      })
    } catch (err) {
      setError(err.message || "Failed to sign in with Google")
    }
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const result = await signIn.email({
        email: loginEmail,
        password: loginPassword,
      })
      if (result.error) {
        setError(result.error.message || "Login failed")
      } else {
        router.push("/dashboard")
      }
    } catch (err) {
      setError(err.message || "Login failed")
    }
  }


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
            <form className={styles.authform} onSubmit={handleEmailLogin}>
                <label htmlFor="email">Enter email:</label>
                <input type="email" id="email" name="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                <button type="submit">Login</button>
                <span>Don't have an account? <Link href="/signup">Sign Up</Link></span>
                <button type="button" onClick={handleGoogleSignIn}>Sign in with Google</button>
            </form>
        </div>

      </main>
    </div>
  );
}
