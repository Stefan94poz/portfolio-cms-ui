import { useEffect, useState } from "react";
import Pages from "./pages";
import classes from "./styles.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [toggle, settoggle] = useState(false);

  // TODO: Add styles mobile and add navigation
  return (
    <>
      <div className={classes.main}>
        <Pages />
      </div>

      <MenuIcon
        onClick={() => settoggle((old) => !old)}
        className={classes.mobile}
      />

      {/* Mobile navigation */}
      <div className={`${toggle ? "toggle" : ""} ${classes.mobileWrap}`}>
        <CloseIcon
          onClick={() => settoggle((old) => !old)}
          className={classes.close}
        />
        <Link href="/" className={classes.logo}>
          <Image src="/next.svg" alt="Logo" width={150} height={50} />
        </Link>
        <Pages className={toggle ? "toggle" : ""} />
      </div>
    </>
  );
};

export default Nav;
