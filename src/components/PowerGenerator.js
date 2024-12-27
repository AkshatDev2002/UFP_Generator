import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

// PowerGenerator Component - Generates superscript text for mathematical expressions
const PowerGenerator = () => {
  // State variables for input, output, copy status, and error handling
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copyStatus, setCopyStatus] = useState('');  // Tracks copy status
  const [error, setError] = useState('');  // Tracks validation errors

  const navigate = useNavigate();  // Initialize useNavigate for page navigation

  // Function to generate superscript from numeric input
  const handleGenerate = () => {
    // Validate input to allow only numbers
    if (/[^0-9]/.test(input)) {
      setError('Character not supported, please enter numbers only');
      setOutput('');
      return;
    }

    // Reset error if input is valid
    setError('');

    // Superscript mapping for numbers
    const superscriptMap = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    };

    // Generate superscript string
    const superscript = input.split('').map(char => superscriptMap[char]).join('');
    setOutput(superscript);
  };

  // Function to clear input and output fields
  const handleClear = () => {
    setInput('');
    setOutput('');
    setCopyStatus(''); // Reset copy status
    setError(''); // Reset error message
  };

  // Function to copy output to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(output) // Copy output
      .then(() => setCopyStatus('Copied!'))  // Update copy status
      .catch(() => setCopyStatus('Failed to copy'));

    // Reset copy status after 2 seconds
    setTimeout(() => setCopyStatus(''), 2000);
  };

  // Function to navigate to Fraction Generator page
  const handleNavigateToFraction = () => {
    navigate('/fraction-generator');  // Navigate to fraction generator
  };

  return (
    <div className="generator-container">
      <h2>Power Generator</h2>
      
      {/* Input Field */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      
      {/* Generate Button */}
      <button className='b1' onClick={handleGenerate}>Generate Power</button>

      {/* Display error message if invalid input */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display output if generated */}
      {output && (
        <div>
          <p>Your ᴾᴼᵂᴱᴿ : {output}</p>
          
          {/* Copy Button */}
          <button onClick={handleCopy}>{copyStatus || 'Copy'}</button>

          {/* Clear Button */}
          <button onClick={handleClear}>Clear</button>
        </div>
      )}

      {/* Navigation to Fraction Generator */}
      <div 
        className="generate-fraction" 
        onClick={handleNavigateToFraction}
        style={{ marginTop: '20px', cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      >
        Generate Fraction
      </div>
    </div>
  );
};

export default PowerGenerator;
