"use client";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/"><Image src="/logo.png" alt="SPARK Logo" width={60} height={60} ></Image></Link>
      </nav>

      <nav className={styles.nav}>
        <button className={styles.btnsecondary} onClick={handleSignOut} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", padding: "0" }}>
          Sign Out
        </button>
      </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>SPARK</h1>
        <p className={styles.intro}>Welcome to SPARK, Smart Planner and Roadmap Kit! </p>
        <p className={styles.introP1}>SPARK is an AI-powered tool designed to help you create personalized learning plans and roadmaps for mastering new skills. Whether you're a student, professional, or lifelong learner, SPARK provides tailored recommendations and resources to guide your learning journey effectively.</p>
      </main>
    </div>
  );
}
