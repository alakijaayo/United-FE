import Footer from "../components/Footer";
import Header from "../components/Header";
import { Wrapper } from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}

export default Layout;
