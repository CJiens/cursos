import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger("fadeInUp", [
      state(
        "void",
        style({
          opacity: 0,
          transform: "translateY(20px)",
        }),
      ),
      transition(":enter", [
        animate(
          "0.6s ease-out",
          style({
            opacity: 1,
            transform: "translateY(0)",
          }),
        ),
      ]),
    ]),
  ],
})
export class HeroComponent {

}
