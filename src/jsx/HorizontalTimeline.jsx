import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

import {
  A11y, Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination
} from 'swiper';

// https://v9.swiperjs.com/react
import { Swiper, SwiperSlide } from 'swiper/react';

// https://www.npmjs.com/package/react-country-flag
// import ReactCountryFlag from 'react-country-flag';

import { CircleFlag } from 'react-circle-flags';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2024-unctad60';

function Timeline() {
  // Data states.
  const [data, setData] = useState(false);

  const baseUrl = (window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2024-unctad60/' : './';
  useEffect(() => {
    const data_file = `${baseUrl}assets/data/data.json`;
    try {
      fetch(data_file)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.text();
        })
        .then(body => setData(JSON.parse(body)));
    } catch (error) {
      console.error(error);
    }
  }, [baseUrl]);

  return (
    <div className="app">
      {
        data
        && (
        <Swiper
         // install Swiper modules
          autoplay={{
            delay: 3000,
            disableOnInteraction: true
          }}
          coverflowEffect={{
            depth: 100,
            modifier: 1,
            rotate: 50,
            slideShadows: false,
            stretch: 0
          }}
          grabCursor
          effect="coverflow"
          keyboard={{
            enabled: true
          }}
          lazy
          modules={[A11y, Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination]}
          mousewheel
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={3}
          spaceBetween={0}
          style={{
            '--swiper-navigation-color': '#009edb',
            '--swiper-pagination-color': '#009edb',
          }}
        >
          {data && data.map(el => (
            <SwiperSlide key={el.img}>
              <div className="slider_container">
                {
                  el.type === 'image/text' && (
                  <>
                    <div className="image_container">
                      {
                        el.img && (
                        <>
                          <div className="date_container">
                            {el.country && <CircleFlag countryCode={el.country} height="50" />}
                            {el.date}
                          </div>
                          <img className="img" src={`${baseUrl}assets/img/horizontal_timeline/${el.img}`} alt="" loading="lazy" />

                          {' '}
                          <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />

                        </>
                        )
                      }
                    </div>
                    <p>{el.text}</p>
                  </>
                  )
                }
                {
                  el.type === 'cover' && (
                    <>
                      <div className="image_container">
                        <img className="img" src={`${baseUrl}assets/img/unctad-logo.jpg`} alt="" />
                      </div>
                      <h3>{el.text}</h3>
                    </>
                  )
                }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        )
      }
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Timeline;
