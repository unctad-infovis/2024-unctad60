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
    cardDetailedText: ['At the time it was the largest international conference ever held, with more than 4,000 delegates from 119 countries and observers from civil society organizations. A drama of global bargaining between rich and poor countries. By the end of UNCTAD I, from March to June 1964, the declaration of the Group of 77 of developing countries signalled a new negotiating body that pooled common concerns.', 'The United Nations General Assembly adopted resolution 1995 (XIX) in December of that year – UNCTAD was born. A permanent body within the United Nations that has since functioned as the system’s focal point for the integrated treatment of trade and development in support of developing countries.'],
    cardSubtitle: '',
    cardTitle: 'The holding of UNCTAD I',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad1964.jpg'
      }
    },
    title: 'March–June 1964'
  }, {
    cardDetailedText: [''],
    cardSubtitle: '',
    cardTitle: 'The adoption of the General System of Preferences (GSP) at UNCTAD II',
    items: [{
      cardDetailedText: ['"The objectives of the generalized, non-reciprocal, non-discriminatory system of preferences” by granting developing countries preferential tariff rates in the markets of industrialized countries. Under GSP schemes of preference-giving counties, selected products originating in developing countries are granted reduced or zero tariff rates rather than the most favoured nation (MFN) rates as stipulated in Article I of the General Agreement on Tariffs and Trade (GATT). In 1971, the GATT Contracting Parties approved a 10-year waiver to Article I in order to authorize the GSP scheme. In 1979, the GSP became a permanent waiver scheme.'],
      cardTitle: 'Conference Resolution 21 (II)'
    }, {
      cardDetailedText: ['Member States at UNCTAD II (1968) agreed that special measures were needed to enable the least developed of the developing countries to benefit from policy measures negotiated at UNCTAD forums. The UNCTAD secretariat responded, taking on research on the characteristics of developing countries. The result: in 1971, the United Nations General Assembly approved the first list of least developed countries in resolution 2768 (XXVI).', 'The resolution was the outcome of the recommendation of the United Nations Committee for Development Planning in which the UNCTAD secretariat had participated.'],
      cardTitle: 'The consideration of the category of the Least Developed Countries (LDCs)'
    }],
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1968'
  }, {
    cardDetailedText: ['As a point of liaison with the Bretton Woods institutions in order to coordinate G77 policies in international bodies, the developing countries set up the G24, with the UNCTAD secretariat functioning as a care-taker with various supports in research and debate related to international monetary and financial issues. One of the most debated issues was the allocation of the Special Drawing Rights (SPRs), where UNCTAD pushed the proposal of new allocations of IMF drawing rights based on the link-proposal.'],
    cardSubtitle: '',
    cardTitle: 'The Birth of the Group of 24 (G24)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1971'
  }, {
    cardDetailedText: ['At its 6th special session, the UN General Assembly (May 1974) adopted a comprehensive set of proposals of developing countries put forward mostly through UNCTAD (3201 & 3202(S-VI)). The proposals aimed at revising the existing international economic system in favour of the developing countries, by means of reversing the trend of their terms-of-trade deterioration (via commodity agreements), raising aid flows , improving preferential trade policies (via GSP), regulating TNCs (via a binding code of conduct), reforming the international monetary system (via democratizing the decision-making process of the Bretton Woods institutions, together with the greater use of SDRs) and others.'],
    cardSubtitle: '',
    cardTitle: 'The adoption of two resolutions of the New International Economic Order (NIEO)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1974'
  }, {
    cardDetailedText: ['UNCTAD IV (1976), after lengthy strenuous negotiations, adopted Resolution 93 (III) on the IPC, with the understanding that the talks on the arrangement for its institutionalized financing, the Common Fund for Commodities (CFC), would continue after the Conference. The IPC aimed at the stable export earnings of developing countries of developing countries through international agreements for commodities, such as coffee, copper, natural rubber, tin, etc. Whereas the agreement on the CFC was finally reached in 1980, it could enter into effect only in 1988 due to the lack of adequate numbers of ratifications to activate the CFC. '],
    cardSubtitle: '',
    cardTitle: 'Integrated Programme of Commodities (IPC)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1976'
  }, {
    cardDetailedText: ['In 1981, the UNCTAD secretariat launched its annual flagship publication to analyze the world economic trends and major policy issues from a pro-development perspective. It has suggested various policy suggestions on these issues with the overall objective of enhancing the development prospects of the developing countries. In the 1990s, the lost decade for development, the TDR became a principal and vocal source of alternative perspectives to the conventional policy framework known as the Washington Consensus.'],
    cardSubtitle: '',
    cardTitle: 'The commencement of the Trade and Development Report',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1981'
  }, {
    cardDetailedText: ['For the first time in its history, the Conference adopted by consensus the Final Act, a consolidated text of the totality of agreement achieved at the Conference, which has thereafter become a standard format of the outcome of the following Conferences. This was the historical, tactical shift from confrontation to cooperation. In contrast, the previous practice had been to adopt a series of separate resolution and decisions, some of which had not been secured the agreement of some member countries. '],
    cardSubtitle: '',
    cardTitle: 'The Final Act of UNCTAD VIII',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1987'
  }, {
    cardDetailedText: ['UNCTAD VIII (1992) held in Cartagena, Colombia, the first UNCTAD Conference in the post-Cold War period, underlined the importance of overcoming confrontation and fostering genuine cooperation and solidarity. To facilitate the objective, the role of UNCTAD was to concentrate basically on three pillars: policy analyses, inter-governmental consensus building, and technical cooperation. It was implicitly understood that UNCTAD would surrender its historical role as a forum for negotiations on trade to the GATT. The Uruguay Round of multilateral trade negotiations had been underway. The restructuring of the UNCTAD secretariat, which had begun in the mid-1980s, further accelerated along the UN reform. '],
    cardSubtitle: '',
    cardTitle: '“Cartagena Spirit”',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1992'
  }, {
    cardDetailedText: ['As a result of the ongoing UN-wide reform in the early 1990s, the UN Centre of Transnational Corporations (UNCTC) in New York was abolished, and some of its functional elements were transferred to Geneva in 1993. The CTC began its annual report, the World Investment Report (WIR) in 1991, and from 1993 the responsibility for its research and publication was passed to the UNCTAD secretariat. It has since become one of the most authoritative reports on FDI and transnational corporations. '],
    cardSubtitle: '',
    cardTitle: 'Foreign Direct Investment (FDI) a newly added area of UNCTAD activities',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1993'
  }, {
    cardDetailedText: ['As it was getting clear that the scope of multilateral negotiations of the Uruguay Round (1987-1994) would expand beyond trade in goods (the reduction of trade barriers), the UNCTAD secretariat began to encourage developing countries to participate more actively in the negotiations. Towards the end of the Round, the proposal of establishing an international trade organization was put forward and adopted, and the WTO came to exist in 1995. Suddenly the doubt on UNCTAD’s indispensability became a hotly debated topic in diplomatic discussions. '],
    cardSubtitle: '',
    cardTitle: '',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1987–1994'
  }, {
    cardDetailedText: ['The UNCTAD secretariat endeavoured to formulate what became known as a “ positive agenda” for developing countries in preparation of a new round (the Millennium round) of multilateral negotiations anticipated under the auspices of the new trade organization, the WTO. The idea underpinning the positive agenda was to steer these countries away from a “reactive and defensive” stance toward trade negotiations, to a more proactive one. As a result, the UNCTAD secretariat further intensified its assistance to developing countries to join the WTO and to participate actively in the negotiations.'],
    cardSubtitle: '',
    cardTitle: '“Positive Agenda”',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1995–2000'
  }, {
    cardDetailedText: ['The 1999 WTO Ministerial Meeting in Seattle turned out to be chaotic, failing to launch a new round of trade negotiations.  The opposition emanated from various sources, including academics and numerous civil society activists. Many developing countries were not ready to take on any new obligations until the actions previously agreed actions had been fully met. Meanwhile, the UNCTAD secretariat was under pressure by many developed countries (particularly the US) to support the new round. UNCTAD X (2000), which took place only a few months after the Seattle fiasco, helped re-establish its credibility vis-à-vis the WTO, where the debates induced a greater receptiveness to varied concerns of the developing countries about the problems and challenges of globalization.'],
    cardSubtitle: '',
    cardTitle: 'Seattle Fiasco & Bangkok Success',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1999 & 2000'
  }, {
    cardDetailedText: ['In 2005, a panel of eight eminent persons was established to advise the UNCTAD Secretary-General on the advisory role and impact of the organization. Another five eminent persons joined the Panel in 2011. The panel produced two reports, one in 2006, and the other in 2013. Many of proposals in the 2006 report found their way into the negotiating text, the Accra Accord, of UNCTAD XII (2008), such as the leadership in “aid for trade”, a multi-stakeholder approach to promote the productive capacities of developing countries, particularly the LDCs.'],
    cardSubtitle: '',
    cardTitle: 'UNCTAD Panel of Eminent Persons ',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '2005, 2011'
  }, {
    cardDetailedText: ['In 2009, UNCTAD launched the Public Symposium, a semi-annual multi-stakeholder dialogue in the context of UNCTAD where representatives of civil society, academia, the private sectors, etc. are given the opportunity to exchange their views on the specifically identified thematic topics that likely to dominate the global political agenda.'],
    cardSubtitle: '',
    cardTitle: 'Commencement of the annual Public Symposium',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '2009'
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
      <div className="timeline_header">2024</div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Timeline;
