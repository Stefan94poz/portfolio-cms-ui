import Image from "next/image";
import classes from "./styles.module.scss";

interface ProjectI {
  id: string;
  name: string;
  stack: string[];
  packages: string[];
  github: string;
  description: string;
  devId: string;
  createdAt: string;
  updatedAt: string;
}

const MyWork = ({ data }: any) => {
  return (
    <>
      <h1>MyWork</h1>
      <div className={classes.projectWraper}>
        {data?.map((project: ProjectI) => (
          <div className={classes.projectCard} key={project.id}>
            <Image src="/next.svg" alt="Logo" width={340} height={340} />
            <h1>{project.name}</h1>
            <h1>{project.stack}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyWork;
