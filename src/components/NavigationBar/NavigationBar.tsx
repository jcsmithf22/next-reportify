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
      <svg id="svg" width="26" height="26" viewBox="0, 0, 400,400">
        <g id="svgg">
          <path
            id="path0"
            d="M29.688 40.228 C 29.688 40.870,63.611 75.323,105.072 116.791 L 180.457 192.188 103.906 192.188 L 27.355 192.188 111.719 276.563 L 196.083 360.938 283.198 360.938 C 331.111 360.938,370.313 360.413,370.313 359.772 C 370.313 359.130,336.389 324.677,294.928 283.209 L 219.543 207.813 296.094 207.813 L 372.645 207.813 288.281 123.438 L 203.917 39.063 116.802 39.063 C 68.889 39.063,29.688 39.587,29.688 40.228 "
            stroke=""
            fill="var(--gray-12)"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
      <Text size="4" weight="medium" ml="1">
        Reportify
      </Text>
    </Flex>
  );
};
