import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AddNewRecord from "./add-new-record";
import Search from "./search";
import dataCarousel from "../data-carousel.json";
import Carousel from "./carousel";
import Footer from "./footer";
import data from "../data.json";
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
      <main className="container">
        <div className="add-new-record-container">
          <AddNewRecord />
        </div>
        <div className="logo-container">
          <Image
            className="logo"
            src="/images/tesodev-logo.jpg"
            alt="Next.js Logo"
            width={278}
            height={115}
            priority
          />
          <p className="logo-text"> Search app </p>
        </div>
        <div className="search-container">
        <div className="search-title-container">
          <p className="search-title">Find in records</p>
        </div>
          <Search data={data.data} />
        </div>
        <Carousel items={dataCarousel.items} />
        <div className="footer-container">
          <Footer />
        </div>
      </main>
    </>
  );
}

// import data from '../data.json';
//  import Search from "./search";

// const Home = () => {
//   return (
//     <div>
//       <h1>Search Example</h1>
//       <Search data={data.data} />
//     </div>
//   );
// };

// export default Home;
