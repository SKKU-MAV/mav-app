"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const currentPath = usePathname(); // browser api 에 의존하므로 client component 로 전환해야 함
  const links = [
    { label: "Activities", href: "/activities" },
    { label: "Members", href: "/members" },
    { label: "Recruitment", href: "/recruitment" },
  ];
  return (
    <header id="main-header">
      <Link href="/" id="page-logo">
        MAV
      </Link>
      <nav>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              className={`${
                link.href === currentPath ? "text-zinc-800" : "text-zinc-500"
              } hover:text-zinc-800 transition-colors`}
              key={link.href}
              href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
