import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import {
  TransformedVulnerabilityType,
  Vulnerability,
  VulnerabilitySchema,
} from './models/vulnerabilitiesModel';

const STALE_TIME_MS = 1000 * 60 * 5;

/**
 * Fetches vulnerabilities from the API and transforms the data.
 *
 * @returns {QueryObserverResult<TransformedVulnerabilityType[], Error>}
 * A result object containing the query data or an error.
 */
export const useFetchVulnerabilities = (): QueryObserverResult<
  TransformedVulnerabilityType[],
  Error
> => {
  return useQuery<TransformedVulnerabilityType[], Error>({
    queryKey: ['fetch-vulnerabilities'],
    queryFn: async (): Promise<TransformedVulnerabilityType[]> => {
      const response = await fetch('http://localhost:8000/vulnerabilities');
      if (!response.ok) {
        throw new Error(
          `Error fetching vulnerabilities: ${response.statusText}`
        );
      }

      const data: Vulnerability[] = await response.json();

      return data.map((item) => {
        const validationResult = VulnerabilitySchema.safeParse(item);
        if (!validationResult.success) {
          console.error('Data validation failed', validationResult.error);
          throw new Error('Data validation failed');
        }

        return {
          ...validationResult.data,
          ExploitPresent: String(validationResult.data.ExploitPresent),
        };
      });
    },
    staleTime: STALE_TIME_MS,
  });
};
