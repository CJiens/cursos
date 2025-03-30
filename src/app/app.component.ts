import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestimonialsComponent } from './componentes/testimonials/testimonials.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { BenefitsComponent } from './componentes/benefits/benefits.component';
import { CoursesComponent } from './componentes/courses/courses.component';
import { InstructorsComponent } from './componentes/instructors/instructors.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegisterComponent } from './componentes/register/register.component';

@Component({
  selector: 'app-root',
  imports: [TestimonialsComponent,HeaderComponent,HeroComponent,BenefitsComponent,CoursesComponent,InstructorsComponent,BenefitsComponent,FooterComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Learning Academy"
}
