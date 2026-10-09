import type { Character } from '@/models/character';
import { BaseComponent } from '../base';
import { div, input, label, p } from '../utils';

import styles from './main-stats.module.css';
import charStyles from '../char-sheet/char-sheet.module.css';

export class MainStats extends BaseComponent<'div'> {
  public maxVitalityInput: BaseComponent<'input'>;

  public vitalityInput: BaseComponent<'input'>;

  public physicalInput: BaseComponent<'input'>;

  public mentalInput: BaseComponent<'input'>;

  constructor(character: Character | null) {
    super({
      elementTag: 'div',
      classes: [styles.container],
    });

    this.maxVitalityInput = input({
      value: character?.maxVitality ?? '',
      type: 'number',
      classes: [charStyles.textInput],
      min: '0',
      max: '30',
    });

    this.vitalityInput = input({
      value: character?.vitality ?? '',
      type: 'number',
      id: 'vitality',
      classes: [charStyles.textInput],
      min: '0',
      max: '30',
    });

    this.physicalInput = input({
      value: character?.physical ?? '',
      type: 'number',
      classes: [charStyles.textInput, styles.characteristic],
      min: '1',
      max: '5',
    });

    this.mentalInput = input({
      value: character?.mental ?? '',
      type: 'number',
      classes: [charStyles.textInput, styles.characteristic],
      min: '1',
      max: '5',
    });

    this.appendChildren(
      div(
        {},
        label({ text: 'ЖИЗНЕННАЯ СИЛА', htmlFor: 'vitality' }),
        div(
          { classes: [styles.vitality] },
          label({}, p({ text: 'Текущая' }), this.vitalityInput),
          label({}, p({ text: 'Максимум' }), this.maxVitalityInput),
        ),
      ),
      div(
        { classes: [styles.characteristicsContainer] },
        label(
          {},
          p({ text: 'ФИЗИЧЕСКИЕ' }),
          p({ text: ' СПОСОБНОСТИ' }),
          this.physicalInput,
        ),
        label(
          {},
          p({ text: 'МЕНТАЛЬНЫЕ' }),
          p({ text: ' СПОСОБНОСТИ' }),
          this.mentalInput,
        ),
      ),
    );
  }
}
