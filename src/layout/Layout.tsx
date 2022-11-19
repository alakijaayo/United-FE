import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

function Layout({ children, ariaLabel, className }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  ariaLabel: null,
  className: null,
};

export default Layout;
