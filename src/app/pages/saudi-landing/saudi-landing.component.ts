import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { AchivmentsComponent } from '../../components/achivments/achivments.component';
import { LeadershipTeamComponent } from '../../components/leadership-team/leadership-team.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-saudi-landing',
  standalone: true,
  imports: [CarouselComponent, NavBarComponent, TopNavComponent, AboutComponent, ServicesComponent, PartnersComponent, AchivmentsComponent, LeadershipTeamComponent, FooterComponent],
  templateUrl: './saudi-landing.component.html',
  styleUrl: './saudi-landing.component.css'
})
export class SaudiLandingComponent {

}
