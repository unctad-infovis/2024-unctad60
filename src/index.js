import React from 'react';

import { createRoot } from 'react-dom/client';

import Timeline from './jsx/Timeline.jsx';

const container = document.getElementById('app-root-2024-unctad60-timeline');
const root = createRoot(container);
root.render(<Timeline />);
