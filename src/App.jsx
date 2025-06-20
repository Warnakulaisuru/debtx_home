import React from 'react'
import bgImage from './assets/logo.png'  // adjust path if needed

export default function App() {
  const navigate = (path) => {
    window.location.href = path
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',

        /* subtle dark shadow overlay + background image */
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 style={{ marginBottom: '2rem', color: '#1b2631' /* optional: improve text contrast */ }}>Welcome to DebtX</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button
          onClick={() => navigate('/slt/')}
          style={buttonStyle}
        >
          SLT
        </button>
        <button
          onClick={() => navigate('/drc/')}
          style={buttonStyle}
        >
          DRC
        </button>
      </div>
    </div>
  )
}

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#2874a6',
  color: '#fff',
  cursor: 'pointer',
  transition: '0.3s',
}
