import React, { useEffect } from "react";

// MathAnimation component - Displays animated mathematical operators for visual effects
function MathAnimation() {
  useEffect(() => {
    // Select the container for animated operators
    const container = document.querySelector(".math-operators-container");

    // List of mathematical operators to animate
    const operators = ["+", "-", "×", "÷", "=", "%", "√", "π"];
    const numOperators = 30; // Number of operators to generate

    // Generate and append operators to the container
    for (let i = 0; i < numOperators; i++) {
      const operator = document.createElement("div"); // Create a div element
      operator.className = "math-operator"; // Assign class for styling
      
      // Randomly select an operator from the list
      operator.textContent = operators[Math.floor(Math.random() * operators.length)];

      // Randomize horizontal position and animation delay
      operator.style.left = `${Math.random() * 100}%`;
      operator.style.animationDelay = `${Math.random() * 5}s`;

      // Append the operator to the container
      container.appendChild(operator);
    }
  }, []); // Run only once when the component mounts

  // Render the container for animations
  return <div className="math-operators-container"></div>;
}

export default MathAnimation;
