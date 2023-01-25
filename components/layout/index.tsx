import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;