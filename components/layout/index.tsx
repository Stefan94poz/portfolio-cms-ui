import Footer from "./footer";
import Header from "./header";

import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const show = router.pathname !== "/dashboard";

  return (
    <>
      {show && <Header />}
      {children}
      {show && <Footer />}
    </>
  );
};

export default Layout;
