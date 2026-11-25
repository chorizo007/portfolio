import { Component } from '@angular/core';

import { PROFILE } from '../data/profile';

const SIGN = [
  '   ┌───────────────────────────────┐',
  '   │  fin del recorrido.           │',
  '   │  gracias por pasarte.         │',
  '   └───────────────────────────────┘',
  '        \\   ^__^',
  '         \\  (oo)\\_______',
  '            (__)\\       )\\/\\',
  '                ||----w |',
  '                ||     ||',
].join('\n');

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  protected readonly profile = PROFILE;
  protected readonly sign = SIGN;
}
