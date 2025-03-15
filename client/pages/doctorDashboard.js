// doctorDashboard.js
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import "../styles/doctorDashboard.css"; // Import the CSS file

export default function DoctorDashboard() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Doctor Dashboard</h1>
      <button
        onClick={() => router.push("/")} // Navigate to the landing page
        className="back-button" // Add a class for styling
      >
        Back to Landing Page
      </button>
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th>Patient Name</th>
              <th>Conditions</th>
              <th>Latest Vitals</th>
              <th>Risk Score (AI)</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>John Doe</td>
              <td>Hypertension, Diabetes</td>
              <td>BP: 145/90 mmHg, Pulse: 78 bpm</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Asthma, Obesity</td>
              <td>BP: 130/85 mmHg, Pulse: 82 bpm</td>
              <td>65%</td>
            </tr>
            <tr>
              <td>Michael Johnson</td>
              <td>Heart Disease, High Cholesterol</td>
              <td>BP: 160/95 mmHg, Pulse: 72 bpm</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Emily Davis</td>
              <td>Arthritis, Anxiety</td>
              <td>BP: 120/75 mmHg, Pulse: 85 bpm</td>
              <td>60%</td>
            </tr>
            <tr>
              <td>David Lee</td>
              <td>Chronic Kidney Disease, Hypertension</td>
              <td>BP: 150/92 mmHg, Pulse: 88 bpm</td>
              <td>85%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
