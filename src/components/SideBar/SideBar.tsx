"use client";

import {
  Box,
  Button,
  Dialog,
  Flex,
  IconButton,
  ScrollArea,
} from "@radix-ui/themes";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { Cross1Icon } from "@radix-ui/react-icons";

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
      pt="48px"
      display={{ initial: "none", md: "block" }}
      className={styles.SideBarRoot}
    >
      <ScrollArea>
        <Box px="3" pt="4">
          {SideBarLinks.map((link, i) => (
            <SideBarLink link={link} key={i} active={pathname === link.url} />
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
};

export const MobileSideBar = () => {
  const pathname = usePathname();
  return (
    <Box>
      <ScrollArea>
        <Flex justify="end" p="3">
          <Dialog.Close>
            <IconButton variant="soft">
              <Cross1Icon />
            </IconButton>
          </Dialog.Close>
        </Flex>
        <Box px="3" pt="4">
          {SideBarLinks.map((link, i) => (
            <SideBarLink
              link={link}
              key={i}
              active={pathname === link.url}
              mobile
            />
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
};

const SideBarLink = ({
  link,
  active,
  mobile = false,
}: {
  link: SideBarLinkType;
  active: boolean;
  mobile?: boolean;
}) => {
  return (
    <Box
      asChild
      py="2"
      px="3"
      mb="1px"
      className={clsx(
        styles.Link,
        active && styles.ActiveLink,
        mobile && styles.MobileLink,
      )}
    >
      <Link href={link.url}>{link.name}</Link>
    </Box>
  );
};
