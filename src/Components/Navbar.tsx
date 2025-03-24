"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "./lib/Utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#">Digital Marketing</HoveredLink>
                        <HoveredLink href="#">Website Development</HoveredLink>
                        <HoveredLink href="#">Graphic Designing</HoveredLink>
                        <HoveredLink href="#">Google Ads</HoveredLink>
                        <HoveredLink href="#">Facebook Ads</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us" />
                </Link>


            </Menu>

        </div>
    )
}

export default Navbar;
