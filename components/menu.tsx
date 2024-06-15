import React from 'react';
import {PersonStandingIcon} from "lucide-react";
import Link from "next/link";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import ThemeSwitcher from "@/components/theme-switcher";
import MenuItem from "@/components/menu-item";

const Menu = () => {
    return (
        <nav className="bg-muted overflow-auto p-2 flex flex-col">
            <header className="border-b dark:border-b-black border-b-emerald-300 pb-4">
                <h4 className="flex items-center">
                    <PersonStandingIcon size={40} className="text-emerald-500"/> Expen$e
                </h4>
            </header>
            <ul className="py-4 grow">
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/expenses">Expenses</MenuItem>
            </ul>
            <footer className="flex gap-2 items-center m-2">
                <Avatar>
                    <AvatarFallback className="bg-emerald-300 dark:bg-emerald-800">
                        GG
                    </AvatarFallback>
                </Avatar>
                <Link className="hover:underline" href="/">
                    LogOut
                </Link>
                <ThemeSwitcher className="ml-auto"/>
            </footer>
        </nav>
    );
};

export default Menu;