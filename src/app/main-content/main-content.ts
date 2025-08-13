import { Component } from '@angular/core';
import { LandingPage } from './lading-page/landingPage';
import { OurMenu } from './our-menu/our-menu';
import { HowToOrder } from './how-to-order/how-to-order';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-content',
  imports: [LandingPage, OurMenu, HowToOrder],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
