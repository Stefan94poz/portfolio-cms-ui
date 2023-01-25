import classes from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <p className={classes.footer}>
        Project done by{" "}
        <a href="https://www.linkedin.com/in/stefan-stevic-dev/">
          Stefan Stevic
        </a>
      </p>
    </>
  );
};

export default Footer;
