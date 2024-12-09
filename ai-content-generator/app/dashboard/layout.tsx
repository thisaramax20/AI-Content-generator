import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Section */}
      <div className="md:w-64 fixed inset-0 z-10 bg-white shadow-lg hidden md:block">
        <SideNav />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300 ease-in-out">
        {/* Header */}
        <Header />

        {/* Main Content (Children) */}
        <main className="p-6 bg-gray-50 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default layout;
