import Head from "next/head";
import AboutMe from "../components/sections/aboutMe";
import Blog from "../components/sections/blog";
import Hero from "../components/sections/hero";
import MyWork from "../components/sections/myWork";
import Services from "../components/sections/services";
import Testimonials from "../components/sections/testimonials";
import { posts, projects } from "../helpers/api/Api";
import classNamees from "./Home.module.css";

const Home = ({ projects, posts }: any) => {
  return (
    <>
      <Head>
        <title>Stefan Stevic Portfolio</title>
        <meta name="description" content="Stefan Stevic CV" />
      </Head>
      <main className="mx-auto ">
        <Hero />
        <Services />
        <MyWork data={projects} />
        <AboutMe />
        <Testimonials />
        <Blog posts={posts} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const getProjects = await projects.findAll();
  const getPosts = await posts.findAll();

  return { props: { projects: getProjects, posts: getPosts } };
}

export default Home;
