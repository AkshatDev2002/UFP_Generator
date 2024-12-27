import React from 'react';
import { FaGithub } from 'react-icons/fa'; // GitHub icon
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon

// Footer Component for displaying copyright information and social media links
const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Display current year dynamically */}
      <p>© {new Date().getFullYear()} AKSHAT DEV. All rights reserved.</p>
      
      {/* GitHub icon linking to your GitHub profile */}
      <a href="https://github.com/AkshatDev2002/AkshatDev2002" target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
        <FaGithub size={24} style={styles.githubIcon} />
      </a>
      
      {/* LinkedIn icon linking to your LinkedIn profile */}
      <a href="https://www.linkedin.com/in/akshat-dev-14ad/" target="_blank" rel="noopener noreferrer" style={styles.linkedinLink}>
        <FaLinkedin size={24} style={styles.linkedinIcon} />
      </a>
    </footer>
  );
};

// Inline styles for Footer component
const styles = {
  footer: {
    textAlign: 'center', // Center-align text
    padding: '10px', // Add padding inside footer
    backgroundColor: '#f8f8f8', // Light gray background
    position: 'fixed', // Fix footer at the bottom
    left: '0', // Align to the left edge
    bottom: '0', // Stick to the bottom
    width: '100%', // Span full width
    fontSize: '14px', // Set font size
    color: '#555' // Dark gray text color
  },
  githubLink: {
    position: 'absolute',
    left: '30px', // Align GitHub icon to the left
    bottom: '15px', // Align icon to the bottom
    textDecoration: 'none', // Remove underline from link
  },
  linkedinLink: {
    position: 'absolute',
    right: '50px', // Align LinkedIn icon to the right
    bottom: '15px', // Align icon to the bottom
    textDecoration: 'none', // Remove underline from link
  },
  githubIcon: {
    color: '#333', // GitHub icon color
    cursor: 'pointer', // Change cursor on hover
  },
  linkedinIcon: {
    color: '#0e76a8', // LinkedIn icon color
    cursor: 'pointer', // Change cursor on hover
  }
};

export default Footer;
