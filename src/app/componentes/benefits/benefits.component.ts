import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Benefit {
  icon: string
  title: string
  description: string
}
@Component({
  selector: 'app-benefits',
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
      title: "Cursos Certificados",
      description: "Todos nuestros cursos incluyen certificación reconocida por empresas líderes en la industria.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
      title: "Flexibilidad Horaria",
      description: "Estudia a tu propio ritmo con acceso 24/7 a todos los materiales del curso.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      title: "Instructores Expertos",
      description:
        "Aprende de profesionales con amplia experiencia en sus campos y metodologías de enseñanza efectivas.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
      title: "Plataforma Interactiva",
      description:
        "Nuestra plataforma de aprendizaje cuenta con herramientas interactivas, foros y recursos multimedia.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>',
      title: "Proyectos Prácticos",
      description: "Aplica lo aprendido en proyectos reales que podrás incluir en tu portafolio profesional.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      title: "Comunidad Global",
      description: "Conecta con estudiantes de todo el mundo, comparte experiencias y amplía tu red profesional.",
    },
  ]
}
