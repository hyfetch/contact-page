import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faDiscord, faSignalMessenger, faKeybase } from '@fortawesome/free-brands-svg-icons'; // Import the signal-messenger icon
const Home: React.FC = () => {
  useEffect(() => {

    document.title = "protogen mail";

    // Dynamically set the favicon
    const setFavicon = () => {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/images/peek.png'; 
      document.head.appendChild(link);
    };

    setFavicon(); 
  }, []);


  return (
    <div className="container">
      {/* Text Container */}
      <div className="text-container">
          <img id="name" src="/images/peek.png" alt="Peek" style={{width: "50px", height: "50px"}} />
          </div>


      {/* Icons Container */}
      <div className="icons-container">
        <a href="https://t.me/uwufetch" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <a href="https://url.mero.lol/signal" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faSignalMessenger} size="2x" />
        </a>
        <a href="https://url.mero.lol/discord" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="https://keybase.io/hyfetch" className="icon">
          <FontAwesomeIcon icon={faKeybase} size="2x" />
        </a>
      </div>
      <p className="footer">
      <a href="https://nwunder.com">
    <img src="https://nwunder.com/assets/bongo.gif" alt="NWunder Credit" title="Based on nwunder's site" width="64" height="64" />
</a>
      </p>
    </div>
  );
};

export default Home;

