import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

// Home component - Provides an overview of the app and navigation to key features
function Home() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Navigate to Power Generator page
  const handleGetStarted = () => {
    navigate("/power-generator"); // Replace with your route path
  };

  return (
    <div className="home">
      {/* About Section */}
      <div className="about-ufp">
        <h2>Unicode Power and Fraction Generator</h2>
        <p>
          UFP allows you to generate Unicode-supported fractions, and power symbols seamlessly.
          It’s perfect for academic writing, presentations, social media posts, or any situation
          where mathematical clarity and style matter.
        </p>

        {/* Key Features List */}
        <h3>Key Features:</h3>
        <ul>
          <li>Generate power symbols (e.g., ², ³) for exponents and equations.</li>
          <li>Create fractions like ½, ⅔, or even custom fractions effortlessly.</li>
          <li>Copy your generated text with one click for seamless integration into documents, emails, or posts.</li>
          <li>Enjoy a sleek, intuitive interface that adapts to all screen sizes for an optimal user experience.</li>
        </ul>

        <p>
          With UFP, formatting math is no longer a hassle—it’s a breeze. Explore our features,
          and experience the difference for yourself! 
          
        </p>

        <p>For any suggestions or improvement, send me an email : dakshat75@gmail.com</p>

        {/* Call-to-Action Button */}
        <button className="get-started-button" onClick={handleGetStarted}>
          Start Generating :)
        </button>
      </div>
    </div>
  );
}

export default Home;
