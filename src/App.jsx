// import React from 'react'

// export default function App() {
//   const navigate = (path) => {
//     window.location.href = path
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//       backgroundColor: '#DEF2F1',
//       fontFamily: 'sans-serif'
//     }}>
//       <h1 style={{ marginBottom: '2rem' }}>Welcome to DebtX</h1>
//       <div style={{ display: 'flex', gap: '2rem' }}>
//         <button
//           onClick={() => navigate('/slt/')}
//           style={buttonStyle}
//         >
//           SLT
//         </button>
//         <button
//           onClick={() => navigate('/drc/')}
//           style={buttonStyle}
//         >
//           DRC
//         </button>
//       </div>
//     </div>
//   )
// }

// const buttonStyle = {
//   padding: '1rem 2rem',
//   fontSize: '1.2rem',
//   border: 'none',
//   borderRadius: '8px',
//   backgroundColor: '#3AAFA9',
//   color: '#fff',
//   cursor: 'pointer',
//   transition: '0.3s',
// }

import React from 'react';
import logo from './assets/logo.png'; // make sure this exists

export default function App() {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={logo}
          alt="DebtX Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Welcome to <span style={{ color: '#3AAFA9' }}>DebtX</span></h1>
        <p style={styles.subtitle}>Choose your platform to continue</p>
        <div style={styles.buttonGroup}>
          <button
            onClick={() => navigate('/slt/')}
            style={{ ...styles.button, backgroundColor: '#3AAFA9' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            SLT
          </button>
          <button
            onClick={() => navigate('/drc/')}
            style={{ ...styles.button, backgroundColor: '#2B7A78' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}

          >
            DRC
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to bottom right, #DEF2F1, #FEFFFF)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
    transition: '0.3s ease',
  },
  logo: {
    width: '80px',
    marginBottom: '1.5rem',
    transition: '0.3s ease',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: '#17252A',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '2rem',
    color: '#555',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  button: {
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
};
