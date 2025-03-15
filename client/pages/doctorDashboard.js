// doctorDashboard.js
import React from "react";
import "../styles/doctorDashboard.css"; // Import the CSS file

export default function DoctorDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Doctor Dashboard</h1>
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {/* Rows will be populated dynamically */}
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
            {/* Additional rows can be added here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
