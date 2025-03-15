"use client";
import { useRouter } from "next/navigation";
import "../styles/landing.css"; // Import the CSS file

export default function Landing() {
  const router = useRouter();

  return (
    <div className="landing-container">
      <div className="landing-title">
        {/* Heart Icon */}
        <div className="landing-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">CardioSense</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Comprehensive cardiac health monitoring and analysis for better
          healthcare decisions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <button
          className="landing-button landing-button-patient"
          onClick={() => {
            router.push("/patientDashboard");
          }}
        >
          <span className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Patient
          </span>
        </button>
        <button
          className="landing-button landing-button-doctor"
          onClick={() => {
            router.push("/doctorDashboard");
          }}
        >
          <span className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Doctor
          </span>
        </button>
      </div>
    </div>
  );
}
