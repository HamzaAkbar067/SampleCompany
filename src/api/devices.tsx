import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { Device } from './models/devicesModel';
import {
  TransformedVulnerabilityType,
  Vulnerability,
  VulnerabilitySchema,
} from './models/vulnerabilitiesModel';

const STALE_TIME_MS = 1000 * 60 * 5;

/**
 * Custom hook to fetch a list of devices.
 *
 * @returns {QueryObserverResult<Device[], Error>}
 * A result object containing the list of devices or an error.
 */
export const useFetchDevices = (): QueryObserverResult<Device[], Error> => {
  return useQuery<Device[], Error>({
    queryKey: ['fetch-devices'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8000/devices');
      if (!response.ok) {
        throw new Error(`Error fetching devices: ${response.statusText}`);
      }
      return response.json();
    },
    staleTime: STALE_TIME_MS,
  });
};

/**
 * Custom hook to fetch details of a specific device.
 *
 * @param {number} id - The ID of the device to fetch.
 * @returns {QueryObserverResult<Device, Error>}
 * A result object containing the device details or an error.
 */
export const useFetchDeviceDetails = (
  id: number
): QueryObserverResult<Device, Error> => {
  return useQuery<Device, Error>({
    queryKey: ['fetch-device', id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8000/devices/${id}`);
      if (!response.ok) {
        throw new Error(
          `Error fetching device details: ${response.statusText}`
        );
      }
      return response.json();
    },
    staleTime: STALE_TIME_MS,
  });
};

/**
 * Custom hook to fetch vulnerabilities for a specific device.
 *
 * @param {number} id - The ID of the device to fetch vulnerabilities for.
 * @returns {QueryObserverResult<TransformedVulnerabilityType[], Error>}
 * A result object containing the vulnerabilities or an error.
 */
export const useFetchDeviceVulnerabilities = (
  id: number
): QueryObserverResult<TransformedVulnerabilityType[], Error> => {
  return useQuery<TransformedVulnerabilityType[], Error>({
    queryKey: ['fetch-device-vulnerabilities', id],
    queryFn: async (): Promise<TransformedVulnerabilityType[]> => {
      const response = await fetch(
        `http://localhost:8000/devices/${id}/vulnerabilities`
      );
      if (!response.ok) {
        throw new Error(
          `Error fetching device vulnerabilities: ${response.statusText}`
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
