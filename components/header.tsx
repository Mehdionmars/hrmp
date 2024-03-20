/* eslint-disable react-hooks/rules-of-hooks */

'use client';
import classNames from "classnames";
import { BsList } from "react-icons/bs"
import { ThemeSwitcher } from "./theme-switcher";
import { Input } from "./ui/input";
import { UserButton } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs';


export default function Header() {
    const { userId } = auth();

    return (
        <div className="bg-gray-600 text-neutral-100">
            <div className="container mx-auto flex items-center justify-between py-4">
             <link href="/home">home</link>
             <div>
                {userId ? (
                    <div className="flex gap-4 items-center">
                        <link href="/dashboard">Dashboard</link>
                        <UserButton/>   
            </div>
    ) : (
        <div className="flex gap-4 items-center">
                <link href="/sign-up">Sign up</link>
                <link href="/sign-in">Sign in</link>
            </div>
    )}
        </div>
      </div>
    </div>
    );
}

   
    const headerStyle = "your-header-style";

    (
        <header className={headerStyle}>
            <div className="container mx-auto">
                <div className="p-2">
                    <ThemeSwitcher></ThemeSwitcher>
                </div>
                <div className="h-10 w-10 rounded-full bg-sidebar-muted flex items-center justify-center text-center">
                </div>
            </div>
        </header>
    )