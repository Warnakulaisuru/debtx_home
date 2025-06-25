import React, { useRef, useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import bgVideo from './assets/video.mp4';

export default function App() {
  const videoRef = useRef(null);
  const { instance } = useMsal();
  const navigate = useNavigate();
  const [socialLoading, setSocialLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

const handleAzureLogin = async () => {
  navigate("/slt"); // Navigate to /slt immediately
  setSocialLoading("Azure");

  try {
    const loginResponse = await instance.loginPopup({
      scopes: ["openid", "profile", "email"],
    });

    const idToken = loginResponse.idToken;

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/azure`, {
      code: idToken,
    });

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    navigate("slt/dashboard"); // Navigate to dashboard after successful login
  } catch (err) {
    console.error("Azure login failed:", err);
    setError("Azure login failed. Please contact support.");
    navigate("/"); // Optional: return to home on error
  } finally {
    setSocialLoading("");
  }
};


  const navigateToDRC = () => navigate('/drc/');

  return (
    <div style={containerStyle}>
      <video ref={videoRef} autoPlay loop muted playsInline style={videoStyle}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={fixedOverlayStyle}>
        <h1 style={headingStyle}>Welcome to DebtX</h1>

        <div style={buttonContainerStyle}>
          <button
            className="p-2 rounded-full bg-white border hover:bg-gray-100"
            onClick={handleAzureLogin}
            disabled={socialLoading !== ""}
          >
            {socialLoading === "Azure" ? (
              <span>Pending...</span>
            ) : (
              <span className="text-blue-800 font-semibold text-sm">
                Azure
              </span>
            )}
          </button>

          <button
            onClick={navigateToDRC}
            style={buttonStyle}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(2px)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            DRC
          </button>
        </div>

        {error && <p style={{ color: 'white', marginTop: '1rem' }}>{error}</p>}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  position: 'relative',
  width: '100vw',
  height: '100svh',
  overflow: 'hidden',
};

const videoStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
};

const fixedOverlayStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '2rem',
  maxWidth: '600px',
  width: '90vw',
};

const headingStyle = {
  margin: 0,
  color: '#ffffff',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  fontSize: '2.5rem',
  userSelect: 'none',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  flexWrap: 'nowrap',
};

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  border: 'none',
  borderRadius: '8px',
  backgroundImage: 'linear-gradient(to right, rgb(22, 100, 168), rgb(122, 197, 115))',
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '0 4px 0 rgb(61, 152, 61), 0 6px 12px rgba(130, 112, 112, 0.3)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  fontWeight: 'bold',
  minWidth: '120px',
  boxSizing: 'border-box',
};
