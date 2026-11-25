import { Component } from '@angular/core';

import { PROFILE } from '../data/profile';

const SIGN = [
  '   ┌───────────────────────────────┐',
  '   │  fin del recorrido.           │',
  '   │  gracias por pasarte.         │',
  '   └───────────────────────────────┘',
  '        \\\\   ^__^',
  '         \\\\  (oo)\\\\_______',
  '            (__)\\\\       )\\\\/\\\\',
  '                ||----w |',
  '                ||     ||',
].join('\n');

/** Sobre ASCII: el ancho se calcula, así los bordes siempre cuadran. */
const MAIL = (() => {
  const rows: [string, string][] = [
    ['de', 'nicolás herraiz gil'],
    ['para', 'tú'],
    ['asunto', '¿hablamos?'],
  ];
  const keyWidth = Math.max(...rows.map(([key]) => key.length)) + 1;
  const width = keyWidth + Math.max(...rows.map(([, value]) => value.length)) + 2;
  const edge = '─'.repeat(width);

  const body = rows.map(
    ([key, value]) => `│ ${key.padEnd(keyWidth)}${value.padEnd(width - keyWidth - 1)}│`,
  );

  return [`┌${edge}┐`, ...body, `└${edge}┘`].join('\n');
})();

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  protected readonly profile = PROFILE;
  protected readonly sign = SIGN;
  protected readonly mail = MAIL;
}
