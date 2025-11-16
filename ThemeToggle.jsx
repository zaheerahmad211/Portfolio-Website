import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: '6px 12px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: darkMode ? '#222' : '#eee',
        color: darkMode ? '#eee' : '#222',
      }}
      aria-label="Toggle theme"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
