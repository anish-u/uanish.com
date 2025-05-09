/* eslint-disable no-console */
import { StandardSchemaV1, createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },

  // Called when schema validation fails
  onValidationError: (issues: Readonly<StandardSchemaV1.Issue[]>) => {
    console.error("❌ Invalid environment variables:");
    for (const issue of issues) {
      console.error(`  ${issue.path}: ${issue.message}`);
    }
    process.exit(1);
  },

  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
});
