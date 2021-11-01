import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AOE4 - Buildorders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-4">
        <div>
          <h1 className="page-title">Buildorders</h1>
        </div>
      </header>
      <main className={`has-border border-b-2 ${styles.main}`}>
        <div className="mt-8 container mx-auto grid grid-cols-4 grid-rows-2 gap-4">
          <Link href="/civilizations/english">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>English</h3>
            </a>
          </Link>
          <Link href="/civilizations/french">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>French</h3>
            </a>
          </Link>
          <Link href="/civilizations/hre">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>Holy Roman Empire </h3>
            </a>
          </Link>
          <Link href="/civilizations/rus">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>Rus</h3>
            </a>
          </Link>
          <Link href="/civilizations/mongols">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>Mongols</h3>
            </a>
          </Link>
          <Link href="/civilizations/dheli">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>Dheli Sultanate</h3>
            </a>
          </Link>
          <Link href="/civilizations/chinese">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>Chinese</h3>
            </a>
          </Link>
          <Link href="/civilizations/abbasid">
            <a className="h-40 bg-bluedark flex items-center justify-center border-2 border-bluedark transition hover:border-yellow cursor-pointer">
              <h3>Abbasid Dynasty</h3>
            </a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className="container mx-auto py-2 flex justify-between">
          <h4 className="text-xs">Version 0.1 Alpha</h4>
          <h4 className="text-xs">2021 Copyright</h4>
        </div>
      </footer>
    </div>
  );
}
