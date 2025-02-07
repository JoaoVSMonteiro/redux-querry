"use client";

import MenuLink from "../menuLink/MenuLink";

export default function NavBar() {
  return (
    <nav className="h-20 flex items-center justify-between px-6 gap-6 bg-blue-900 text-white">
      <div className="flex gap-4">
        <MenuLink texto="Home" href="/" />
        <MenuLink texto="Galeria" href="/pages/galeria" />
        <MenuLink texto="Redux" href="/pages/reduxQuerry" />
      </div>
    </nav>
  );
}
