import express from 'express';
import { vulnerabilities } from '../database.js';

const router = express.Router(); // Create a new router

// Get all vulnerabilities
router.get('/', (_, res) => {
  res.json(vulnerabilities); // Send vulnerabilities as JSON
});

export default router; // Export the router
