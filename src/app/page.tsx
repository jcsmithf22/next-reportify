import { Container, Flex, Grid, Heading, Section } from "@radix-ui/themes";
import { ReportCard } from "@/components/ReportCard/ReportCard";
import { getRecentReports } from "@/lib/reports/reports";

export default function Home() {
  const reports = getRecentReports(4);

  return (
    <Container
      size="4"
      px={{ initial: "4", sm: "6" }}
      pl={{ initial: "4", sm: "6", md: "282px" }}
    >
      <Section pb="0">
        <Heading>Pinned</Heading>
        <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap="4">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </Grid>
      </Section>
      <Section pb="0">
        <Heading>Recent</Heading>
        <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap="4">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </Grid>
      </Section>
      <Section>
        <Heading>Pending Actions</Heading>
        <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap="4">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
