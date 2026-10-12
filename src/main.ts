import './style.css';
import { CharSheet } from './components/char-sheet/char-sheet.ts';

const bgImages = import.meta.glob<{ default: string }>('./assets/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

const bgUrls = Object.values(bgImages);
const bgUrl = bgUrls[Math.floor(Math.random() * bgUrls.length)];

const bgImage = document.createElement('div');
bgImage.classList.add('bg-image');
bgImage.style.backgroundImage = `url(${bgUrl})`;

const charSheet = new CharSheet();

document.body.append(bgImage, charSheet.getElement());
