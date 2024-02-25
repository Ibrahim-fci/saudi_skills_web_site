import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { PartnersComponent } from '../partners/partners.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CarouselComponent, NavBarComponent, TopNavComponent, AboutComponent, ServicesComponent, PartnersComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
