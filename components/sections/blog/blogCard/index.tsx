import { log } from "console";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import classes from "./styles.module.scss";

const BlogCard = ({ post }: any) => {
  const { id, title, content, slug, createdAt } = post;
  const month = moment(createdAt).format("MMM");
  const day = moment(createdAt).format("DD");

  // TODO: Add hover on title
  return (
    <Link href={`blog/${slug}`}>
      <div className={classes.blogCard} key={id}>
        <Image src="/project.jpg" alt="Logo" width={540} height={360} />
        <div className={classes.date}>
          <p>{month}</p>
          <p>{day}</p>
        </div>
        <div className={classes.textWrap}>
          <h4>{title}</h4>
          <span>BY: Stefan Stevic</span>
          <p>{content}</p>

          <button className={classes.readMore}>Read More</button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
