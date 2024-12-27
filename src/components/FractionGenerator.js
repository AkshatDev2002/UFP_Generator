import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Function to reduce a fraction to its simplest form
function reduce(numerator, denominator) {
  // Calculate Greatest Common Divisor (GCD) using Euclidean algorithm
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  const gcdVal = gcd(numerator, denominator);
  return [numerator / gcdVal, denominator / gcdVal];
}

// Superscript and subscript mappings for Unicode representation
const superscript = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
};

const subscript = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
};

// Predefined Unicode fraction representations
const fractions = {
  '1/2': '½', '1/3': '⅓', '2/3': '⅔', '1/4': '¼', '3/4': '¾', '1/5': '⅕', '2/5': '⅖', '3/5': '⅗',
  '4/5': '⅘', '1/6': '⅙', '5/6': '⅚', '1/7': '⅐', '1/8': '⅛', '3/8': '⅜', '5/8': '⅝', '7/8': '⅞',
  '1/9': '⅑', '1/10': '⅒'
};

const slash = '⁄'; // Unicode fraction slash symbol

// Generate fraction representation
function getFraction(numerator, denominator) {
  numerator = numerator.trim();
  denominator = denominator.trim();

  // Convert numbers to Unicode superscript and subscript format
  function map(num, den) {
    if (fractions[num + '/' + den]) return fractions[num + '/' + den];
    var numOut = '', denOut = '';

    // Convert numerator
    num.split('').forEach(function (val) {
      const correspondingNum = superscript[val];
      if (!correspondingNum) throw new Error('Character not supported');
      numOut += correspondingNum;
    });

    // Convert denominator
    den.split('').forEach(function (val) {
      const correspondingNum = subscript[val];
      if (!correspondingNum) throw new Error('Character not supported');
      denOut += correspondingNum;
    });

    return numOut + slash + denOut;
  }

  // Original and simplified fractions
  const orig = map(numerator, denominator);
  let simp = '';

  // Simplify fraction if valid numbers
  if (/^\d+$/.test(numerator) && /^\d+$/.test(denominator)) {
    simp = reduce(numerator, denominator);
    simp = map(simp[0].toString(), simp[1].toString());
  }

  return [orig, simp || ''];
}

const FractionGenerator = () => {
  // State variables
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  const [fraction, setFraction] = useState('');
  const [simplifiedFraction, setSimplifiedFraction] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  // Handle fraction generation
  const handleGenerateFraction = () => {
    if (isNaN(numerator) || isNaN(denominator)) {
      setError('Character not supported, please enter a number');
      setFraction('');
      setSimplifiedFraction('');
      return;
    }

    try {
      const [original, simplified] = getFraction(numerator, denominator);
      setFraction(original);
      setSimplifiedFraction(simplified);
      setError('');
    } catch (e) {
      setError('Character not supported, please enter a number');
      setFraction('');
      setSimplifiedFraction('');
    }
  };

  // Clear inputs and outputs
  const handleClear = () => {
    setNumerator('');
    setDenominator('');
    setFraction('');
    setSimplifiedFraction('');
    setError('');
    setCopied(false);
  };

  // Navigate to Power Generator page
  const handleNavigateToPower = () => {
    navigate('/power-generator');
  };

  // Copy generated fraction to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(fraction)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => alert('Failed to copy'));
  };

  return (
    <div className="fraction-generator-container">
      <h2>Fraction Generator</h2>

      {/* Input Fields */}
      <input 
        type="text"
        value={numerator}
        onChange={(e) => setNumerator(e.target.value)}
        placeholder="Enter Numerator"
      />
      <input 
        type="text"
        value={denominator}
        onChange={(e) => setDenominator(e.target.value)}
        placeholder="Enter Denominator"
      />

      {/* Error Display */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Generate and Clear Buttons */}
      <button onClick={handleGenerateFraction}>Generate Fraction</button>

      {fraction && (
        <div>
          <p>Original: {fraction}</p>
          {simplifiedFraction && <p>Simplified: {simplifiedFraction}</p>}
          <button onClick={handleCopy} style={{ marginRight: '10px' }}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button onClick={handleClear}>Clear</button>
        </div>
      )}

      {/* Navigation Link */}
      <div
        className="generate-power"
        onClick={handleNavigateToPower}
        style={{ marginTop: '20px', cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      >
        Generate Power
      </div>
    </div>
  );
};

export default FractionGenerator;
