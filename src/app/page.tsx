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
      <Section pt="80px" pb="0">
        <Heading>Pinned</Heading>
        <Grid
          mt="6"
          columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
          gap="4"
        >
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </Grid>
      </Section>
      <Section pb="0" pt="6">
        <Heading>Recent</Heading>
        <Grid
          mt="6"
          columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
          gap="4"
        >
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </Grid>
      </Section>
      <Section pt="6">
        <Heading>Pending Actions</Heading>
        <Grid
          mt="6"
          columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
          gap="4"
        >
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
