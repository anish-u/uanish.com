"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export interface CertificationBadgeProps {
  badge: string;
  link: string;
  altName: string;
  index: number;
}

export default function CertificationBadge({
  badge,
  index,
  link,
  altName,
}: CertificationBadgeProps) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
        delay: 0.09 * (index - 1),
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="flex items-center justify-center"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={altName}
      >
        <Image
          width={150}
          height={150}
          src={badge}
          className="dark:bg-white-base bg-black-light/10 cursor-pointer rounded-lg p-1 grayscale-40"
          alt={altName}
        />
      </Link>
    </motion.div>
  );
}
