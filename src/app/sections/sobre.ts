import { Component, DestroyRef, computed, inject, signal } from '@angular/core';

import { BIO, PROFILE, STACK, TIMELINE } from '../data/profile';
import { REPOS } from '../data/repos.data';

const BANNER = [
  '███╗   ██╗██╗ ██████╗ ██████╗ ██╗      █████╗ ███████╗',
  '████╗  ██║██║██╔════╝██╔═══██╗██║     ██╔══██╗██╔════╝',
  '██╔██╗ ██║██║██║     ██║   ██║██║     ███████║███████╗',
  '██║╚██╗██║██║██║     ██║   ██║██║     ██╔══██║╚════██║',
  '██║ ╚████║██║╚██████╗╚██████╔╝███████╗██║  ██║███████║',
  '╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝',
].join('\n');

const BAR_WIDTH = 14;

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  protected readonly profile = PROFILE;
  protected readonly bio = BIO;
  protected readonly stack = STACK;
  protected readonly timeline = TIMELINE;
  protected readonly banner = BANNER;
  protected readonly totalRepos = REPOS.length;
  protected readonly typed = signal('');

  /** Barras ASCII calculadas con los repos reales de la cuenta. */
  protected readonly langStats = computed(() => {
    const counts = new Map<string, number>();
    for (const repo of REPOS) {
      counts.set(repo.lang, (counts.get(repo.lang) ?? 0) + 1);
    }

    const max = Math.max(...counts.values());
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([lang, count]) => {
        const filled = Math.max(1, Math.round((count / max) * BAR_WIDTH));
        return {
          lang: lang.toLowerCase(),
          count,
          bar: '█'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled),
        };
      });
  });

  constructor() {
    const role = PROFILE.role;
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      this.typed.set(role);
      return;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      this.typed.set(role.slice(0, index));
      if (index >= role.length) {
        window.clearInterval(timer);
      }
    }, 55);

    inject(DestroyRef).onDestroy(() => window.clearInterval(timer));
  }
}
