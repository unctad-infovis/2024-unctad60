import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2024-unctad60';
import { Chrono } from 'react-chrono';

function Timeline() {
  // Data states.
  // const [data, setData] = useState(false);

  const items = [{
    cardDetailedText: ['The growing presence of artificial intelligence (AI) in consumers’ lives has put our societies at a crossroads, said UNCTAD Secretary-General Rebeca Grynspan, marking World Consumer Rights Day on 15 March.'],
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardTitle: 'Dunkirk',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad1964.jpg'
      }
    },
    title: 'May 1940'
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
    cardDetailedText: ['Men of the British Expeditionary Force (BEF) wade out to..'],
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardTitle: 'Dunkirk',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad2024.jpg'
      }
    },
    title: 'May 1940',
  }, {
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardDetailedText: ['Men of the British Expeditionary Force (BEF) wade out to..'],
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad2024.jpg'
      }
    },
    title: 'May 1940'
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
          disableInteraction
          lineWidth={5}
          disableClickOnCircle
          disableToolbar
          fontSizes={{
            cardSubtitle: '16px',
            cardText: '16px',
            cardTitle: '24px',
            title: '24px',
          }}
          items={items}
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
        />
      </div>
      <div className="timeline_header">2024</div>
      <noscript>Your browser does not support JavaScript!</noscript>

    </div>
  );
}

export default Timeline;
