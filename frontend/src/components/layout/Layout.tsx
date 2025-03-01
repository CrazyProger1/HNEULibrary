import React from "react";
import { Header } from "./headers";
import { Footer } from "./footers";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="h-screen bg-white">
    <ToastContainer />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
