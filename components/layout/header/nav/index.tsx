import { useEffect, useState } from "react";
import DefaultNav from "./default";
import MobileNav from "./mobile";

const Nav = () => {
  const [toggle, settoggle] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const reportWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.onresize = reportWindowSize;
  });

  // Add styles mobile
  return (
    <>
      <DefaultNav />
      <MobileNav />
    </>
  );
};

export default Nav;
