export interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

export const PROFILE = {
  name: 'Nicolás Herraiz Gil',
  handle: 'nicolas',
  role: 'desarrollador de software · full stack',
  location: 'España',
  linkedin: 'https://www.linkedin.com/in/nicol%C3%A1-herraiz-gil-1b6790268/',
  github: 'https://github.com/chorizo007',
  site: 'https://chorizo007.github.io/portfolio/',
};

export const BIO: string[] = [
  'Soy Nicolás, desarrollador de software. Me gusta construir aplicaciones web de principio a fin: la lógica que hay detrás —Java, Spring Boot, PHP, MySQL— y la interfaz que la hace usable —Angular, TypeScript, JavaScript y CSS.',
  'Empecé por la programación de base, con ejercicios de lógica en Java y C++, y desde entonces no he parado de subir de nivel: APIs con Spring Boot y JPA, servidores PHP con sesiones y PDO, y frontends en Angular con despliegue automático.',
  'Cuando algo me interesa de verdad lo convierto en un proyecto: lo maqueto, lo programo, lo rompo, lo arreglo y lo publico. Los repositorios de la pestaña 02 son el registro de ese recorrido, desde las primeras prácticas hasta lo que estoy construyendo ahora.',
];

export const STACK: string[] = [
  'Java',
  'Spring Boot',
  'JPA / Hibernate',
  'MySQL',
  'PHP',
  'JavaScript',
  'TypeScript',
  'Angular',
  'HTML / CSS',
  'Node / Express',
  'Git / GitHub',
  'GitHub Actions',
  'Linux / despliegue',
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2023',
    title: 'primeras líneas',
    text: 'Java, C++ y ejercicios de lógica en Programacion; mis primeros HTML escritos a mano en practicashub. Ese mismo otoño, las prácticas de desarrollo cliente, servidor con PHP y despliegue.',
  },
  {
    year: '2024',
    title: 'objetos, datos y escritorio',
    text: 'proyectosjava y clases1-programacion: más Java, bases de datos y pequeñas herramientas de dibujo. También los ejercicios de lógica y de Node que viven en proyectos.',
  },
  {
    year: '2025',
    title: 'backend con Spring',
    text: 'spring_proyectos reúne mis ejemplos de Spring Boot —CRUD, JPA con relaciones, AOP, interceptores, errores— y llega la primera versión de este portfolio.',
  },
  {
    year: '2026',
    title: 'front cuidado y despliegue continuo',
    text: 'Interfaces al detalle en Luna, Aniversario y Test, y este portfolio en Angular publicado con GitHub Actions: cada push a main se convierte en la web que estás viendo.',
  },
];
