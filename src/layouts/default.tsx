import { ReactNode } from "react";
import { Header } from "../sections/header";
import { Footer } from "../sections/footer";

interface DefaultProps {
  children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default Default;
