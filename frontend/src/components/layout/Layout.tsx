import React from "react";
import { Header } from "./headers";
import { Footer } from "./footers";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="bg-white flex flex-col min-h-screen">
    <ToastContainer />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
