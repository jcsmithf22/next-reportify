import {
  Avatar,
  Box,
  Card,
  ContextMenu,
  Flex,
  Link as StyledLink,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import { getOwnerInitials, ReportType } from "@/lib/reports/reports";
import Link from "next/link";
import { ReportDropdown } from "@/components/ReportCard/ReportDropdown";

export const ReportCard = ({ report }: { report: ReportType }) => {
  return (
    <ReportContextMenu>
      <Box minWidth="240px" flexShrink="0">
        <Card size="2">
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              radius="full"
              fallback={getOwnerInitials(report.owner)}
            />
            <Box overflow="clip" flexGrow="1">
              <StyledLink asChild>
                <Link href="#">
                  <Tooltip content={report.name}>
                    <Text as="div" size="2" weight="medium" truncate>
                      {report.name}
                    </Text>
                  </Tooltip>
                </Link>
              </StyledLink>
              <Text as="div" size="2" color="gray">
                {report.due_date}
              </Text>
            </Box>
            <ReportDropdown />
          </Flex>
        </Card>
      </Box>
    </ReportContextMenu>
  );
};

const ReportContextMenu = ({ children }: React.PropsWithChildren) => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Move to project…</ContextMenu.Item>
            <ContextMenu.Item>Move to folder…</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Advanced options…</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />
        <ContextMenu.Item>Share</ContextMenu.Item>
        <ContextMenu.Item>Add to favorites</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
};
