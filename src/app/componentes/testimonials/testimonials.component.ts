import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  text: string
  rating: number
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana García",
      role: "Estudiante de Desarrollo Web",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      text: "El curso de Desarrollo Web Full Stack superó todas mis expectativas. Los instructores son excelentes y el contenido está muy bien estructurado. Ahora trabajo como desarrolladora frontend en una startup.",
      rating: 5,
    },
    {
      id: 2,
      name: "Miguel Rodríguez",
      role: "Profesional de Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      text: "Gracias al curso de Marketing Digital pude actualizar mis conocimientos y aplicar nuevas estrategias en mi trabajo. El retorno de inversión fue inmediato y mi empresa está muy satisfecha con los resultados.",
      rating: 5,
    },
    {
      id: 3,
      name: "Carolina Martínez",
      role: "Diseñadora UX/UI",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      text: "El curso de Diseño UX/UI me dio las herramientas necesarias para cambiar de carrera. La metodología práctica y el feedback constante de los instructores fueron clave para mi aprendizaje.",
      rating: 4,
    },
  ]

  getStars(rating: number) {
    return Array(rating).fill(0)
  }

  getEmptyStars(rating: number) {
    return Array(5 - rating).fill(0)
  }
}
