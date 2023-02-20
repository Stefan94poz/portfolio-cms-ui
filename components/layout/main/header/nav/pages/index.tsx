import Link from "next/link";
import { pages } from "../../../../../../constants/pages";

import classes from "./styles.module.scss";

const Pages = ({ className }: any) => {
  interface pagesI {
    name: string;
    link: string;
  }

  return (
    <>
      <ul className={`${classes.pages} ${className}`}>
        {pages.map((page: pagesI) => (
          <li key={page.name}>
            <Link href={page.link}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pages;
