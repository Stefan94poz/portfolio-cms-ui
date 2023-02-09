import moment from "moment";
import Link from "next/link";
import classes from "./styles.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const thisYear = moment().format("YYYY");
  return (
    <div className={classes.footer}>
      <div className={`container  mx-auto ${classes.footerWraper}`}>
        <div className={classes.socials}>
          <ul>
            <li>
              <Link href={"https://www.linkedin.com/in/stefan-stevic-dev/"}>
                <LinkedInIcon fontSize="inherit" />
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/Stefan94poz"}>
                <GitHubIcon fontSize="inherit" />
              </Link>
            </li>
            <li>
              <Link href={"mailto:stefan.s.webdev@gmail.com"}>
                <EmailIcon fontSize="inherit" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.allRights}>
          <p>©{thisYear} Stefan Stevic - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
