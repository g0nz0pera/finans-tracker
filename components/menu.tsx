"use client"
import React from 'react';
import {Loader2, LogOut, BadgeDollarSign} from "lucide-react";
import ThemeSwitcher from "@/components/theme-switcher";
import MenuItem from "@/components/menu-item";
import {ClerkLoaded, ClerkLoading, useClerk, UserButton} from "@clerk/nextjs";
import { Button } from '@/components/ui/button';

const Menu = () => {
    const { signOut } = useClerk();

    return (
        <nav className="bg-muted overflow-auto p-2 flex flex-col">
            <header className="border-b dark:border-b-black border-b-emerald-300 pb-4">
                <h2 className="flex items-center">
                    <BadgeDollarSign size={40} className="text-emerald-500 mr-2"/> Finan Tracker
                </h2>
            </header>
            <ul className="py-4 grow">
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/transactions">Transactions</MenuItem>
            </ul>
            <footer className="flex gap-2 items-center m-2">
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="size-8 animate-spin text-slate-500"/>
                </ClerkLoading>
                <button onClick={() => signOut({redirectUrl: '/'})}>
                    <LogOut className="h-5 w-5 ml-2"/>
                </button>
                <ThemeSwitcher className="ml-auto"/>
            </footer>
        </nav>
    );
};

export default Menu;