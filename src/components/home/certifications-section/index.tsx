import CertificationBadge from "@/components/ui/certification-badge";

import { certifications } from "@/utils/certifications";

export default function CertificationsSection() {
  return (
    <div className="group relative flex w-full flex-col gap-10 overflow-hidden pb-4">
      <div className="flex flex-wrap justify-center gap-4">
        {certifications.map((certification, index) => (
          <div
            className="flex basis-1/3 justify-center md:basis-1/5"
            key={index}
          >
            <CertificationBadge
              index={index}
              badge={certification.badge}
              link={certification.link}
              altName={certification.altName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
