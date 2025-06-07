import React from 'react'

export default function App() {
  const navigate = (path) => {
    window.location.href = path
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#DEF2F1',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>Welcome to DebtX</h1>
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
  backgroundColor: '#3AAFA9',
  color: '#fff',
  cursor: 'pointer',
  transition: '0.3s',
}
