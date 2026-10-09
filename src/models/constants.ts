import type { Character } from './character';

export const STORAGE_KEY = 'BYBK_char';
export const DAMAGE_DIE = 6;
export const SKILLS_NUMBER = 4;

export const INITIAL_CHARACTER: Character = {
  name: '',
  maxVitality: '0',
  vitality: '0',
  physical: '0',
  mental: '0',
  armor: '0',
  damageModifier: '0',
  items: '',
  skills: Array.from({ length: SKILLS_NUMBER }).map(() => ({
    description: '',
    usage: '',
  })),
  other: '',
};
