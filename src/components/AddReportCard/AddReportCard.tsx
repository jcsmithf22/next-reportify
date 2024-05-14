import { Avatar, Box, Card, Flex, IconButton, Text } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

export const AddReportCard = () => {
  return (
    <Box>
      <Card size="3">
        <IconButton variant="ghost" size="4" aria-label="Add report">
          <PlusIcon width="24" height="24" />
        </IconButton>
      </Card>
    </Box>
  );
};
