"use client";
import React from "react";
import Image from "next/image";
import { Loader2, LogOut, BadgeDollarSign } from "lucide-react";
import ThemeSwitcher from "@/components/theme-switcher";
import MenuItem from "@/components/menu-item";
import { ClerkLoaded, ClerkLoading, useClerk, UserButton } from "@clerk/nextjs";

const Menu = () => {
  const { signOut } = useClerk();

  return (
    <nav className="bg-muted overflow-auto p-2 flex flex-col">
      <header className="border-b dark:border-b-black border-b-emerald-300 pb-4">
        <div className="flex justify-center">
          <Image
            priority
            src="/logo-no-bg.png"
            height={100}
            width={100}
            alt="Finans Logo"
          />
        </div>
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/transactions">Transactions</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center m-2 justify-evenly">
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="size-8 animate-spin text-slate-500" />
        </ClerkLoading>
        <ThemeSwitcher className="ml-auto" />

        <button onClick={() => signOut({ redirectUrl: "/" })}>
          <LogOut className="h-5 w-5 ml-2" />
        </button>
      </footer>
    </nav>
  );
};

export default Menu;
