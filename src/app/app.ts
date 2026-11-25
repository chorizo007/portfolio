import { Component, DestroyRef, HostListener, inject, signal } from '@angular/core';

import { Contacto } from './sections/contacto';
import { Repos } from './sections/repos';
import { Sobre } from './sections/sobre';

type TabId = 'sobre' | 'repos' | 'contacto';

interface TabDef {
  id: TabId;
  label: string;
  file: string;
}

@Component({
  selector: 'app-root',
  imports: [Sobre, Repos, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly tabs: readonly TabDef[] = [
    { id: 'sobre', label: 'sobre-mi', file: '~/sobre-mi.md' },
    { id: 'repos', label: 'repos', file: '~/repos' },
    { id: 'contacto', label: 'contacto', file: '~/contacto.txt' },
  ];

  protected readonly active = signal<TabId>('sobre');
  protected readonly clock = signal(this.now());
  protected readonly year = new Date().getFullYear();

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const timer = window.setInterval(() => this.clock.set(this.now()), 1000);
    this.destroyRef.onDestroy(() => window.clearInterval(timer));
  }

  protected select(id: TabId): void {
    this.active.set(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  @HostListener('window:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
      return;
    }

    const index = Number.parseInt(event.key, 10);
    if (index >= 1 && index <= this.tabs.length) {
      this.select(this.tabs[index - 1].id);
      return;
    }

    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      return;
    }

    event.preventDefault();
    const current = this.tabs.findIndex((tab) => tab.id === this.active());
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const next = (current + delta + this.tabs.length) % this.tabs.length;
    this.select(this.tabs[next].id);
  }

  private now(): string {
    return new Date().toLocaleTimeString('es-ES', { hour12: false });
  }
}
