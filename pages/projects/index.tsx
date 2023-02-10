import { ProjectI } from "../../constants/interface";
import { projects as allProjects } from "../../helpers/api/Api";

const Projects = ({ projects }: any) => {
  console.log({ projects });
  return (
    <>
      <h1>etst</h1>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const projects = await allProjects();

  return { props: { projects } };
}
export default Projects;
