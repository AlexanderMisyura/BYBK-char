import './style.css';
import { CharSheet } from './components/char-sheet/char-sheet.ts';

const charSheet = new CharSheet();

document.body.prepend(charSheet.getElement());
