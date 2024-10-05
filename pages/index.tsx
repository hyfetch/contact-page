import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faDiscord, faSignalMessenger } from '@fortawesome/free-brands-svg-icons'; // Import the signal-messenger icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for faEnvelope

const names = ['@mstrv', '@hyfetch'];

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  let currentIndex = 0;

  useEffect(() => {
    document.title = "Contact me.";

    const textElement = document.getElementById('name');

    if (!textElement) return; // Check if element is not null

    const animateText = () => {
      const currentName = names[currentIndex % names.length];
      let text = textElement.textContent || '';

      // Function to handle typing effect
      const typeWriter = () => {
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < currentName.length) {
            text += currentName[i];
            if (textElement) {
              textElement.textContent = text;
              setDisplayedText(text);
            }
            i++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              // Delete text after typing is done
              const deletingInterval = setInterval(() => {
                if (text.length > 0) {
                  text = text.slice(0, -1);
                  if (textElement) {
                    textElement.textContent = text;
                    setDisplayedText(text);
                  }
                } else {
                  clearInterval(deletingInterval);
                  currentIndex++;
                  animateText(); // Start typing next name
                }
              }, 100); // Adjust the speed of deletion here
            }, 1000); // Adjust the delay before starting deletion here
          }
        }, 100); // Adjust the typing speed here
      };

      typeWriter();
    };

    animateText(); // Start typing immediately

    // Optional: Clear the interval if using setInterval in animateText
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Text Container */}
      <div className="text-container">
        <h1>
          <span id="name"></span>
          <span className="cursor">|</span>
        </h1>
        <p>The methods below are the only ways to reach me.</p>
      </div>

      {/* Icons Container */}
      <div className="icons-container">
        <a href="https://t.me/mstrvlol" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <a href="https://signal.me/#eu/E_mXZC3kXOSBBcyNjq9JrVlrx11S4wTtauFWxyOa4o4ZKjeVIsxI47opy_LmaOpu" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faSignalMessenger} size="2x" />
        </a>
        <a href="https://dsc.gg/mstrv" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="mailto:contact@mero.lol" className="icon">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Home;
