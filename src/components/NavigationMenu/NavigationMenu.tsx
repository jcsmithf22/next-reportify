"use client";

import React from "react";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { clsx } from "clsx";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "./navigationmenu.module.css";
import Link from "next/link";

export const NavigationMenu = () => {
  return (
    <RadixNavigationMenu.Root className={styles.NavigationMenuRoot}>
      <RadixNavigationMenu.List className={styles.NavigationMenuList}>
        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
            Learn <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </RadixNavigationMenu.Trigger>
          <RadixNavigationMenu.Content className={styles.NavigationMenuContent}>
            <ul className={clsx(styles.List, styles.one)}>
              <li style={{ gridRow: "span 3" }}>
                <RadixNavigationMenu.Link asChild>
                  <Link className={styles.Callout} href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className={styles.CalloutHeading}>
                      Radix Primitives
                    </div>
                    <p className={styles.CalloutText}>
                      Unstyled, accessible components for React.
                    </p>
                  </Link>
                </RadixNavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </RadixNavigationMenu.Content>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
            Overview
            <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </RadixNavigationMenu.Trigger>
          <RadixNavigationMenu.Content className={styles.NavigationMenuContent}>
            <ul className={clsx(styles.List, styles.two)}>
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </RadixNavigationMenu.Content>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item className={styles.NavigationMenuTrigger}>
          <RadixNavigationMenu.Link href="https://github.com/radix-ui">
            Github
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Indicator
          className={styles.NavigationMenuIndicator}
        >
          <div className={styles.Arrow} />
        </RadixNavigationMenu.Indicator>
      </RadixNavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <RadixNavigationMenu.Viewport
          className={styles.NavigationMenuViewport}
        />
      </div>
    </RadixNavigationMenu.Root>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <RadixNavigationMenu.Link asChild>
      <a
        className={clsx(styles.ListItemLink, className)}
        {...props}
        ref={forwardedRef}
      >
        <div className={styles.ListItemHeading}>{title}</div>
        <p className={styles.ListItemText}>{children}</p>
      </a>
    </RadixNavigationMenu.Link>
  </li>
));

ListItem.displayName = "ListItem";
