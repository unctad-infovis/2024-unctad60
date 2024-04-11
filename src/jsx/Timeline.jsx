import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2024-unctad60';

// https://github.com/prabhuignoto/react-chrono
import { Chrono } from 'react-chrono';

function Timeline() {
  // Data states.
  // const [data, setData] = useState(false);

  const items = [{
    cardDetailedText: ['At the time it was the largest international conference ever held, with more than 4,000 delegates from 119 countries and observers from civil society organizations. A scene of global bargaining between rich and poor countries. By the end of UNCTAD I, from March to June 1964, a declaration by 77 developing countries - the Group of 77 - signalled a new negotiating body that pooled common concerns.', 'The United Nations General Assembly adopted resolution 1995 (XIX) in December of that year, UNCTAD was born. A permanent body within the United Nations that has since functioned as the system\'s focal point for the integrated treatment of trade and development in support of developing countries.'],
    cardSubtitle: '',
    cardTitle: 'First Geneva Conference, 1964',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad1964.jpg'
      }
    },
    title: '1964'
  }, {
    cardDetailedText: ['The growing presence of artificial intelligence (AI) in consumers’ lives has put our societies at a crossroads, said UNCTAD Secretary-General Rebeca Grynspan, marking World Consumer Rights Day on 15 March.', 'The growing presence of artificial intelligence (AI) in consumers’ lives has put our societies at a crossroads, said UNCTAD Secretary-General Rebeca Grynspan, marking World Consumer Rights Day on 15 March.'],
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardTitle: 'Dunkirk',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad2024.jpg'
      }
    },
    title: 'May 1940'
  }, {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    media: {
      source: {
        url: 'https://www.youtube.com/embed/f6cz9gtMTeI',
        type: 'mp4'
      },
      type: 'VIDEO',
      name: 'Pearl Harbor'
    }
  }, {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    media: {
      source: {
        url: 'https://storage.unctad.org/2024-navigating_troubled_waters/assets/vid/2024-navigating_troubled_waters_video.mp4',
        type: 'mp4'
      },
      type: 'VIDEO',
      name: 'Pearl Harbor'
    }
  }, {
    cardDetailedText: ['Men of the British Expeditionary Force (BEF) wade out to..'],
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardTitle: 'Dunkirk',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad2024.jpg'
      }
    },
    items: [
      { cardTitle: 'nested card title 1' },
      { cardTitle: 'nested card title 2' },
    ],
    title: 'May 1940'
  }];

  useEffect(() => {
    try {
      console.log('');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      <div className="timeline_header">1964</div>
      <div className="timeline_container">
        <Chrono
          activeItemIndex={false}
          disableClickOnCircle
          disableInteraction
          disableToolbar
          fontSizes={{
            cardSubtitle: '16px',
            cardText: '16px',
            cardTitle: '24px',
            title: '24px',
          }}
          items={items}
          lineWidth={5}
          mediaSettings={{ fit: 'contain' }}
          mode="VERTICAL_ALTERNATING"
          theme={{
            cardBgColor: '#EBEAE6',
            cardMediaBgColor: '#EBEAE6',
            cardTitleColor: '#000',
            primary: '#009edb',
            secondary: '#ffc800',
            titleColor: '#000',
            titleColorActive: '#000',
          }}
        >
          <div className="chrono-icons">
            <img src="./assets/img/france-flag-round-circle-icon.svg" alt="image1" />
            <img src="./assets/img/uzbekistan-flag-round-circle-icon.svg" alt="image2" />
            <img src="./assets/img/france-flag-round-circle-icon.svg" alt="image3" />
            <img src="./assets/img/uzbekistan-flag-round-circle-icon.svg" alt="image4" />
            <img src="./assets/img/uzbekistan-flag-round-circle-icon.svg" alt="image4" />
          </div>
        </Chrono>
      </div>
      <div className="full_width_container">
        <h1>Dunkirk</h1>
        <iframe frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/f6cz9gtMTeI?enablejsapi=1" title="Pearl Harbor" className="IFrameVideo-sc-1yk7mm5-5 kGwZaZ" />
        <h2>The growing presence of artificial intelligence (AI) in consumers’ lives has put our societies at a crossroads, said UNCTAD Secretary-General Rebeca Grynspan, marking World Consumer Rights Day on 15 March.</h2>
      </div>
      <div className="timeline_container">
        <Chrono
          activeItemIndex={false}
          disableClickOnCircle
          disableInteraction
          disableToolbar
          fontSizes={{
            cardSubtitle: '16px',
            cardText: '16px',
            cardTitle: '24px',
            title: '24px',
          }}
          items={items}
          lineWidth={5}
          mediaSettings={{ fit: 'contain' }}
          mode="VERTICAL_ALTERNATING"
          theme={{
            cardBgColor: '#EBEAE6',
            cardMediaBgColor: '#EBEAE6',
            cardTitleColor: '#000',
            primary: '#009edb',
            secondary: '#ffc800',
            titleColor: '#000',
            titleColorActive: '#000',
          }}
        >
          <div className="chrono-icons">
            <img src="./assets/img/france-flag-round-circle-icon.svg" alt="image1" />
            <img src="./assets/img/uzbekistan-flag-round-circle-icon.svg" alt="image2" />
            <img src="./assets/img/france-flag-round-circle-icon.svg" alt="image3" />
            <img src="./assets/img/uzbekistan-flag-round-circle-icon.svg" alt="image4" />
            <img src="./assets/img/uzbekistan-flag-round-circle-icon.svg" alt="image4" />
          </div>
        </Chrono>
      </div>
      <div className="timeline_header">2024</div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Timeline;
