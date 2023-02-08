import Head from "next/head";
import AboutMe from "../components/aboutMe";
import Blog from "../components/blog";
import Hero from "../components/hero";
import MyWork from "../components/myWork";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import { posts as allPosts, projects as allProjects } from "../helpers/api/Api";
import classNamees from "./Home.module.css";

const Home = ({ projects, posts }: any) => {
  console.log("posts", posts);

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
  const projects = await allProjects();
  const posts = await allPosts();
  console.log("projects", projects);
  console.log("posts", posts);
  return { props: { projects, posts } };
}

export default Home;
