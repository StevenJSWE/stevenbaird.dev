/**
 * Single source of truth for site content.
 *
 * Copy rule: no LinkedIn voice. Plain facts, dry humour allowed.
 * Open source is deliberately left out for now.
 */

export const identity = {
  name: "Steven Baird",
  title: "Software Engineer",
  org: "J.P. Morgan",
  location: "Glasgow, Scotland",
  email: "steven.baird.swe@gmail.com",
  cvPdf: "/Steven_Baird_CV.pdf",
};

export const links = [
  { label: "GitHub", href: "https://github.com/StevenJSWE" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/steven-j-baird" },
  { label: "X", href: "https://x.com/SJBairdSWE" },
  { label: "Email", href: `mailto:${identity.email}` },
  { label: "CV", href: identity.cvPdf },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "J.P. Morgan Chase & Co.",
    programme: "Software Engineer Program (SEP)",
    period: "Sep 2025 – Present",
    location: "Glasgow, Scotland",
    summary:
      "I work on Broadsword, the data observability app within the firm's data mesh. Over 400 CT applications send their events through it, and we process them and publish them on to downstream consumers. It also collects reports and market risk data for BCBS reporting, and runs TDQ checks. Under the hood it's a fairly standard event-driven pattern.",
    bullets: [
      "Backend services in Java with Spring Boot and Maven",
      "Events over Kafka, persisted in MongoDB",
      "Part of the move to AWS, with some Terraform along the way",
      "Some UI work too. Not a web specialist, but I know the basics",
      "Code quality and security scanning with Snyk and SonarQube",
    ],
  },
];

export const education = [
  {
    degree: "BSc (Hons) Computer Science, 2:1",
    institution: "University of Strathclyde",
    period: "2021 – 2025",
    location: "Glasgow, Scotland",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "TypeScript"] },
  { group: "Backend", items: ["Spring Boot", "Maven", "Kafka", "MongoDB"] },
  { group: "Cloud", items: ["AWS", "Terraform"] },
  { group: "Quality", items: ["Snyk", "SonarQube"] },
];
