import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <style jsx>{`
        .header {
          background-color: ${darkMode ? '#0D1B2A' : '#ffffff'};
          color: ${darkMode ? '#ffffff' : '#0D1B2A'};
          padding: 15px 30px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: inherit;
          font-weight: 500;
        }

        .nav-links li a:hover {
          color: #1DA1F2;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Hide nav links on small screens */
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
