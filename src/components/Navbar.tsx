"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href={"/courses"}>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className={cn("flex flex-col space-y-4 text-sm")}>
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/">Basic Music Thoery</HoveredLink>
              <HoveredLink href="/">Advanced Composition</HoveredLink>
              <HoveredLink href="/">Songwriting</HoveredLink>
              <HoveredLink href="/">Music Production</HoveredLink>
            </div>
          </MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
