export type ReportType = {
  id: number;
  name: string;
  description: string;
  body: string;
  owner: string;
  created_date: string;
  edited_date: string;
  due_date: string;
};

export const reports: ReportType[] = [
  {
    id: 10,
    name: "Q1 Sales Report",
    description: "Comprehensive analysis of sales performance in Q1",
    body: "In the first quarter of the year, our company witnessed a significant growth in sales across all product categories. The total revenue generated amounted to $1.5 million, representing a 20% increase compared to the same period last year...",
    owner: "John Doe",
    created_date: "2024-04-10",
    edited_date: "2024-04-15",
    due_date: "2024-04-20",
  },
  {
    id: 1,
    name: "Marketing Campaign Effectiveness",
    description:
      "Evaluation of the recent marketing campaign's impact on brand awareness and customer engagement",
    body: "The marketing campaign launched in March aimed to boost brand awareness and attract new customers. The campaign included a series of targeted ads on social media platforms, influencer partnerships, and a limited-time promotional offer...",
    owner: "Jane Smith",
    created_date: "2024-05-02",
    edited_date: "2024-05-05",
    due_date: "2024-05-12",
  },
  {
    id: 2,
    name: "Customer Satisfaction Survey Results",
    description:
      "Analysis of the customer satisfaction survey conducted in April",
    body: "To gauge customer satisfaction levels and identify areas for improvement, we conducted an online survey in April. The survey received responses from 1,000 customers, providing valuable insights into their experiences and expectations...",
    owner: "Mark Johnson",
    created_date: "2024-04-28",
    edited_date: "2024-05-01",
    due_date: "2024-05-10",
  },
  {
    id: 3,
    name: "IT Infrastructure Upgrades",
    description: "Proposal for upgrading the company's IT infrastructure",
    body: "To ensure the smooth operation of our business and enhance productivity, it is crucial to upgrade our IT infrastructure. This proposal outlines the necessary hardware and software updates, along with a timeline and budget for implementation...",
    owner: "Sarah Thompson",
    created_date: "2024-04-15",
    edited_date: "2024-04-20",
    due_date: "2024-05-01",
  },
  {
    id: 4,
    name: "Competitor Analysis",
    description: "Comparative analysis of our company's position in the market",
    body: "To stay ahead in the competitive landscape, it is essential to regularly assess our position in relation to our key competitors. This report provides a detailed analysis of our strengths, weaknesses, opportunities, and threats (SWOT)...",
    owner: "Michael Brown",
    created_date: "2024-04-20",
    edited_date: "2024-04-25",
    due_date: "2024-05-05",
  },
  {
    id: 5,
    name: "Employee Engagement Survey Findings",
    description:
      "Summary of the employee engagement survey results and proposed actions",
    body: "To foster a positive work environment and boost employee morale, we conducted an employee engagement survey in March. The survey gathered feedback from all departments, highlighting areas where we excel and identifying opportunities for improvement...",
    owner: "Emily Davis",
    created_date: "2024-04-01",
    edited_date: "2024-04-05",
    due_date: "2024-04-15",
  },
  {
    id: 6,
    name: "New Product Development Timeline",
    description:
      "Roadmap for the development and launch of our new product line",
    body: "To expand our offerings and capture new market segments, we are excited to introduce our new product line. This report outlines the development timeline, key milestones, and resource allocation for the successful launch of the products...",
    owner: "Robert Wilson",
    created_date: "2024-03-28",
    edited_date: "2024-04-02",
    due_date: "2024-06-30",
  },
  {
    id: 7,
    name: "Supply Chain Optimization Strategy",
    description:
      "Plan for optimizing our supply chain processes to reduce costs and improve efficiency",
    body: "Efficient supply chain management is crucial for maintaining a competitive edge. This report presents a comprehensive strategy for optimizing our supply chain processes, including supplier relationships, inventory management, and logistics...",
    owner: "Jennifer Anderson",
    created_date: "2024-04-12",
    edited_date: "2024-04-18",
    due_date: "2024-05-31",
  },
  {
    id: 8,
    name: "Corporate Social Responsibility Initiatives",
    description:
      "Overview of our company's CSR initiatives and their impact on the community",
    body: "As a socially responsible organization, we are committed to making a positive impact on the communities we serve. This report highlights our recent CSR initiatives, including environmental conservation efforts, community outreach programs, and employee volunteer activities...",
    owner: "David Martinez",
    created_date: "2024-04-05",
    edited_date: "2024-04-10",
    due_date: "2024-04-25",
  },
  {
    id: 9,
    name: "Financial Performance Analysis",
    description:
      "In-depth analysis of our company's financial performance in the previous fiscal year",
    body: "The previous fiscal year was marked by significant challenges and opportunities for our company. This report provides a comprehensive analysis of our financial performance, including revenue growth, profitability, cash flow, and key financial ratios...",
    owner: "Olivia Thompson",
    created_date: "2024-04-18",
    edited_date: "2024-04-23",
    due_date: "2024-05-15",
  },
];

export const getRecentReports = (n: number = 4): ReportType[] => {
  // Sort the reports array by edited_date in descending order
  const sortedReports = reports.sort((a, b) => {
    return (
      new Date(b.edited_date).getTime() - new Date(a.edited_date).getTime()
    );
  });

  // Return the first n reports from the sorted array
  return sortedReports.slice(0, n);
};

export const getOwnerInitials = (name: string): string => {
  return name
    .split(" ")
    .map((letter) => letter.toUpperCase()[0])
    .join("");
};
