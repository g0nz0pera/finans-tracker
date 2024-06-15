'use client'
import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {MoonIcon, SunIcon} from 'lucide-react';

type ThemeSwitcherProps = {
    className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className } : ThemeSwitcherProps) => {

    const [isDarkMode, setDarkMode] = React.useState(false)

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={className} onClick={() => {
                    setDarkMode(prevValue => !prevValue);
                    document.body.classList.toggle("dark")
                }}>
                    {isDarkMode ? <MoonIcon /> : <SunIcon />}
                </TooltipTrigger>
                <TooltipContent>
                    {isDarkMode ? "Enable Light Mode"  : "Enable Dark Mode"}
                </TooltipContent>

            </Tooltip>
        </TooltipProvider>
    );
};

export default ThemeSwitcher