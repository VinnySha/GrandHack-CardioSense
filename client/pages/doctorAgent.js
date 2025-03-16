// doctorAgent.js
import React, { useState } from "react"; // Import useState
import { useRouter } from "next/navigation"; // Import useRouter
import "../styles/doctorAgent.css"; // Import a CSS file for styling

export default function DoctorAgent() {
  const router = useRouter(); // Initialize the router
  const [showTextBox, setShowTextBox] = useState(false); // State to manage text box visibility

  const handleGenerateReport = () => {
    setShowTextBox(true); // Show the text box when the button is clicked
  };

  return (
    <div className="doctor-agent-container">
      <div className="button-container">
        <button
          onClick={() => router.push("/doctorDashboard")} // Navigate to the doctorDashboard page
          className="back-button" // Add a class for styling
        >
          Back to Doctor Dashboard
        </button>
      </div>
      <h1 className="patient-overview-title">John Doe</h1>
      <div className="patient-details">
        <h2>Patient Condition:</h2>
        <p>Hypertension, Diabetes</p>

        <h2>Latest Vitals:</h2>
        <p>BP: 145/90 mmHg, Pulse: 78 bpm</p>

        <h2>AI-Generated Risk Score:</h2>
        <p>75%</p>

        <h2>Alerts:</h2>
        <p>No critical alerts at this time.</p>
      </div>

      <h2 className="date-table-title">Agent Interaction History</h2>
      <div className="table-container">
        <table className="date-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description of Interaction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-03-13</td>
              <td>Prompted on slight chest pain</td>
            </tr>
            <tr>
              <td>2025-03-14</td>
              <td>Asked about details of hypertension medication</td>
            </tr>
            <tr>
              <td>2025-03-15</td>
              <td>Provided audio recording of breath</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Button to generate summary report */}
      <button className="generate-report-button" onClick={handleGenerateReport}>
        Generate Summary Report
      </button>

      {/* Conditionally render the text box */}
      {showTextBox && (
        <input
          type="text"
          className="summary-input"
          readOnly
          placeholder="Summary will be generated here..."
        />
      )}
    </div>
  );
}
