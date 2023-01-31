import { useEffect, useState } from "react";
import Pages from "./pages";
import classes from "./styles.module.scss";

const Nav = () => {
  const [toggle, settoggle] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const reportWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.onresize = reportWindowSize;
  });

  // Add styles mobile and add navigation
  return (
    <>
      <div>
        <button className={classes.mobile}>asd</button>
        <Pages />
      </div>
    </>
  );
};

export default Nav;
