import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Course {
  id: number
  title: string
  category: string
  image: string
  duration: string
  level: string
  rating: number
  students: number
  price: string
  popular?: boolean
}
@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  activeCategory = "all"

  categories: string[] = ["all", "tecnología", "negocios", "diseño", "marketing", "idiomas", "desarrollo personal"]

  courses: Course[] = [
    {
      id: 1,
      title: "Desarrollo Web Full Stack",
      category: "tecnología",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      duration: "12 semanas",
      level: "Intermedio",
      rating: 4.8,
      students: 1250,
      price: "$299",
      popular: true,
    },
    {
      id: 2,
      title: "Marketing Digital Avanzado",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      duration: "8 semanas",
      level: "Avanzado",
      rating: 4.7,
      students: 980,
      price: "$249",
    },
    {
      id: 3,
      title: "Diseño UX/UI Profesional",
      category: "diseño",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "10 semanas",
      level: "Todos los niveles",
      rating: 4.9,
      students: 1450,
      price: "$279",
      popular: true,
    },
    {
      id: 4,
      title: "Gestión de Proyectos con Metodologías Ágiles",
      category: "negocios",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "6 semanas",
      level: "Intermedio",
      rating: 4.6,
      students: 820,
      price: "$199",
    },
    {
      id: 5,
      title: "Inglés para Negocios",
      category: "idiomas",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      duration: "16 semanas",
      level: "Principiante a Avanzado",
      rating: 4.7,
      students: 1120,
      price: "$329",
    },
    {
      id: 6,
      title: "Inteligencia Emocional y Liderazgo",
      category: "desarrollo personal",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      duration: "4 semanas",
      level: "Todos los niveles",
      rating: 4.9,
      students: 2100,
      price: "$149",
      popular: true,
    },
    {
      id: 7,
      title: "Ciencia de Datos y Machine Learning",
      category: "tecnología",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "14 semanas",
      level: "Avanzado",
      rating: 4.8,
      students: 750,
      price: "$349",
    },
    {
      id: 8,
      title: "Fotografía Profesional",
      category: "diseño",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "8 semanas",
      level: "Principiante a Intermedio",
      rating: 4.7,
      students: 920,
      price: "$229",
    },
  ]

  setCategory(category: string) {
    this.activeCategory = category
  }

  getFilteredCourses() {
    if (this.activeCategory === "all") {
      return this.courses
    }
    return this.courses.filter((course) => course.category === this.activeCategory)
  }

  getStars(rating: number) {
    return Array(Math.floor(rating)).fill(0)
  }

  getHalfStar(rating: number) {
    return Math.floor(rating) !== rating
  }

  getEmptyStars(rating: number) {
    return Array(5 - Math.ceil(rating)).fill(0)
  }
}
