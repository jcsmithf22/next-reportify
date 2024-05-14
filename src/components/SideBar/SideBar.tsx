"use client";

import { Box, Button, ScrollArea } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

type SideBarLinkType = {
  name: string;
  url: string;
};

const SideBarLinks: SideBarLinkType[] = [
  {
    name: "Dashboard",
    url: "/",
  },
  {
    name: "Reports",
    url: "/reports",
  },
  {
    name: "Teams",
    url: "/teams",
  },
];

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <Box
      position="fixed"
      top="0"
      bottom="0"
      width="250px"
      pt="47px"
      display={{ initial: "none", md: "block" }}
      className={styles.SideBarRoot}
    >
      <ScrollArea>
        <Box px="3" pt="3">
          {SideBarLinks.map((link, i) => (
            <SideBarLink link={link} key={i} active={pathname === link.url} />
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
};

const SideBarLink = ({
  link,
  active,
}: {
  link: SideBarLinkType;
  active: boolean;
}) => {
  return (
    <Box
      asChild
      py="2"
      px="3"
      mb="1px"
      className={clsx(styles.Link, active && styles.ActiveLink)}
    >
      <Link href={link.url}>{link.name}</Link>
    </Box>
  );
};
