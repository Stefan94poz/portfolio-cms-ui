import Subpage from "../../components/layout/subpage";
import MyWork from "../../components/sections/myWork";
import ProjectCard from "../../components/sections/myWork/projectCard";
import { ProjectI } from "../../constants/interface";
import { projects } from "../../helpers/api/Api";
import classes from "./styles.module.scss";

const Projects = ({ projects }: any) => {
  return (
    <>
      <Subpage
        title={"Projects"}
        description="Stefan Stevic's finished projects"
      >
        <div className="container mx-auto">
          <div className={`${classes.projects} ${classes.flexGap}`}>
            {projects?.map((project: ProjectI) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Subpage>
    </>
  );
};

export async function getServerSideProps() {
  const getProjects = await projects.findAll();

  return { props: { projects: getProjects } };
}

export default Projects;
