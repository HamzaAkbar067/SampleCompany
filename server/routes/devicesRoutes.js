import express from 'express';
import {
  devices,
  deviceVulnerabilities,
  vulnerabilities,
} from '../database.js';

const router = express.Router();

// Route to get a list of all devices
router.get('/', (_, res) => {
  res.json(devices);
});

// Route to get details of a specific device by its ID
router.get('/:id', (req, res) => {
  const deviceId = Number(req.params.id);
  const device = devices.find((d) => d.id === deviceId);

  if (device) {
    res.json(device);
  } else {
    res.status(404).json({ error: 'Device not found' });
  }
});

// Route to get vulnerabilities associated with a specific device by its ID
router.get('/:id/vulnerabilities', (req, res) => {
  const deviceId = Number(req.params.id); // Convert ID from URL parameter to a number
  const deviceVulnerability = deviceVulnerabilities.find(
    (dv) => dv.deviceId === deviceId
  );

  if (deviceVulnerability) {
    // If vulnerabilities are found for the device
    const vulnerabilitiesList = deviceVulnerability.vulnerabilities.map(
      (cveId) => vulnerabilities.find((v) => v.CVE === cveId)
    );

    res.json(vulnerabilitiesList);
  } else {
    res.status(404).json({ error: 'Device not found' });
  }
});

export default router;