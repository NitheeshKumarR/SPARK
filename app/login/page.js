"use client"
import styles from "../page.module.css"
import { useState } from "react"
import { redirect } from "next/navigation"
import Link from "next/link"
import { signIn } from "@/lib/auth-client"

export default function Login() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

const handleGoogleSignIn = async () => {
  setError("")
  setIsLoading(true)
  const result = await signIn.social({
    provider: "google",
    callbackURL: "/dashboard",  // ← needed since you can't redirect() after OAuth
  })
  if (result?.error) {
    setError(result.error.message || "Failed to sign in with Google")
    setIsLoading(false)
  }
}

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    const result = await signIn.email({
      email: loginEmail,
      password: loginPassword,
    })
    if (result?.error) {
      setError(result.error.message || "Login failed")
      setIsLoading(false)
      return
    }
    redirect("/dashboard")
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form className={styles.authform} onSubmit={handleEmailLogin}>
            <label htmlFor="email">Enter email:</label>
            <input
              type="email" id="email" name="email" required
              value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password" id="password" name="password" required
              value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <span>Don't have an account? <Link href="/signup">Sign Up</Link></span>
            <button type="button" onClick={handleGoogleSignIn} disabled={isLoading}>
              {isLoading ? "Redirecting..." : "Sign in with Google"}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}