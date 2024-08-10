import cors from 'cors';
import express from 'express';
import devicesRoutes from './routes/devicesRoutes.js';
import vulnerabilitiesRoutes from './routes/vulnerabilitiesRoutes.js';

const app = express();
const PORT = 8000;
const HOST = 'localhost';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/devices', devicesRoutes);
app.use('/vulnerabilities', vulnerabilitiesRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
