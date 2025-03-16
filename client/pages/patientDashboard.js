// patientDashboard.js
import React, { useState } from "react";
import "../styles/patientDashboard.css"; // Import a CSS file for styling

export default function PatientDashboard() {
  const [question, setQuestion] = useState(""); // State for the input question
  const [messages, setMessages] = useState([]); // State for storing messages

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && question.trim() !== "") {
      setMessages([...messages, question]); // Add the question to messages
      setQuestion(""); // Clear the input field
    }
  };

  return (
    <div className="patient-dashboard-container">
      <h1 className="dashboard-title">Patient Dashboard</h1>
      <div className="patient-info">
        <h2>Patient Name: John Doe</h2>
      </div>

      <div className="interaction-history">
        <h2>Interaction History</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-03-14</td>
              <td>Initial consultation</td>
            </tr>
            <tr>
              <td>2025-03-15</td>
              <td>Follow-up check</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Text box for user input */}
      {/* Text box for user input */}
      <label className="ai-label">Converse with your AI Agent</label>
      <input
        type="text"
        className="question-input"
        value={question}
        onChange={(e) => setQuestion(e.target.value)} // Update question state
        onKeyPress={handleKeyPress} // Handle key press event
        placeholder="Type your question and hit Enter..."
      />

      {/* Display messages */}
      {/* Display messages */}
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index}>
            <p className="message">{msg}</p>
            <div className="ai-response">
              AI Agent is generating a response...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
