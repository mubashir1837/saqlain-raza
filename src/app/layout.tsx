import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saqlain-raza.vercel.app"),
  title: "Tech Data Axiom | Dr. Saqlain Raza - Public Health Consulting & Data Science",
  description:
    "Tech Data Axiom, led by Dr. Saqlain Raza — a consulting firm specializing in survey design, policy analysis, data analytics, and AI-enabled decision support systems for government and development sectors.",
  keywords: [
    "Tech Data Axiom",
    "Dr. Saqlain Raza",
    "Saqlain Raza",
    "Imam Abdulrahman Bin Faisal University",
    "Data Science Consulting",
    "Public Health Analytics",
    "Machine Learning",
    "AI Consulting",
    "Survey Design",
    "Policy Analysis",
    "Power BI",
    "Data Warehousing",
    "Applied Statistics",
    "Epidemiology",
  ],
  authors: [{ name: "Dr. Saqlain Raza", url: "https://saqlain-raza.vercel.app" }],
  creator: "Dr. Saqlain Raza",
  publisher: "Tech Data Axiom",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://saqlain-raza.vercel.app",
  },
  verification: {
    google: "s9XOAjsUOb55p5ahUtvX9ntkjn7FpvUXHqq_p4Nwphs",
  },
  openGraph: {
    title: "Tech Data Axiom | Dr. Saqlain Raza - Public Health Consulting & Data Science",
    description:
      "Tech Data Axiom, led by Dr. Saqlain Raza — a consulting firm specializing in survey design, policy analysis, data analytics, and AI-enabled decision support systems for government and development sectors.",
    url: "https://saqlain-raza.vercel.app",
    siteName: "Tech Data Axiom",
    images: [
      {
        url: "/profile-pic.png",
        width: 800,
        height: 800,
        alt: "Dr. Saqlain Raza - Tech Data Axiom",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Data Axiom | Dr. Saqlain Raza - Public Health Consulting & Data Science",
    description:
      "Tech Data Axiom, led by Dr. Saqlain Raza — a consulting firm specializing in survey design, policy analysis, data analytics, and AI-enabled decision support systems.",
    images: ["/profile-pic.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://saqlain-raza.vercel.app/#person",
      "name": "Dr. Saqlain Raza",
      "givenName": "Saqlain",
      "familyName": "Raza",
      "honorificPrefix": "Dr.",
      "jobTitle": "Assistant Professor of Applied Statistics & Public Health Consultant",
      "description": "Dr. Saqlain Raza is an Assistant Professor of Applied Statistics & Public Health Consultant at Imam Abdulrahman Bin Faisal University (IAU), Dammam, Saudi Arabia, and the founder/lead consultant of Tech Data Axiom.",
      "url": "https://saqlain-raza.vercel.app",
      "image": "https://saqlain-raza.vercel.app/profile-pic.png",
      "worksFor": {
        "@type": "EducationalOrganization",
        "@id": "https://saqlain-raza.vercel.app/#iau"
      },
      "affiliation": [
        {
          "@type": "EducationalOrganization",
          "@id": "https://saqlain-raza.vercel.app/#iau"
        },
        {
          "@type": "Organization",
          "@id": "https://saqlain-raza.vercel.app/#organization"
        }
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Institut National Polytechnique de Toulouse (INP-T)",
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulouse",
              "addressCountry": "France"
            }
          }
        },
        {
          "@type": "EducationalOrganization",
          "name": "Université Paul Sabatier (Toulouse III)",
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulouse",
              "addressCountry": "France"
            }
          }
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/saqlain-raza-phd-645a11b/",
        "https://scholar.google.com/citations?user=dZzK8YIAAAAJ",
        "https://www.researchgate.net/profile/Saqlain-Raza-3",
        "https://loop.frontiersin.org/people/1655781/overview",
        "https://www.linkedin.com/company/development-thorough-data/",
        "mailto:bhatti_sb@yahoo.com"
      ],
      "knowsAbout": [
        "Applied Statistics",
        "Data Science",
        "Epidemiology",
        "Biostatistics",
        "Econometrics",
        "Data Analytics",
        "Predictive Modeling",
        "General Linear Models (GLM)",
        "Public Health Consulting",
        "Survey Design",
        "Policy Analysis",
        "Decision Support Systems",
        "Machine Learning",
        "AI Agents",
        "Data Warehousing"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "PhD in Applied Statistics",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "Institut National Polytechnique de Toulouse (INP-T)",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulouse",
              "addressCountry": "France"
            }
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Master's in Public Health (Epidemiology & Biostatistics)",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "Université Paul Sabatier (Toulouse-III)",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulouse",
              "addressCountry": "France"
            }
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Research Bioethics Certification",
          "recognizedBy": {
            "@type": "Organization",
            "name": "National Committee of Bioethics"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Group 1: SEP General",
          "recognizedBy": {
            "@type": "Organization",
            "name": "CITI Program"
          }
        }
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "Faculty in Biostatistics",
          "skills": ["Qualitative & Quantitative Research Methodologies", "Data Science", "Biostatistics", "Research Methodology"],
          "description": "Teaching Biostatistics and Research Methodology to different undergraduate programs.",
          "employer": {
            "@type": "EducationalOrganization",
            "@id": "https://saqlain-raza.vercel.app/#iau"
          }
        },
        {
          "@type": "Occupation",
          "name": "Assistant Professor of Statistics",
          "skills": ["Statistics", "Data Analysis", "Research Projects"],
          "description": "Teaching Statistics in undergraduate and graduate classes. Provide services in data analysis for different research projects.",
          "employer": {
            "@type": "EducationalOrganization",
            "name": "COMSATS University, Islamabad"
          }
        },
        {
          "@type": "Occupation",
          "name": "Assistant Professor of Statistics",
          "description": "Conducted statistics teaching and policy-related economic and econometric research.",
          "employer": {
            "@type": "EducationalOrganization",
            "name": "Pakistan Institute of Development Economics"
          }
        },
        {
          "@type": "Occupation",
          "name": "Lecturer in Statistics",
          "description": "Teaching of Statistics to Intermediate classes.",
          "employer": {
            "@type": "EducationalOrganization",
            "name": "Lawrence College"
          }
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://saqlain-raza.vercel.app/#iau",
      "name": "Imam Abdulrahman Bin Faisal University",
      "alternateName": "IAU",
      "url": "https://www.iau.edu.sa",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "King Faisal Road",
          "addressLocality": "Dammam",
          "addressRegion": "Eastern Province",
          "addressCountry": "Saudi Arabia"
        }
      }
    },
    {
      "@type": "Organization",
      "@id": "https://saqlain-raza.vercel.app/#organization",
      "name": "Tech Data Axiom",
      "url": "https://saqlain-raza.vercel.app",
      "logo": "https://saqlain-raza.vercel.app/profile-pic.png",
      "image": "https://saqlain-raza.vercel.app/profile-pic.png",
      "description": "A consulting firm specializing in survey design, policy analysis, data analytics, and AI-enabled decision support systems for government and development sectors.",
      "founder": {
        "@type": "Person",
        "@id": "https://saqlain-raza.vercel.app/#person"
      },
      "sameAs": [
        "https://www.linkedin.com/company/development-thorough-data/"
      ],
      "knowsAbout": [
        "Machine Learning",
        "Data Analytics",
        "Power BI",
        "Automation",
        "NLP",
        "Computer Vision",
        "AI Agents",
        "Data Pipelines"
      ],
      "hasSkill": [
        "AI Engineering",
        "Data Engineering",
        "Business Intelligence",
        "Dashboard Development",
        "ETL Development"
      ],
      "sponsor": [
        {
          "@type": "Organization",
          "name": "United Nations Development Programme",
          "alternateName": "UNDP"
        },
        {
          "@type": "GovernmentOrganization",
          "name": "Benazir Income Support Program",
          "alternateName": "BISP"
        },
        {
          "@type": "GovernmentOrganization",
          "name": "Pakistan Bureau of Statistics",
          "alternateName": "PBS"
        },
        {
          "@type": "GovernmentOrganization",
          "name": "Population Welfare Department",
          "alternateName": "PWD"
        },
        {
          "@type": "Organization",
          "name": "Pakistan Centre for Philanthropy",
          "alternateName": "PCP"
        }
      ],
      "hasPart": [
        {
          "@type": "Project",
          "name": "Punjab Health Survey (2016–2017)",
          "description": "Reviewed questionnaires, performed data cleaning and quality assurance, developed tabulation plans, and contributed to report writing for large-scale maternal and child health monitoring.",
          "keywords": ["Maternal Health", "Child Health Monitoring", "Data Quality Assurance", "Health Survey"]
        },
        {
          "@type": "Project",
          "name": "Ehsaas Nashonuma Program (2021–2024)",
          "description": "Designed district-level sampling strategies using prevalence data to optimize cost and improve targeting reliability for pregnant and lactating women in a nationwide cash transfer program to combat child malnutrition.",
          "sponsor": {
            "@type": "GovernmentOrganization",
            "name": "Benazir Income Support Program",
            "alternateName": "BISP"
          },
          "keywords": ["Sample Design", "Statistical Optimization", "Malnutrition Data", "Social Policy", "Targeting Strategy"]
        },
        {
          "@type": "Project",
          "name": "Merged Areas Governance Programme (2020–2021)",
          "description": "Conducted data collection and analysis to support governance reforms and institutional development in newly merged districts.",
          "keywords": ["Governance Reform", "Data Collection & Analysis", "Institutional Development"]
        },
        {
          "@type": "Project",
          "name": "Media Awareness Campaign (2016)",
          "description": "Designed sampling frameworks, conducted data analysis, and supported reporting for media awareness campaigns targeting maternal, newborn, and child health (MNCH) practices and health outcomes.",
          "keywords": ["Sampling Frameworks", "Media Awareness Analysis", "MNCH Health Outcomes"]
        },
        {
          "@type": "Project",
          "name": "Healthcare Data Warehousing & AI Ecosystem for Iron Deficiency Anemia (IDA) Analytics",
          "description": "Designed a modern healthcare data warehouse framework for clinical and laboratory IDA indicators (CBC, Ferritin, TSAT, EHR/EMR) with advanced integration pipelines (ETL/ELT), AI-driven early anemia risk prediction, maternal anemia forecasting, and real-time Clinical Decision Support Systems (CDSS).",
          "keywords": [
            "Data Warehousing",
            "Healthcare Analytics",
            "Artificial Intelligence",
            "Digital Health",
            "Health Informatics",
            "Public Health",
            "Clinical Decision Support System",
            "Predictive Analytics"
          ]
        }
      ]
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-1",
      "name": "A novel fractional model for the projection of households using wealth index quintiles",
      "author": [
        { "@type": "Person", "name": "Shakoor Ahmad" },
        { "@type": "Person", "name": "Shumaila Javeed" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" },
        { "@type": "Person", "name": "Dumitru Baleanu" }
      ],
      "datePublished": "2022-11-17",
      "publisher": { "@type": "Organization", "name": "PLOS ONE" },
      "isPartOf": { "@type": "Periodical", "name": "PLOS ONE" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-2",
      "name": "Is There Complementarity between Teaching and Research? Evidence from Pakistani Higher Education Institutions",
      "author": [
        { "@type": "Person", "name": "Michael Gidey Gebru" },
        { "@type": "Person", "name": "Mansoor Shaukat Khan" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" }
      ],
      "datePublished": "2022-03-15",
      "publisher": { "@type": "Organization", "name": "Education Research International" },
      "isPartOf": { "@type": "Periodical", "name": "Education Research International" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-3",
      "name": "Prevalence of child malnutrition and household socioeconomic deprivation: A case study of marginalized district in Punjab, Pakistan",
      "author": [
        { "@type": "Person", "name": "Muhammad Shahid" },
        { "@type": "Person", "name": "Farooq Ahmed" },
        { "@type": "Person", "name": "Waqar Ameer" },
        { "@type": "Person", "name": "Jing Guo" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" },
        { "@type": "Person", "name": "Saireen Fatima" },
        { "@type": "Person", "name": "Madeeha Gohar Qureshi" }
      ],
      "datePublished": "2022-03-10",
      "publisher": { "@type": "Organization", "name": "PLOS ONE" },
      "isPartOf": { "@type": "Periodical", "name": "PLOS ONE" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-4",
      "name": "Does Mothers' Awareness of Health and Nutrition Matter? A Case Study of Child Malnutrition in Marginalized Rural Community of Punjab, Pakistan",
      "author": [
        { "@type": "Person", "name": "Muhammad Shahid" },
        { "@type": "Person", "name": "Yang Cao" },
        { "@type": "Person", "name": "Farooq Ahmed" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" },
        { "@type": "Person", "name": "Jing Guo" },
        { "@type": "Person", "name": "Najma Iqbal Malik" },
        { "@type": "Person", "name": "Umara Rauf" },
        { "@type": "Person", "name": "Madeeha Gohar Qureshi" },
        { "@type": "Person", "name": "Rafit Saheed" },
        { "@type": "Person", "name": "Rohma Maryam" }
      ],
      "datePublished": "2022-02-08",
      "publisher": { "@type": "Organization", "name": "Frontiers in Public Health" },
      "isPartOf": { "@type": "Periodical", "name": "Frontiers in Public Health" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-5",
      "name": "Financial Instability and CO 2 Emissions in India: Evidence from ARDL Bound Testing Approach",
      "author": [
        { "@type": "Person", "name": "Muhammad Qayyum" },
        { "@type": "Person", "name": "Yuyuan Yu" },
        { "@type": "Person", "name": "Mir Muhammad Nizamani" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" },
        { "@type": "Person", "name": "Minhaj Ali" },
        { "@type": "Person", "name": "Shijie Li" }
      ],
      "datePublished": "2022-02-01",
      "publisher": { "@type": "Organization", "name": "Energy and Environment" },
      "isPartOf": { "@type": "Periodical", "name": "Energy and Environment" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-6",
      "name": "Multidimensional poverty index across districts in Punjab, Pakistan: estimation and rationale to consolidate with SDGs",
      "author": [
        { "@type": "Person", "name": "Tabish Nawab" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" },
        { "@type": "Person", "name": "Malik Shahzad Shabbir" },
        { "@type": "Person", "name": "Ghulam Yahya Khan" },
        { "@type": "Person", "name": "Sana Bashir" }
      ],
      "datePublished": "2022-01-19",
      "publisher": { "@type": "Organization", "name": "Environment, Development and Sustainability" },
      "isPartOf": { "@type": "Periodical", "name": "Environment, Development and Sustainability" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-7",
      "name": "Efficiency of Higher Education in the Presence of Shared Inputs using Data Envelopment Analysis",
      "author": [
        { "@type": "Person", "name": "Michael Gidey Gebru" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" },
        { "@type": "Person", "name": "Mansoor Shaukat Khan" }
      ],
      "datePublished": "2021-11-30",
      "publisher": { "@type": "Organization", "name": "Sains Malaysiana" },
      "isPartOf": { "@type": "Periodical", "name": "Sains Malaysiana" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-8",
      "name": "Mixture of Organophosphates Chronic Exposure and Pancreatic Dysregulations in Two Different Population Samples",
      "author": [
        { "@type": "Person", "name": "Mbah Ntepe Leonel Javeres" },
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" },
        { "@type": "Person", "name": "Judith Laure Ngondi" },
        { "@type": "Person", "name": "Fozia Anwar" },
        { "@type": "Person", "name": "Rabia Habib" },
        { "@type": "Person", "name": "Sajida Batool" },
        { "@type": "Person", "name": "Syed M. Nurulain" }
      ],
      "datePublished": "2020-10-28",
      "publisher": { "@type": "Organization", "name": "Frontiers in Public Health" },
      "isPartOf": { "@type": "Periodical", "name": "Frontiers in Public Health" }
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-9",
      "name": "Cardiometabolic Dysregulation and PON1 Genetic Susceptibility in Chronic E-waste Recyclers Exposed to Potentially Toxic Elements",
      "author": [
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" }
      ],
      "datePublished": "2026-01-12"
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://saqlain-raza.vercel.app/#publication-10",
      "name": "Complementarity in mixed farming systems enhances the smallholders income: Evidence from Punjab, Pakistan",
      "author": [
        { "@type": "Person", "@id": "https://saqlain-raza.vercel.app/#person" }
      ],
      "datePublished": "2025-04-04",
      "publisher": { "@type": "Organization", "name": "PLoS ONE" },
      "isPartOf": { "@type": "Periodical", "name": "PLoS ONE" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground bg-white dark:bg-[#050505] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
