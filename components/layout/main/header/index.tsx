import { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./styles.module.scss";
import Nav from "./nav";
import Image from "next/image";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const offSet = scroll >= 85 ? "sticky" : "";
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <nav className={`${classes.nav} ${offSet}`}>
        <div className={classes.navWraper}>
          <Link href="/" className={classes.logo}>
            <Image src="/next.svg" alt="Logo" width={150} height={50} />
          </Link>
          <Nav />
        </div>
      </nav>
    </>
  );
};

export default Header;
