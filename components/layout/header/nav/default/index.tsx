import Link from "next/link";
import { pages } from "../../../../../constants/pages";
import classes from "./styles.module.scss";

const DefaultNav = () => {
  interface pagesI {
    name: string;
    link: string;
  }

  return (
    <>
      <ul className={classes.default}>
        {pages.map((page: pagesI) => (
          <li
            key={page.name}
            className={page.name === "login" ? classes.login : ""}
          >
            <Link href={page.link}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DefaultNav;