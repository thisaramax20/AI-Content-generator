"use client";
import { HistoryIcon, Home, SettingsIcon, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = () => {
  const path = usePathname();

  const menuLists = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: HistoryIcon,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: SettingsIcon,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Logo Section */}
      <div className="flex justify-center mb-8">
        <Image src="logo.svg" alt="logo" height={120} width={120} />
      </div>

      {/* Menu List Section */}
      <ul className="space-y-6">
        {menuLists.map((menu, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ${
              path == menu.path && "bg-purple-400/30"
            }`}
          >
            <menu.icon className="text-blue-500 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-800">{menu.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
