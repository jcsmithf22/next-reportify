import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  IconButton,
  Popover,
  Separator,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { MixerHorizontalIcon, PlusIcon } from "@radix-ui/react-icons";
import React from "react";

export const FilterButton = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton variant="soft" color="gray">
          <MixerHorizontalIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content width="360px">
        <Flex direction="column" gap="1">
          <Text size="2">No filters applied to this view</Text>
          <Text size="1" color="gray">
            Add a column below to filter the view
          </Text>
        </Flex>
        <Box mx="-4" py="3">
          <Separator size="4" />
        </Box>
        <Flex justify="between" align="center" mb="-1">
          <Button size="1" variant="ghost">
            <PlusIcon /> Add filter
          </Button>
          <Button size="1" disabled>
            Apply filter
          </Button>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};
