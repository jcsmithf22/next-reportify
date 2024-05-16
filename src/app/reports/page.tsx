"use client";

import {
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Section,
  Table,
  VisuallyHidden,
} from "@radix-ui/themes";
import { reports } from "@/lib/reports/reports";
import { Link } from "@/components/Link";
import { ReportDropdown } from "@/components/ReportCard/ReportDropdown";
import styles from "./reports.module.css";
import React from "react";
import { GearIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { FilterButton } from "@/components/FilterButton/FilterButton";

const reportState = reports.map((report) => ({
  ...report,
  checked: false,
}));

export default function Reports() {
  // Move to row component
  const [reports, setReports] = React.useState(reportState);
  const [allSelected, setAllSelected] = React.useState(false);

  const toggleSelectedRow = (id: number) => {
    setReports(
      reports.map((report) =>
        report.id === id ? { ...report, checked: !report.checked } : report,
      ),
    );
  };

  const toggleAllSelected = () => {
    setAllSelected(!allSelected);
    setReports(reports.map((report) => ({ ...report, checked: !allSelected })));
  };

  return (
    <Container
      size="4"
      px={{ initial: "4", sm: "6" }}
      pl={{ initial: "4", sm: "6", md: "282px" }}
    >
      <Section pt="80px">
        <Flex wrap="wrap" gap="6" my="4" justify="between" align="center">
          <Heading my="0">Reports</Heading>
          <Flex gap="1">
            <Button variant="solid">Create Report</Button>
            <FilterButton />
            <Button variant="soft" color="gray">
              <ListBulletIcon /> Sort
            </Button>
            <IconButton variant="soft" color="gray">
              <GearIcon />
            </IconButton>
          </Flex>
        </Flex>
        <Table.Root mt="6" variant="surface" className={styles.TableRoot}>
          <Table.Header className={styles.TableHeader}>
            <Table.Row>
              <Table.ColumnHeaderCell className={styles.ActionCell}>
                <Flex
                  m="-2"
                  py="2"
                  px="2"
                  justify="center"
                  align="center"
                  asChild
                >
                  <label>
                    <Checkbox
                      checked={allSelected}
                      onCheckedChange={toggleAllSelected}
                    />
                  </label>
                </Flex>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Owner</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Due Date</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Edited At</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <VisuallyHidden>Actions</VisuallyHidden>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {reports.map((report) => (
              <Table.Row
                key={report.id}
                style={{
                  background: report.checked ? "var(--accent-a3" : "inherit",
                }}
              >
                <Table.RowHeaderCell className={styles.ActionCell}>
                  <Flex
                    m="-2"
                    py="2"
                    px="2"
                    justify="center"
                    align="center"
                    asChild
                  >
                    <label>
                      <Checkbox
                        checked={report.checked}
                        onCheckedChange={() => toggleSelectedRow(report.id)}
                      />
                    </label>
                  </Flex>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Link href={`/reports/${report.id}`}>{report.name}</Link>
                </Table.Cell>
                <Table.Cell>{report.owner}</Table.Cell>
                <Table.Cell>{report.due_date}</Table.Cell>
                <Table.Cell>{report.created_date}</Table.Cell>
                <Table.Cell>{report.edited_date}</Table.Cell>
                <Table.Cell className={styles.ActionCell}>
                  <ReportDropdown horizontal />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Section>
    </Container>
  );
}
