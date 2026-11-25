import { Component, computed, signal } from '@angular/core';

import { LANG_ORDER, REPOS, type Repo } from '../data/repos.data';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.html',
  styleUrl: './repos.css',
})
export class Repos {
  protected readonly all = REPOS;
  protected readonly demoCount = REPOS.filter((repo) => repo.demo).length;
  protected readonly filter = signal('todos');

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
