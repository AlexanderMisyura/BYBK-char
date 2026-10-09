import type { Character } from '@/models/character';
import { BaseComponent } from '../base';
import { div, input, textarea } from '../utils';

import { SKILLS_NUMBER } from '@/models/constants';
import styles from './skills.module.css';
import charStyles from '../char-sheet/char-sheet.module.css';

export class Skills extends BaseComponent<'div'> {
  public skillDescriptions: BaseComponent<'textarea'>[];

  public skillsUsage: BaseComponent<'input'>[];

  constructor(character: Character | null) {
    super({
      elementTag: 'div',
      classes: [styles.container],
    });

    this.skillDescriptions = Array.from({ length: SKILLS_NUMBER }).map(
      (_, index) =>
        textarea({
          value: character?.skills[index]?.description ?? '',
          classes: [styles.description],
        }),
    );

    this.skillsUsage = Array.from({ length: SKILLS_NUMBER }).map((_, index) =>
      input({
        value: character?.skills[index]?.usage ?? '',
        classes: [charStyles.textInput, styles.usageInput],
        type: 'number',
        min: '0',
        max: '5',
      }),
    );

    this.appendChildren(
      div({classes: [styles.header]}, div({ text: 'УМЕНИЯ' })),
      ...Array.from({ length: SKILLS_NUMBER }).map((_, index) =>
        div(
          { classes: [styles.skill] },
          this.skillDescriptions[index],
          this.skillsUsage[index],
        ),
      ),
    );
  }

  public getSkills(): Character['skills'] {
    return this.skillDescriptions.map((description, index) => ({
      description: description.getElement().value,
      usage: this.skillsUsage[index].getElement().value,
    }));
  }
}
