import Footer from "./footer";
import Header from "./header";

import { useRouter } from "next/router";

const Main = ({ children }: any) => {
  const router = useRouter();
  const show = router.pathname !== "/dashboard";
  {
    /* TODO: Separate dashboard and regular nav */
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
