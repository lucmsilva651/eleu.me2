import { loadComponents } from './components.min.js';
import { loadTyped } from './typed.min.js';
import { loadZeroMd } from './zeromd.min.js';
import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@latest';

injectSpeedInsights();
loadZeroMd();
loadComponents();
loadTyped();