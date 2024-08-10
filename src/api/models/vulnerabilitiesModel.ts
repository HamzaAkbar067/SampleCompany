import { z } from 'zod';

/**
 * Schema for validating Vulnerability objects.
 */
export const VulnerabilitySchema = z.object({
  CVE: z.string(),
  Name: z.string(),
  Severity: z.string(),
  Description: z.string(),
  Solution: z.string(),
  CVSSVector: z.string(),
  AffectedSoftware: z.array(z.string()),
  ExploitPresent: z.boolean(),
});

/**
 * Type inferred from VulnerabilitySchema.
 */
export type Vulnerability = z.infer<typeof VulnerabilitySchema>;

/**
 * Schema for transforming Vulnerability data, particularly for handling
 * different data types.
 */
export const TransformedVulnerability = z.object({
  CVE: z.string(),
  Name: z.string(),
  Severity: z.string(),
  Description: z.string(),
  Solution: z.string(),
  CVSSVector: z.string(),
  AffectedSoftware: z.array(z.string()),
  ExploitPresent: z.string(),
});

/**
 * Type inferred from TransformedVulnerability schema.
 */
export type TransformedVulnerabilityType = z.infer<
  typeof TransformedVulnerability
>;
