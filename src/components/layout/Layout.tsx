import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 layout-orbit" />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
