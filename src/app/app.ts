import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { Imprint } from './imprint/imprint';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainContent, Imprint, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sakura');
}
