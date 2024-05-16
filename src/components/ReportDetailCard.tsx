import {
  Badge,
  Box,
  Card,
  Code,
  DataList,
  Flex,
  IconButton,
} from "@radix-ui/themes";
import { ReportType } from "@/lib/reports/reports";
import Link from "next/link";
import { CopyIcon } from "@radix-ui/react-icons";

interface ReportDetailCardProps {
  report: ReportType;
}

export const ReportDetailCard = ({ report }: ReportDetailCardProps) => {
  return (
    <Box width={{ initial: "100%", sm: "300px" }} flexShrink="0">
      <Card size="2">
        <DataList.Root>
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">Status</DataList.Label>
            <DataList.Value>
              <Badge color="orange" variant="soft" radius="full">
                Open
              </Badge>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Owner</DataList.Label>
            <DataList.Value>{report.owner}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Created Date</DataList.Label>
            <DataList.Value>{report.created_date}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Due Date</DataList.Label>
            <DataList.Value>{report.due_date}</DataList.Value>
          </DataList.Item>
          <DataList.Item style={{ gridTemplateColumns: "1fr" }}>
            <DataList.Label minWidth="88px">Description</DataList.Label>
            <DataList.Value>{report.description}</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>
    </Box>
  );
};
