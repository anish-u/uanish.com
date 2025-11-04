export interface Certification {
  badge: string;
  altName: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    badge: "/images/badges/aws/cloud-practitioner.png",
    altName: "AWS Certified Cloud Practitioner",
    link: "https://www.credly.com/earner/earned/badge/ce43ee12-df91-4421-98fc-8aaf9e52351a",
  },
  {
    badge: "/images/badges/aws/ai-practitioner.png",
    altName: "AWS Certified AI Practitioner",
    link: "https://www.credly.com/earner/earned/badge/ae12236b-482c-47a2-b0d2-b3ce638098c2",
  },
  {
    badge: "/images/badges/oracle/oci-foundations-associate.png",
    altName: "Oracle Cloud Infrastructure Foundations Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=13AF6D972B44C89F31D0EF8E279DC19871AC39D05EE453EB5FCC6D4B18C57BA6",
  },
  {
    badge: "/images/badges/oracle/oci-ai-foundations-associate.png",
    altName: "Oracle Cloud Infrastructure AI Foundations Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=93AC3268DF29AAEA3925380A42407B89A98C61405784EFC06BB410DFA155D0F7",
  },
  {
    badge: "/images/badges/oracle/oci-architect-associate.png",
    altName: "Oracle Cloud Infrastructure Architect Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=559C0B785D1E9F3EA17E5F35D8F6F2A6AD4F1C4C63697424983DC9CCD8C3251A",
  },
];
