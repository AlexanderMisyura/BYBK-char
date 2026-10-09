export type Character = {
  name: string;
  maxVitality: string;
  vitality: string;
  physical: string;
  mental: string;
  armor: string;
  damageModifier: string;
  items: string;
  skills: {
    description: string;
    usage: string;
  }[];
  other: string;
};
