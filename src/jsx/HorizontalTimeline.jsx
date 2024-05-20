import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

import {
  A11y, Autoplay, Keyboard, Pagination, Mousewheel
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
  const [swiper, setSwiper] = React.useState(null);

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

  const updateControls = (s) => {
    if (s.isBeginning === true) {
      document.querySelector('.prev_slide').classList.add('not_active');
    } else {
      document.querySelector('.prev_slide').classList.remove('not_active');
    }
    if (s.isEnd === true) {
      document.querySelector('.next_slide').classList.add('not_active');
    } else {
      document.querySelector('.next_slide').classList.remove('not_active');
    }
    document.querySelectorAll('.decade').forEach(el => el.classList.remove('active'));
    if (s.activeIndex < 13) {
      document.querySelector('.decade_1964').classList.add('active');
    } else if (s.activeIndex >= 13 && s.activeIndex < 23) {
      document.querySelector('.decade_1974').classList.add('active');
    } else if (s.activeIndex >= 23 && s.activeIndex < 32) {
      document.querySelector('.decade_1984').classList.add('active');
    } else if (s.activeIndex >= 32 && s.activeIndex < 41) {
      document.querySelector('.decade_1994').classList.add('active');
    } else if (s.activeIndex >= 41 && s.activeIndex < 54) {
      document.querySelector('.decade_2004').classList.add('active');
    } else if (s.activeIndex >= 54) {
      document.querySelector('.decade_2014').classList.add('active');
    }
  };

  return (
    <div className="app">
      <div className="controls_container">
        <div className="button_container">
          <button type="button" onClick={() => swiper.slidePrev()} className="prev_slide not_active" aria-label="Previous slide" />
        </div>
        <div className="button_container">
          <button type="button" onClick={() => swiper.slideNext()} className="next_slide" aria-label="Next slide" />
        </div>
        <div className="button_container">
          <button type="button" onClick={() => swiper.slideTo(0)} className="decade decade_1964 active" aria-label="">1964–1973</button>
          <button type="button" onClick={() => swiper.slideTo(13)} className="decade decade_1974" aria-label="">1974–1983</button>
          <button type="button" onClick={() => swiper.slideTo(23)} className="decade decade_1984" aria-label="">1984–1993</button>
          <button type="button" onClick={() => swiper.slideTo(32)} className="decade decade_1994" aria-label="">1994–2003</button>
          <button type="button" onClick={() => swiper.slideTo(41)} className="decade decade_2004" aria-label="">2004–2013</button>
          <button type="button" onClick={() => swiper.slideTo(54)} className="decade decade_2014" aria-label="">2014–present</button>
        </div>
      </div>
      <div className="swiper_wrapper">
        {
          data
          && (
          <Swiper
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: true
            // }}
            grabCursor
            keyboard={{
              enabled: true
            }}
            lazy="true"
            modules={[A11y, Autoplay, Keyboard, Pagination, Mousewheel]}
            mousewheel={{
              forceToAxis: true
            }}
            direction="horizontal"
            onSlideChange={(s) => updateControls(s)}
            pagination={{
              type: 'progressbar',
            }}
            onSwiper={(s) => setSwiper(s)}
            slidesPerView="auto"
            spaceBetween={0}
            style={{
              '--swiper-pagination-color': '#009edb',
              '--swiper-pagination-progressbar-bg-color': '#c5dfef',
              '--swiper-pagination-progressbar-size': '10px'
            }}
          >
            {data && data.map(el => (
              <SwiperSlide key={el.id}>
                <div className="slider_container">
                  {
                    el.type === 'image/text' && (
                    <div className="content_container ">
                      <div className="date_container">
                        {el.country && <CircleFlag countryCode={el.country} height="40" />}
                        {el.date}
                      </div>
                      <div className="image_container image_container_with_arrow">
                        {
                          el.img ? (
                            <img className="img" src={`${baseUrl}assets/img/horizontal_timeline/${el.img}`} alt="" loading="lazy" />
                          ) : (
                            <img className="img" src="https://dummyimage.com/640x480/f4f9fd/000&text=placeholder" alt="" loading="lazy" />
                          )
                        }
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                      </div>
                      <p>{el.text}</p>
                    </div>
                    )
                  }
                  {
                    el.type === 'cover' && (
                      <div className="content_container">
                        <div className="date_container">
                          {el.text}
                        </div>
                        <div className="image_container image_container_logo">
                          <img className="img" src={`${baseUrl}assets/img/unctad-logo.jpg`} alt="" loading="lazy" />
                          <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                        </div>
                      </div>
                    )
                  }
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          )
        }
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Timeline;
