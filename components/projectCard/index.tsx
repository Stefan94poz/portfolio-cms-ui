import { log } from "console";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import classes from "./styles.module.scss";

const ProjectCard = ({ project }: any) => {
  const { id, name, stack, slug } = project;
  const stacks = stack?.map(
    (item: string, index: number) =>
      item + (index === Object.keys(stack).length - 1 ? "" : " - ")
  );

  // FIXME: Remove or condition when you change all slugs
  return (
    <Link href={`projects/${slug || ""}`}>
      <div className={classes.projectCard} key={id}>
        <Image src="/project.jpg" alt="Logo" width={340} height={340} />
        <h4>{name}</h4>
        <p>{stacks}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
