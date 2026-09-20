import { createRoot } from 'react-dom/client';

import Timeline from './HorizontalTimeline.jsx';

const container = document.getElementById('app-root-2024-unctad60-timeline');
if (container) {
  const root = createRoot(container);
  root.render(<Timeline />);
}
