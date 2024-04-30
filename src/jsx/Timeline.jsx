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
    cardDetailedText: ['More than 4,000 delegates from 119 countries gather in Geneva, Switzerland, for the firstquadrennial conference of UNCTAD, the organization’s highest decision-making body.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/first-session-united-nations-conference-trade-and-development-unctad-i">UNCTAD I</a><br /><a href="https://unctad.org/meetings-search?f%5B0%5D=product%3A342">See all conferences</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The first session of the UN Conference on Trade and Development (UNCTAD I)',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad1964.jpg'
      }
    },
    title: '23 March - 16 June 1964'
  }, {
    cardDetailedText: ['The G77 have since increased to a coalition of 134 developing countries, but retaining the original name due to its historic significance.'],
    cardSubtitle: '',
    cardTitle: 'The founding of the Group of 77 (G77) at UNCTAD I',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '15 June 1964'
  }, {
    cardDetailedText: ['UN General Assembly resolution 1995 (XIX) establishes UNCTAD as a permanent intergovernmental body to help maximize trade and development opportunities for developing countries.'],
    cardSubtitle: '',
    cardTitle: 'Inception of UNCTAD',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: 'December 1964'
  }, {
    cardDetailedText: ['Dr Prebisch was known for his work in international and development economics. UNCTAD in 1982 establishes the Raúl Prebisch Lectures series in honour of its founding secretary-general.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/osg/former-secretaries-general-and-officers-charge/raul-prebisch">Raúl Prebisch</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Secretary-General Raúl Prebisch of Argentina takes office',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1964'
  }, {
    cardDetailedText: ['Member states convene at the second quadrennial conference to set the work priorities of UNCTAD for the next four years.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/second-session-united-nations-conference-trade-and-development-second-session-unctad-ii">UNCTAD II</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UNCTAD II takes place in New Delhi, India',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '31 January – 29 March 1968 '
  }, {
    cardDetailedText: ['The adoption of the GSP at UNCTAD II seeks to bolster developing countries’ export – particularly in the manufacturing sector –through preferential tariffs.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/topic/trade-agreements/generalized-system-of-preferences">Generalized System of Preferences</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Generalized System of Preferences (GSP)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1968'
  }, {
    cardDetailedText: ['The Review of Maritime Transport is the longest-running flagship publication of UNCTAD. Published annually since 1968, the report series examines structural and cyclical changes affecting seaborne trade, ports and shipping, and provides an extensive collection of statistics.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/topic/transport-and-trade-logistics/review-of-maritime-transport">Review of Maritime Transport</a><br /><a href="https://unctadstat.unctad.org/datacentre/">Maritime data</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Review of Maritime Transport',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1968'
  }, {
    cardDetailedText: ['Mr Pérez-Guerrero was instrumental in the establishment of the Organisation of Petroleum Exporting Countries, and the adoption of the Caracas Programme of Action on economic co-operation among developing countries.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/osg/former-secretaries-general-and-officers-charge/manuel-perez-guerrero">Manuel Pérez-Guerrero</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Secretary-General Manuel Pérez-Guerrero of Venezuela begins five-year term',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: 'March 1969'
  }, {
    cardDetailedText: ['UN General Assembly Resolution 2768 (XXVI) creates the LDC category, following the research done by UNCTAD since its inception, later complemented by the efforts of the Committee for Development Planning.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/topic/least-developed-countries">Least developed countries</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UN recognition of least developed countries (LDCs)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '18 November 1971'
  }, {
    cardDetailedText: ['Developing countries create the G-24, leading to greater involvement of UNCTAD in facilitating intergovernmental deliberations and providing policy research and analysis on international monetary and financial issues.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/system/files/official-document/gds20061_en.pdf">UNCTAD</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The Group of Twenty-Four on International Monetary Affairs and Development (G-24)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1971'
  }, {
    cardDetailedText: ['<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/third-session-united-nations-conference-trade-and-development-unctad-iii">UNCTAD III</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The third quadrennial conference UNCTAD III takes place in Santiago, Chile.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '13 April – 21 May 1972'
  }, {
    cardDetailedText: ['The former secretary-general had an extensive career on the global stage, having worked as a member of an expert team that helped prepare UNCTAD I. He was at the helm of UNCTAD until December 1984.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/osg/former-secretaries-general-and-officers-charge/gamani-corea">Gamani Corea</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Gamani Corea of Sri Lanka assumes functions as secretary-general',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: 'April 1974'
  }, {
    cardDetailedText: ['The UN General Assembly adopts landmark resolutions 3201 and 3202(S-VI)), driven mostly by UNCTAD proposals seeking to make the global economic system work better for developing countries through measures such as raising aid flows, improving preferential trade policies, and reforming the international monetary system. '],
    cardSubtitle: '',
    cardTitle: 'Leading calls for a new international economic order',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: 'May 1974'
  }, {
    cardDetailedText: ['<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/fourth-session-united-nations-conference-trade-and-development-unctad-iv">UNCTAD IV</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The fourth quadrennial conference UNCTAD IV takes place in Nairobi, Kenya',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '05 – 31 May 1976'
  }, {
    cardDetailedText: ['UNCTAD IV adopts resolution 93 on the IPC, aimed at ensuring stable export earnings of developing countries through international agreements for commodities.'],
    cardSubtitle: '',
    cardTitle: 'Integrated Programme for Commodities (IPC)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '30 May 1976'
  }, {
    cardDetailedText: ['<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/fifth-session-united-nations-conference-trade-and-development-unctad-v">UNCTAD V</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The fifth quadrennial conference UNCTAD V convenes in Manila, the Philippines.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '07 May – 03 June 1979 '
  }, {
    cardDetailedText: ['As the largest technical cooperation programme run by UNCTAD, ASYCUDA helps more than 100 economies digitalize and expedite trade processes with an automated system for customs data.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/topic/transport-and-trade-logistics/customs-automation-ASYCUDA">ASYCUDA</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Customs automation programme ASYCUDA starts',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1981'
  }, {
    cardDetailedText: ['The report, issued annually, analyzes global economic trends and issues, proposing policy solutions aimed at enhancing the development prospects of developing countries.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/topic/macroeconomics/trade-development-report">The Trade and Development Report</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UNCTAD debuts the Trade and Development Report series',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1981'
  }, {
    cardDetailedText: ['<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/sixth-session-united-nations-conference-trade-and-development-unctad-vi">UNCTAD VI</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The sixth quadrennial conference UNCTAD VI convenes in Belgrade, Serbia.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '06 – 30 June 1983'
  }, {
    cardDetailedText: ['Mr Dadzie led efforts to strengthen UNCTAD at a time when multilateralism was put into question and political commitment towards development was faltering. He was instrumental in forging consensus on international development cooperation to help bridge the North-South divide.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/osg/former-secretaries-general-and-officers-charge/kenneth-ks-dadzie">Kenneth K.S. Dadzie</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Secretary-General Kenneth K.S. Dadzie of Ghana begins eight-year term',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1 January 1986'
  }, {
    cardDetailedText: ['For the first time, member states adopt by consensus the Final Act, a text consolidating all agreement reached during the meeting, setting a new standard format to communicate outcomes of future quadrennial conferences.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/united-nations-conference-trade-and-development-seventh-session-unctad-vii">UNCTAD VII</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UNCTAD VIII takes places in Geneva, Switzerland',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '08 July – 03 August 1987'
  }, {
    cardDetailedText: ['The report, issued annually, unpacks trends in foreign direct investment at global, regional and national levels. It also analyzes global value chains and the operations of multinational enterprises, with special attention to their development implications.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/publications-search?f%5b0%5d=product%3A397">World Investment Report</a></span>'],
    cardSubtitle: '',
    cardTitle: 'First edition of the World Investment Report',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '31 Jul 1991'
  }, {
    cardDetailedText: ['UNCTAD VIII sets out in Cartagena, Colombia, to help overcome confrontation by fostering cooperation and solidarity, culminating in the adoption of a New Partnership for Development.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/eighth-session-united-nations-conference-trade-and-development-unctad-viii">UNCTAD VIII</a></span>'],
    cardSubtitle: '',
    cardTitle: '‘Cartagena Spirit’ shines in first quadrennial conference after Cold War',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '08 – 25 February 1992'
  }, {
    cardDetailedText: ['UN General Assembly resolution 46/235 establishes the CSTD, to which UNCTAD provides secretariat service and substantive support since 1993.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/topic/commission-on-science-and-technology-for-development">CSTD</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Commission on Science and Technology for Development (CSTD)',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1992'
  }, {
    cardDetailedText: ['The two-term secretary-general has a storied career in public service and diplomacy, having authored several books and essays on international relations, economic development issues, and global trade and diplomatic history.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/osg/former-secretaries-general-and-officers-charge/rubens-ricupero">Rubens Ricupero</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Secretary-General Rubens Ricupero of Brazil takes office',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: 'September 1995'
  }, {
    cardDetailedText: ['The series provides a comprehensive and authoritative source of socio-economic analysis and data on the world´s most impoverished economies. It has a broad readership of governments, policymakers, researchers, among others.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/publications-search?f%5b0%5d=product%3A392">Least Developed Countries Report</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Launch of the Least Developed Countries Report series',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '29 Feb 1996'
  }, {
    cardDetailedText: ['<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/ninth-session-united-nations-conference-trade-and-development-unctad-ix">UNCTAD IX</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The ninth quadrennial conference UNCTAD IX takes place in Midrand, South Africa.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '27 April - 11 May 1996'
  }, {
    cardDetailedText: ['UNCTAD redoubles efforts to help developing countries actively participate in multilateral negotiations to join the newly founded World Trade Organization.'],
    cardSubtitle: '',
    cardTitle: '“Positive Agenda” during the second half of the 1990s',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1995–2000'
  }, { //
    cardDetailedText: ['The tenth quadrennial conference UNCTAD X concludes in Bangkok, Thailand. The conference, widely hailed as a success in reinforcing the credibility of UNCTAD, offers a forum for debates that are more receptiveness to the varied concerns of the developing countries about the challenges of globalization and liberalization.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/tenth-session-united-nations-conference-trade-and-development-unctad-x">UNCTAD IX</a></span>'],
    cardSubtitle: '',
    cardTitle: '‘Bangkok success’',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '12 – 19 February 2000'
  }, {
    cardDetailedText: ['<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/eleventh-session-united-nations-conference-trade-and-development-unctad-xi">UNCTAD XI</a></span>'],
    cardSubtitle: '',
    cardTitle: 'The 11th quadrennial conference UNCTAD XI takes places in São Paulo, Brazil.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '13 – 18 June 2004 '
  }, {
    cardDetailedText: ['Dr. Supachai, a seasoned politician and diplomat, serves two terms as UNCTAD secretary-general. Prior, he was deputy prime minsters of his native Thailand, and director-general of the World Trade Organization.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/osg/former-secretaries-general-and-officers-charge/supachai-panitchpakdi">Supachai Panitchpakdi</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Secretary-General Supachai Panitchpakdi of Thailand begins eight-year tenure',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: ''
  }, {
    cardDetailedText: ['The panel consists internationally renowned development experts, advising then-Secretary-General Supachai Panitchpakdi on new strategies to heighten the impact of UNCTAD. The panel produced two reports, in 2006 and 2013, respectively.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/publication/report-panel-eminent-persons-enhancing-development-role-and-impact-unctad">2006</a><br /><a href="https://unctad.org/publication/second-report-unctad-panel-eminent-persons-addressing-key-economic-issues-advance">2013</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Panel of Eminent Persons to help heighten UNCTAD impact',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '2005, 2011'
  }, {
    cardDetailedText: ['The 12th quadrennial conference UNCTAD XII takes place in Accra, Ghana, inaugurating the biennial World Investment Forum, which offers a global platform for engagement and dialogue on emerging and key issues related to investing for sustainable development.', '<span class="right"><strong>Further reading</strong><br /><a href="https://worldinvestmentforum.unctad.org/">World Investment Forum</a><br /><a href="https://unctad.org/meeting/twelfth-session-united-nations-conference-trade-and-development-unctad-xii">UNCTAD XII</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Debut of the World Investment Forum',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '19 - 25 April 2008 '
  }, {
    cardDetailedText: ['Launched at UNCTAD XII, the cluster comprises 15 UN agencies including UNCTAD. The cluster contributes to UN system-wide coherence reform, coordinating operations at global, regional and country levels, and accessing innovative multi-donor funding mechanisms.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/osg/former-secretaries-general-and-officers-charge/supachai-panitchpakdi">UN Inter-Agency Cluster on Trade and Productive Capacity</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UN Inter-Agency Cluster on Trade and Productive Capacity',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '2008'
  }, {
    cardDetailedText: ['The symposium facilitates multi-stakeholder dialogue among civil society, academia and the private sector, on thematic topics related to trade, investment and inclusive sustainable development.'],
    cardSubtitle: '',
    cardTitle: 'Commencement of the annual public symposium with civil society',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '2009'
  }, {
    cardDetailedText: ['The 13th quadrennial conference focuses on the theme “Development-centred globalization: Towards inclusive and sustainable growth and development.”', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/thirteenth-session-united-nations-conference-trade-and-development-unctad-xiii">UNCTAD XIII</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UNCTAD XIII takes place in Doha, Qatar.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '21 – 26 April 2012 '
  }, {
    cardDetailedText: ['Dr. Kituyi has an extensive background as an elected official, an academic, and a holder of high government office. He also has wide-ranging experience in trade negotiations, and international economics and diplomacy.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/about/office-of-the-secretary-general/mukhisa-kituyi">Mukhisa Kituyi</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Secretary-General Mukhisa Kituyi of Kenya begins eight-year tenure',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '1 September 2013'
  }, {
    cardDetailedText: ['The 14th quadrennial conference centres around the theme “From decision to action: Moving towards an inclusive and equitable global economic environment for trade and development.”', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/fourteenth-session-united-nations-conference-trade-and-development-unctad-14">UNCTAD14</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UNCTAD14 convenes in Nairobi, Kenya.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '17 – 22 July 2016'
  }, {
    cardDetailedText: ['A renowned advocate of human development, Ms Grynspan makes history as the first woman to lead UNCTAD. The secretary-general also coordinates  the Task Team of the Global Crisis Response Group on Food, Energy and Finance, set up by the UN Secretary-General to support countries tackle the economic shocks in the wake of the war in Ukraine.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/about/office-of-the-secretary-general">Rebeca Grynspan</a></span<br /><a href="https://news.un.org/pages/global-crisis-response-group/">Task Team of the Global Crisis Response Group on Food, Energy and Finance</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Secretary-General Rebeca Grynspan of Costa Rica begins first four-year term',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '13 September 2021'
  }, {
    cardDetailedText: ['The 15th quadrennial conference, themed “From inequality and vulnerability to prosperity for all”, is a clarion call to build prosperity for all by fixing the fractures of the global economy worsened by the COVID-19 pandemic.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/meeting/fifteenth-session-united-nations-conference-trade-and-development-unctad-15">UNCTAD15</a></span>'],
    cardSubtitle: '',
    cardTitle: 'UNCTAD15 takes place in Bridgetown, Barbados',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '03 - 07 October 2021'
  }, {
    cardDetailedText: ['The strategic move kick-starts the organization’s 60th anniversary celebration set for 12-14 June 2024. It also aims to better reflect the entity’s work, values and renewed commitment to advocate for developing countries amid the evolving global economic landscape.', '<span class="right"><strong>Further reading</strong><br /><a href="https://unctad.org/news/unctad-rebrands-un-trade-and-development">UN Trade and Development (UNCTAD)</a></span>'],
    cardSubtitle: '',
    cardTitle: 'Rebranding to \'UN Trade and Development (UNCTAD)\'',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dummyimage.com/400/ccc/fff&text=placeholder'
      }
    },
    title: '9 April 2024'
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
          parseDetailsAsHTML
          theme={{
            cardBgColor: '#EBEAE6',
            cardMediaBgColor: '#EBEAE6',
            cardTitleColor: '#000',
            primary: '#009edb',
            secondary: '#ffc800',
            titleColor: '#000',
            titleColorActive: '#000',
          }}
          useReadMore={false}
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
