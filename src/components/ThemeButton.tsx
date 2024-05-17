"use client";

import { IconButton, Tooltip } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { DesktopIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import React from "react";

const themes = ["system", "light", "dark"];

const themeIcons: { [key: string]: React.ReactNode } = {
  system: <DesktopIcon />,
  light: <SunIcon />,
  dark: <MoonIcon />,
};

const findNextTheme = (theme: string | undefined) => {
  if (theme === undefined) return "system";
  const currentIndex = themes.indexOf(theme);
  const nextIndex = (currentIndex + 1) % themes.length;
  return themes[nextIndex];
};

export const ThemeButton = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  const nextTheme = findNextTheme(theme);

  React.useEffect(() => {
    setMounted(true);
  });

  React.useEffect(() => {
    if (resolvedTheme === "dark") {
      document
        .querySelector('meta[name="theme-color"]')!
        .setAttribute("content", "color(display-p3 0.067 0.067 0.074)");
    } else {
      document
        .querySelector('meta[name="theme-color"]')!
        .setAttribute("content", "#ffffff");
    }
  }, [resolvedTheme]);

  if (!mounted) {
    return (
      <IconButton m="8px" variant="ghost" color="gray" size="3" loading>
        <DesktopIcon />
      </IconButton>
    );
  }

  return (
    <Tooltip content={`Switch to ${nextTheme}`}>
      <IconButton
        m="8px"
        variant="ghost"
        color="gray"
        size="3"
        onClick={() => setTheme(nextTheme)}
      >
        {themeIcons[nextTheme]}
      </IconButton>
    </Tooltip>
  );
};
