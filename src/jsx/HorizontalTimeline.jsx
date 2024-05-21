import React, { useState, useEffect, useRef } from 'react';
import '../styles/styles.less';

import {
  A11y, Keyboard, Pagination, Mousewheel
} from 'swiper';

// https://v9.swiperjs.com/react
import { Swiper, SwiperSlide } from 'swiper/react';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// https://www.npmjs.com/package/react-country-flag
// import ReactCountryFlag from 'react-country-flag';

import { CircleFlag } from 'react-circle-flags';

// https://github.com/remarkjs/react-markdown
import Markdown from 'react-markdown';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2024-unctad60';

function Timeline() {
  // Data states.
  const [data, setData] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [timer, setTimer] = useState(null);
  const appRef = useRef();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

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
    if (s.activeIndex < 12) {
      document.querySelector('.decade_1964').classList.add('active');
    } else if (s.activeIndex >= 12 && s.activeIndex < 22) {
      document.querySelector('.decade_1974').classList.add('active');
    } else if (s.activeIndex >= 22 && s.activeIndex < 31) {
      document.querySelector('.decade_1984').classList.add('active');
    } else if (s.activeIndex >= 31 && s.activeIndex < 40) {
      document.querySelector('.decade_1994').classList.add('active');
    } else if (s.activeIndex >= 40 && s.activeIndex < 53) {
      document.querySelector('.decade_2004').classList.add('active');
    } else if (s.activeIndex >= 53) {
      document.querySelector('.decade_2014').classList.add('active');
    }
  };

  const startTimer = (s, seconds) => {
    let startTime; let timerInterval; const obj = {}; let ms = seconds * 1000;
    obj.resume = () => {
      if (progressContent.current.textContent === '▶' || progressContent.current.textContent === '5') {
        progressContent.current.classList.remove('play');
        startTime = new Date().getTime();
        // Adjust this number to affect granularity
        // Lower numbers are more accurate, but more CPU-expensive
        timerInterval = setInterval(obj.step, 50);
      }
    };
    obj.pause = () => {
      if (progressContent.current.textContent !== '▶') {
        ms = Math.max(0, ms - (new Date().getTime() - startTime));
        progressContent.current.textContent = '▶';
        progressContent.current.classList.add('play');
        clearInterval(timerInterval);
      }
    };
    obj.clear = () => {
      clearInterval(timerInterval);
      obj.resume = () => {};
      document.querySelector('.autoplay-progress').style.display = 'none';
    };
    obj.step = () => {
      const now = Math.max(0, ms - (new Date().getTime() - startTime));
      const seconds_left = `${Math.round(now / 1000) % 60}`;
      progressCircle.current.style.setProperty('--progress', 1 - now / 1000 / seconds);
      progressContent.current.textContent = seconds_left;
      if (now === 0) {
        clearInterval(timerInterval);
        // obj.resume = () => {};
        s.slideNext();
        progressCircle.current.style.setProperty('--progress', 0);
        progressContent.current.textContent = 5;
        setTimeout(() => {
          ms = 5000;
          console.log('resume 1');
          obj.resume();
        }, 500);
      }
      return now;
    };
    return obj;
  };

  const isVisible = useIsVisible(appRef, { once: true });

  return (
    <div className="app" ref={appRef}>
      {
        (isVisible && timer) && timer.resume()
      }
      <div className="controls_container">
        <div className="button_container">
          <button type="button" onClick={() => { timer.pause(); swiper.slidePrev(); }} className="prev_slide not_active" aria-label="Previous slide" />
        </div>
        <div className="button_container">
          <button type="button" onClick={() => { timer.pause(); swiper.slideNext(); }} className="next_slide" aria-label="Next slide" />
        </div>
        <div className="button_container">
          <button type="button" onClick={() => { timer.pause(); swiper.slideTo(0); }} className="decade decade_1964 active" aria-label="">1964–1973</button>
          <button type="button" onClick={() => { timer.pause(); swiper.slideTo(12); }} className="decade decade_1974" aria-label="">1974–1983</button>
          <button type="button" onClick={() => { timer.pause(); swiper.slideTo(22); }} className="decade decade_1984" aria-label="">1984–1993</button>
          <button type="button" onClick={() => { timer.pause(); swiper.slideTo(31); }} className="decade decade_1994" aria-label="">1994–2003</button>
          <button type="button" onClick={() => { timer.pause(); swiper.slideTo(40); }} className="decade decade_2004" aria-label="">2004–2013</button>
          <button type="button" onClick={() => { timer.pause(); swiper.slideTo(53); }} className="decade decade_2014" aria-label="">2014–present</button>
        </div>
      </div>
      <div className="swiper_wrapper">
        {
          data
          && (
          <Swiper
            grabCursor
            keyboard={{
              enabled: true
            }}
            lazy="true"
            modules={[A11y, Keyboard, Pagination, Mousewheel]}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true
            }}
            direction="horizontal"
            onSlideChange={(s) => updateControls(s)}
            pagination={{
              type: 'progressbar'
            }}
            onReachEnd={() => { timer.clear(); }}
            onSwiper={(s) => {
              setTimer(startTimer(s, 5));
              setSwiper(s);
            }}
            onTouchMove={() => {
              timer.pause();
            }}
            slidesPerView="auto"
            spaceBetween={0}
            style={{
              '--swiper-pagination-color': '#009edb',
              '--swiper-pagination-progressbar-bg-color': '#c5dfef',
              '--swiper-pagination-progressbar-size': '10px',
              '--swiper-theme-color': '#009edb'
            }}
          >
            {data && data.map(el => (
              <SwiperSlide key={el.id}>
                <div className="slider_container">
                  {
                    el.type === 'image/text' && (
                    <div className="content_container">
                      <div className="date_container">
                        {el.country && <CircleFlag countryCode={el.country} height="40" />}
                        {el.date}
                        {' '}
                        {el.id}
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
                      <Markdown>{el.text}</Markdown>
                    </div>
                    )
                  }
                  {
                    el.type === 'cover' && (
                      <div className="content_container">
                        <div className="date_container">
                          {el.text}
                          {' '}
                          {el.id}
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
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20" />
              </svg>
              <span ref={progressContent} onClick={() => { if (progressContent.current.textContent === '▶') { timer.resume(); } }} aria-label="seconds" role="presentation">5</span>
            </div>
          </Swiper>
          )
        }
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Timeline;
