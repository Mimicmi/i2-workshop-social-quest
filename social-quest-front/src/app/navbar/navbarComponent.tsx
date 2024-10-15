"use client";

import {
    Avatar,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Image,
    Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMdTrophy, IoIosHelpCircleOutline } from "react-icons/io";

export default function NavbarComponent() {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <Link href="/path" className="flex items-center">
                        <Image
                            src="/logo-social-quest.jpeg"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                </NavbarBrand>
                <NavbarContent className="sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <div color="foreground" className="flex items-center">
                            <FaFireFlameCurved size={18} />
                            <span className="mt-1 ml-1">5</span>
                        </div>
                    </NavbarItem>
                    <NavbarItem>
                        <div className="flex items-center">
                            <IoMdTrophy size={20} className="mt-1" />
                            <span className="mt-1 ml-1">29</span>
                        </div>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="lg:flex">
                        <Link href="/chat" className="flex items-center">
                            <IoIosHelpCircleOutline size={53} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/profile" className="flex items-center">
                            <Avatar
                                isBordered
                                radius="full"
                                size="md"
                                src="/profile-picture.png"
                            />
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Divider />
        </>
    );
}
