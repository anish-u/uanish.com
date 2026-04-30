"use client";

import Link from "next/link";

import { motion } from "framer-motion";

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
      <motion.div
        className="flex w-full items-center justify-center pt-6"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <Link
          href=""
          className="bg-black-base/90 hover:bg-black-base dark:text-black-base dark:bg-white-base/90 dark:hover:bg-white-base w-full rounded-lg px-6 py-2 text-center text-xs font-bold text-white transition-all duration-250 ease-in-out md:w-[60%] md:text-sm"
        >
          View All Certifications
        </Link>
      </motion.div>
    </div>
  );
}
