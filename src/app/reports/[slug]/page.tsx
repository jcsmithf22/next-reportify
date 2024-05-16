import { getReport } from "@/lib/reports/reports";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Section,
} from "@radix-ui/themes";
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";
import { ReportDetailCard } from "@/components/ReportDetailCard";
import { DotsHorizontalIcon, TrashIcon } from "@radix-ui/react-icons";
import { ReportDropdown } from "@/components/ReportCard/ReportDropdown";

export default function Reports({ params }: { params: { slug: string } }) {
  const report = getReport(parseInt(params.slug));

  if (!report) {
    return null;
  }

  return (
    <Container
      size="4"
      px={{ initial: "4", sm: "6" }}
      pl={{ initial: "4", sm: "6", md: "282px" }}
    >
      <Section pt="80px">
        <Flex wrap="wrap" gap="6" my="4" justify="between" align="center">
          <Heading my="0">{report.name}</Heading>
          <Flex gap="1">
            <Button variant="solid">Edit Report</Button>
            <ReportDropdown horizontal={true} variant="soft" color="gray" />
          </Flex>
        </Flex>
        <Flex
          mt="6"
          gap={{ initial: "4", sm: "6" }}
          direction={{ initial: "column", sm: "row" }}
        >
          <Box>
            <ReportDetailCard report={report} />
          </Box>
          <Accordion />
        </Flex>
      </Section>
    </Container>
  );
}

const Accordion = () => {
  return (
    <AccordionRoot collapsible={true}>
      <AccordionItem value="general-information">
        <AccordionTrigger>General Information</AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="customer-information">
        <AccordionTrigger>Customer Complaint Information</AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d0">
        <AccordionTrigger prefix="D0">Symptoms</AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d1">
        <AccordionTrigger prefix="D1">Team Members</AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d2">
        <AccordionTrigger prefix="D2">Problem</AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d3">
        <AccordionTrigger prefix="D3">
          Interim Containment Actions
        </AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d4">
        <AccordionTrigger prefix="D4">Root Causes</AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d5">
        <AccordionTrigger prefix="D5">
          Permanent Corrective Actions
        </AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d6">
        <AccordionTrigger prefix="D6">
          Prevent Recurrence Actions
        </AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d7">
        <AccordionTrigger prefix="D7">Recommendations</AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
      <AccordionItem value="d8">
        <AccordionTrigger prefix="D8">
          Team and Individual Recognition
        </AccordionTrigger>
        <AccordionContent>Test</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};
