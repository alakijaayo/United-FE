import Footer from "../components/Footer";
import Header from "../components/Header";
import { StyledBody } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <StyledBody>{children}</StyledBody>
      <Footer />
    </>
  );
}

export default Layout;
