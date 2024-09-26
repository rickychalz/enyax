// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="max-w-screen-lg flex justify-center mx-auto sticky top-0 z-50">
        {/* Navbar */}
        <Navbar />
      </div>
      <div className="mx-auto flex max-w-screen-lg flex-col h-screen justify-between px-6 md:px-8 xl:px-4">
        {/* Main content area where routes will be rendered */}
        <main>
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
