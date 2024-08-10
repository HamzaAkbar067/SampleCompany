## Project Overview

This project involves a web application that allows users to manage and view details of devices and vulnerabilities. It includes several key functionalities and requirements to enhance user experience and data management.

### Core Functionalities

1. **Device List and Detail View**:
   - Users can view a list of devices with relevant information.
   - Each device also have a detailed view.

2. **Vulnerability List and Detail View**:
   - Users can access a list of vulnerabilities with pertinent details.
   - Each vulnerability has a dedicated page for detailed information.

### Advanced Features

1. **Sortable Lists**:
   - Both the device and vulnerability lists support sorting.

2. **CSV Export**:
   - Users can export the lists as CSV files.
   - It is possible to export only the selected entries from the lists.

3. **Persistent Sorting**:
   - Sorting preferences are preserved across page reloads by embedding the sorting state in the URL.

### Project Structure

### `src/` - Source Code
The main directory for the project's source code.

- **`api/`** - Handles API interactions
  - **`models/`** - Contains API models

- **`components/`** - All UI components for the project
  - **`button/`** - Button component
  - **`messages/`** - Messages component
  - **`navigation/`** - Navigation component
  - **`table/`** - Table component

- **`pages/`** - Application pages
  - **`devices/`** - Devices page
  - **`home/`** - Home page
  - **`vulnerabilities/`** - Vulnerabilities page

### `server/` - Server-Side Code
Contains server-side logic and routes.
- **`routes/`** - Routes for managing devices

### Running the Project

1. **Prerequisites**:
   - **Node.js**
   - **npm**

2. **Setup**:
   - Clone the repository.
   - Run `npm install` to install dependencies.
   - Start both the client and server using `npm start`.
   - Access the application at `http://localhost:5173`.

3. **Separate Client and Server Execution**:
   - Run `npm run client` to start the client.
   - Run `npm run server` to start the server.
   - The client will be available at `http://localhost:5173`, and the server at `http://localhost:8000`.

### Running Tests

- Execute `npm test` in the root directory to run the test suite.

### Application Pages

1. **Home Page**: Accessible at `/`.
2. **Devices Page**: Located at `/devices` and provides a table of devices with export and sorting features. Selecting a device row navigates to the device's detail page.
3. **Vulnerabilities Page**: Found at `/vulnerabilities`, offering a table of vulnerabilities with similar export and sorting functionalities.
4. **Device Detail Page**: Available at `/devices/:id`, showing detailed information about a specific device and its associated vulnerabilities.
