import { Component, computed, signal } from '@angular/core';

import { LANG_ORDER, REPOS, type Repo } from '../data/repos.data';

/** Glifos de bloque del banner, cada uno normalizado a su propio ancho. */
const GLYPHS: Record<string, string[]> = {
  R: [
    '██████╗ ',
    '██╔══██╗',
    '██████╔╝',
    '██╔══██╗',
    '██║  ██║',
    '╚═╝  ╚═╝',
  ],
  E: [
    '███████╗',
    '██╔════╝',
    '█████╗  ',
    '██╔══╝  ',
    '███████╗',
    '╚══════╝',
  ],
  P: [
    '██████╗ ',
    '██╔══██╗',
    '██████╔╝',
    '██╔═══╝ ',
    '██║     ',
    '╚═╝     ',
  ],
  O: [
    ' ██████╗ ',
    '██╔═══██╗',
    '██║   ██║',
    '██║   ██║',
    '╚██████╔╝',
    ' ╚═════╝ ',
  ],
  S: [
    '███████╗',
    '██╔════╝',
    '███████╗',
    '╚════██║',
    '███████║',
    '╚══════╝',
  ],
};

function banner(word: string): string {
  const glyphs = [...word].map((letter) => GLYPHS[letter]);
  const widths = glyphs.map((glyph) => Math.max(...glyph.map((line) => line.length)));
  const height = Math.max(...glyphs.map((glyph) => glyph.length));

  return Array.from({ length: height }, (_, row) =>
    glyphs.map((glyph, i) => (glyph[row] ?? '').padEnd(widths[i])).join(''),
  ).join('\n');
}

const REPOS_BANNER = banner('REPOS');

@Component({
  selector: 'app-repos',
  templateUrl: './repos.html',
  styleUrl: './repos.css',
})
export class Repos {
  protected readonly all = REPOS;
  protected readonly demoCount = REPOS.filter((repo) => repo.demo).length;
  protected readonly filter = signal('todos');
  protected readonly banner = REPOS_BANNER;

  protected readonly languages = computed(() =>
    LANG_ORDER.filter((lang) => REPOS.some((repo) => repo.lang === lang)),
  );

  protected readonly visible = computed<Repo[]>(() => {
    const lang = this.filter();
    return lang === 'todos' ? REPOS : REPOS.filter((repo) => repo.lang === lang);
  });

  protected countFor(lang: string): number {
    return REPOS.filter((repo) => repo.lang === lang).length;
  }
}
