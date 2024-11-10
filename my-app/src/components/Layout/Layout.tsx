import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />

      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
