import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
