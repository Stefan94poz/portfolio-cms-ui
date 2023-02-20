import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import Main from "./main";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const show = router.pathname !== "/dashboard";
  {
    /* TODO: Separate dashboard and regular nav */
  }
  console.log("router.pathname", router.pathname !== "/dashboard");

  return (
    <>{show ? <Main>{children}</Main> : <Dashboard>{children}</Dashboard>}</>
  );
};

export default Layout;
