import { Flex, Text } from "@radix-ui/themes";
import styles from "./navigationbar.module.css";
import Image from "next/image";

export const NavigationBar = () => {
  return (
    <Flex
      py="2"
      px="3"
      className={styles.NavigationBarRoot}
      align="center"
      position="fixed"
      direction="row"
      top="0"
      width="100%"
    >
      <Image src="/logo-base-256x256.png" width="28" height="28" alt={"Logo"} />
      <Text size="4" weight="medium" ml="1">
        Reportify
      </Text>
    </Flex>
  );
};
