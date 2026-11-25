export interface Repo {
  name: string;
  description: string;
  lang: string;
  stack: string[];
  year: number;
  url: string;
  demo?: string;
  fork?: boolean;
}

/** Repositorios públicos de github.com/chorizo007, con demo solo donde está publicada. */
export const REPOS: Repo[] = [
  {
    name: 'Test',
    lang: 'JavaScript',
    description:
      'Test de temario: banco de preguntas con parte común, parte específica y examen general, pensado para preparar oposiciones desde el navegador. Guarda el avance tema a tema.',
    stack: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    year: 2026,
    url: 'https://github.com/chorizo007/Test',
    demo: 'https://chorizo007.github.io/Test/',
  },
  {
    name: 'Aniversario',
    lang: 'HTML',
    description:
      'Página de aniversario: una landing editorial de una sola página, con tipografía serif, animaciones suaves y un repaso de recuerdos en formato revista.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    year: 2026,
    url: 'https://github.com/chorizo007/Aniversario',
    demo: 'https://chorizo007.github.io/Aniversario/',
  },
  {
    name: 'Luna',
    lang: 'CSS',
    description:
      'Galería de fotos en tonos rosa que lee las imágenes directamente del repositorio con la API de GitHub. Sin backend y sin build: solo HTML, CSS y JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub API'],
    year: 2026,
    url: 'https://github.com/chorizo007/Luna',
    demo: 'https://chorizo007.github.io/Luna/',
  },
  {
    name: 'portfolio',
    lang: 'HTML',
    description:
      'Este mismo portfolio: Angular 20 con detección de cambios zoneless, diseño de terminal ASCII y despliegue automático en GitHub Pages con GitHub Actions.',
    stack: ['Angular', 'TypeScript', 'GitHub Actions', 'GitHub Pages'],
    year: 2025,
    url: 'https://github.com/chorizo007/portfolio',
    demo: 'https://chorizo007.github.io/portfolio/',
  },
  {
    name: 'spring_proyectos',
    lang: 'Java',
    description:
      'Colección de ejemplos de Spring Boot: CRUD y JPA con relaciones, AOP, interceptores, manejo de errores, facturas y horarios. Incluye clientes Angular y React para consumir las APIs.',
    stack: ['Java', 'Spring Boot', 'JPA', 'Angular', 'React'],
    year: 2025,
    url: 'https://github.com/chorizo007/spring_proyectos',
  },
  {
    name: 'proyectos',
    lang: 'JavaScript',
    description:
      'Cajón de proyectos pequeños: ejercicios de lógica en JavaScript y prácticas de servidor con Node y Express.',
    stack: ['JavaScript', 'Node', 'Express', 'HTML'],
    year: 2024,
    url: 'https://github.com/chorizo007/proyectos',
  },
  {
    name: 'proyectosjava',
    lang: 'Java',
    description:
      'Herramientas de escritorio hechas en Java: un bloc de dibujo y un «pinturillo» para pintar con el ratón sobre un lienzo.',
    stack: ['Java'],
    year: 2024,
    url: 'https://github.com/chorizo007/proyectosjava',
  },
  {
    name: 'DesCliente',
    lang: 'JavaScript',
    description:
      'Prácticas y exámenes de desarrollo web en el cliente: manipulación del DOM, eventos, formularios, asincronía y controles de evaluación, con apuntes de JavaScript asíncrono.',
    stack: ['JavaScript', 'HTML', 'CSS', 'DOM'],
    year: 2024,
    url: 'https://github.com/chorizo007/DesCliente',
  },
  {
    name: 'servidorphp',
    lang: 'PHP',
    description:
      'Prácticas de PHP en servidor: POO, PDO y MySQL, sesiones y cookies, formularios, subida de archivos, PHPMailer, generación de PDF con FPDF y captcha.',
    stack: ['PHP', 'MySQL', 'PDO', 'PHPMailer'],
    year: 2024,
    url: 'https://github.com/chorizo007/servidorphp',
  },
  {
    name: 'Despliegue',
    lang: 'Java',
    description:
      'Prácticas de despliegue: diseño del modelo de datos, scripts SQL y el proyecto CentroGame montado sobre servidor, con documentación y capturas del proceso.',
    stack: ['Java', 'SQL', 'JSP'],
    year: 2024,
    url: 'https://github.com/chorizo007/Despliegue',
  },
  {
    name: 'clases1-programacion',
    lang: 'Java',
    description:
      'Ejercicios de clase de programación en Java: estructuras de control, arrays, funciones y primeros objetos.',
    stack: ['Java'],
    year: 2024,
    url: 'https://github.com/chorizo007/clases1-programacion',
  },
  {
    name: 'Programacion',
    lang: 'Java',
    description:
      'Primeros ejercicios de programación en Java y C++: bucles, funciones, ficheros y problemas de lógica.',
    stack: ['Java', 'C++'],
    year: 2023,
    url: 'https://github.com/chorizo007/Programacion',
  },
  {
    name: 'practicashub',
    lang: 'HTML',
    description:
      'El primer repositorio: prácticas de HTML y CSS escritas a mano, antes de saber lo que era un framework.',
    stack: ['HTML', 'CSS'],
    year: 2023,
    url: 'https://github.com/chorizo007/practicashub',
  },
  {
    name: 'coding-interview-university',
    lang: 'otros',
    description:
      'Fork del plan de estudios de ciencias de la computación de John Washam, que uso como hoja de ruta para repasar fundamentos.',
    stack: ['Estudio', 'Ciencias de la computación'],
    year: 2023,
    url: 'https://github.com/chorizo007/coding-interview-university',
    fork: true,
  },
];

/** Orden de los filtros por lenguaje en la pestaña de repos. */
export const LANG_ORDER: string[] = ['Java', 'JavaScript', 'HTML', 'CSS', 'PHP', 'otros'];
