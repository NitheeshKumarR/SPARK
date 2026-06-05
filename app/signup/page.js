"use client"
import styles from "../page.module.css";
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn, signUp } from "@/lib/auth-client"


export default function SignUp() {
  const router = useRouter()
  const [error, setError] = useState("")

  // Signup form state
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")

  const handleGoogleSignIn = async () => {
    setError("")
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
        fetchOptions: {
          onError: (ctx) => {
            setError(ctx.error.message || "Failed to sign in with Google")
          }
        }
      })
    } catch (err) {
      setError(err.message || "Failed to sign in with Google")
    }
  }

  const handleEmailSignup = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const result = await signUp.email({
        email: signupEmail,
        password: signupPassword,
        name: signupName,
        fetchOptions: {
          onError: (ctx) => {
            setError(ctx.error.message || "Signup failed")
          }
        }
      })
      if (result?.error) {
        setError(result.error.message || "Signup failed")
      } else {
        router.push("/login")
      }
    } catch (err) {
      setError(err.message || "Signup failed")
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
            <h1>Sign Up</h1>
            {error && (
              <p style={{ color: "red", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                {error}
              </p>
            )}
            <form className={styles.authform} onSubmit={handleEmailSignup}>
                <label htmlFor="name">Enter username</label>
                <input type="name" id="name" name="name" required value={signupName} onChange={(e) => setSignupName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" name="password" required value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
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