"use client";

import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./accordion.module.css";
import { Text } from "@radix-ui/themes";

interface AccordionRootProps {
  children: React.ReactNode;
  className?: string;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
}

export const AccordionRoot = ({
  children,
  className,
  type = "single",
  collapsible = false,
  defaultValue,
}: AccordionRootProps) => {
  return (
    // @ts-ignore
    <RadixAccordion.Root
      type={type}
      className={clsx(styles.AccordionRoot, className)}
      collapsible={collapsible}
      defaultValue={defaultValue}
    >
      {children}
    </RadixAccordion.Root>
  );
};

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadixAccordion.Item
      ref={ref}
      className={clsx(styles.AccordionItem, className)}
      {...props}
    />
  );
});

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & { prefix?: string }
>(({ children, className, prefix, ...props }, forwardedRef) => (
  <RadixAccordion.Header className={styles.AccordionHeader}>
    <RadixAccordion.Trigger
      className={clsx(styles.AccordionTrigger, className)}
      {...props}
      ref={forwardedRef}
    >
      <div>
        {prefix && (
          <Text color={"gray"} mr="2">
            {prefix}
          </Text>
        )}
        {children}
      </div>
      <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));

export const AccordionContent = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Content
    className={clsx(styles.AccordionContent, className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={styles.AccordionContentText}>{children}</div>
  </RadixAccordion.Content>
));

AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
AccordionItem.displayName = "AccordionItem";
