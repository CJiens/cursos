import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Instructor {
  id: number
  name: string
  role: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
    website?: string
  }
}

@Component({
  selector: 'app-instructors',
  imports: [CommonModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.css'
})
export class InstructorsComponent {
  instructors: Instructor[] = [
    {
      id: 1,
      name: "Dr. Alejandro Ramírez",
      role: "Experto en Desarrollo Web",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      bio: "Con más de 15 años de experiencia en desarrollo web y 10 años como docente universitario. Ha trabajado en proyectos para empresas Fortune 500.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 2,
      name: "Mtra. Sofía Hernández",
      role: "Especialista en Marketing Digital",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      bio: "Consultora de marketing digital con experiencia en campañas para marcas internacionales. Certificada por Google y Facebook en publicidad digital.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Ing. Carlos Mendoza",
      role: "Instructor de Ciencia de Datos",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Científico de datos con experiencia en proyectos de machine learning e inteligencia artificial. Ha publicado diversos artículos científicos en el campo.",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 4,
      name: "Lic. Laura Torres",
      role: "Profesora de Diseño UX/UI",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
      bio: "Diseñadora UX/UI con más de 8 años de experiencia en empresas tecnológicas. Apasionada por crear experiencias centradas en el usuario.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
  ]
  
}
