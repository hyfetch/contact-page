import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faDiscord, faSignalMessenger } from '@fortawesome/free-brands-svg-icons'; // Import the signal-messenger icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for faEnvelope

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Contact me.";
  }, []);

  return (
    <div className="container">
      {/* Text Container */}
      <div className="text-container">
        <h1>Contact</h1>
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
