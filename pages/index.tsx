import Head from "next/head";
import AboutMe from "../components/aboutMe";
import Hero from "../components/hero";
import MyWork from "../components/myWork";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import { projects } from "../helpers/api/Api";
import classNamees from "./Home.module.css";

const Home = ({ data }: any) => {
  // TODO: Create project cards
  return (
    <>
      <Head>
        <title>Stefan Stevic Portfolio</title>
        <meta name="description" content="Stefan Stevic CV" />
      </Head>
      <main className="mx-auto ">
        <Hero />
        <Services />
        <MyWork data={data} />
        <AboutMe />
        <Testimonials />
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
