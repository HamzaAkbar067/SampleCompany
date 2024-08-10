import { z } from 'zod';

/**
 * Schema for validating Device objects.
 */
export const DeviceSchema = z.object({
  id: z.number(),
  IPv4: z.string().ip(),
  hostname: z.string(),
  MAC: z.string(),
  OperatingSystem: z.string(),
  Manufacturer: z.string(),
  model: z.string(),
  OpenPorts: z.array(z.string()),
});

/**
 * Type inferred from the DeviceSchema.
 */
export type Device = z.infer<typeof DeviceSchema>;
