import React, { useRef, useEffect } from "react";
import "./index.css"; // import global styles
import bgVideo from "./assets/video.mp4"; // replace with your actual video
import SnowCanvas from "./components/SnowCanvas";

export default function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // slower video playback
    }
  }, []);

  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div style={containerStyle}>
      {/* Background Video */}
      <video ref={videoRef} autoPlay loop muted playsInline style={videoStyle}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <SnowCanvas />

      {/* Fixed Overlay */}
      <div style={fixedOverlayStyle}>
        <h1 style={headingStyle}>Welcome to DebtX</h1>
        <div style={buttonContainerStyle}>
          <button
            onClick={() => navigate("/slt/")}
            style={buttonStyle}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "translateY(2px)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            SLT
          </button>
          <button
            onClick={() => navigate("/drc/")}
            style={buttonStyle}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "translateY(2px)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            DRC
          </button>
        </div>
      </div>
      <button
        style={{
          position: "fixed",
          bottom: "10px",
          right: "80px",
        }}
        onClick={() => (window.location.href = "/test/slt/")}
      >
        test slt
      </button>
      <button
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
        onClick={() => (window.location.href = "/test/drc/")}
      >
        test drc
      </button>
    </div>
  );
}

// Styles
const containerStyle = {
  position: "relative",
  width: "100vw",
  height: "100svh", // better for mobile viewport height
  overflow: "hidden",
};

const videoStyle = {
  position: "fixed", // fixed so it covers viewport always
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
};

const fixedOverlayStyle = {
  position: "fixed", // fixed overlay in center
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "2rem",
  maxWidth: "600px",
  width: "90vw",
};

const headingStyle = {
  margin: 0,
  color: "#ffffff",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  fontSize: "2.5rem",
  userSelect: "none",
};

const buttonContainerStyle = {
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flexWrap: "nowrap",
};

const buttonStyle = {
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  border: "none",
  borderRadius: "8px",
  backgroundImage:
    "linear-gradient(to right, rgb(22, 100, 168), rgb(122, 197, 115))",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 4px 0 rgb(61, 152, 61), 0 6px 12px rgba(130, 112, 112, 0.3)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  fontWeight: "bold",
  minWidth: "120px",
  boxSizing: "border-box",
};
