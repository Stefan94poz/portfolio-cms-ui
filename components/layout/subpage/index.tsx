import Head from "next/head";
import { SubpageProps } from "../../../constants/interface";
import classes from "./styles.module.scss";

const Subpage = (props: SubpageProps) => {
  const { children, title, description } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classes.pageHeader}>
        <h1>{title}</h1>
      </header>
      <section className={classes.section}>{children}</section>
    </>
  );
};

export default Subpage;
