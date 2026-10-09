import type { Character } from '@/models/character';
import { STORAGE_KEY, INITIAL_CHARACTER } from '@/models/constants';

export function getCharData(): Character {
  const storedData = localStorage.getItem(STORAGE_KEY);

  return storedData ? JSON.parse(storedData) : INITIAL_CHARACTER;
}

export function setCharData(character: Character): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
}
