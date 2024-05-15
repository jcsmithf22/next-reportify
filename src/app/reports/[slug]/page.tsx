import { getReport } from "@/lib/reports/reports";
import { Container, Grid, Heading, Section } from "@radix-ui/themes";

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
      <Section>
        <Heading>{report.name}</Heading>
      </Section>
    </Container>
  );
}
