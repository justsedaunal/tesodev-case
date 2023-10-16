import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AddNewRecord from "./add-new-record";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesodev Case</title>
        <meta name="description" content="Tesodev Frontend Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container" >
        <div className="add-new-record-container" >
          <AddNewRecord />
        </div>
        <div>
          <Image
            className=""
            src="/images/tesodev-logo.jpg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}
