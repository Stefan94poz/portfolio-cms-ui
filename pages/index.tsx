import Head from "next/head";
import Image from "next/image";
import MyWork from "../components/myWork";
import { PROJECTS } from "../constants/api";
import { projects } from "../helpers/api/Api";
import styles from "../styles/Home.module.css";

const Home = ({ data }: any) => {
  // TODO: Create project cards
  return (
    <>
      <Head>
        <title>Stefan Stevic Portfolio</title>
        <meta name="description" content="Stefan Stevic CV" />
      </Head>
      <main className={styles.main}>
        <h1>This is homepage</h1>
        <MyWork data={data} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await projects();

  return { props: { data } };
}

export default Home;
