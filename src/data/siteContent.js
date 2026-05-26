import {
  Activity,
  BellRing,
  Droplets,
  Eye,
  Grid2X2,
  RouteOff,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'

import greenhouseImage from '../assets/greenhouse.jpg'
import teamAlbertoImage from '../assets/team-alberto.jpg'
import teamJesusImage from '../assets/team-jesus.jpg'
import teamPabloImage from '../assets/team-pablo.jpg'

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

export const valueCards = [
  {
    icon: Eye,
    title: 'Vea su invernadero',
    text: 'Vigilancia visual constante y precisa de sus cultivos desde cualquier lugar.',
  },
  {
    icon: BellRing,
    title: 'Le avisamos si algo va mal',
    text: 'Alertas inteligentes inmediatas ante cualquier anomalía detectada por los sensores.',
    tone: 'warning',
  },
  {
    icon: Droplets,
    title: 'Controle el riego y la ventilación',
    text: 'Gestión total de los sistemas mecánicos sin necesidad de presencia física.',
  },
  {
    icon: RouteOff,
    title: 'Sin viajes innecesarios',
    text: 'Ahorre tiempo y combustible gestionando su explotación de forma remota.',
    tone: 'earth',
  },
]

export const featureCards = [
  {
    icon: Activity,
    title: 'Monitorización',
    text: 'Visualización constante de parámetros críticos como temperatura de suelo, aire y niveles de CO2.',
    className: 'feature-card--wide',
    image: greenhouseImage,
  },
  {
    icon: Zap,
    title: 'Control remoto',
    text: 'Accione ventanas, bombas de agua y extractores pulsando un botón desde la aplicación móvil.',
    className: 'feature-card--primary',
  },
  {
    icon: TrendingUp,
    title: 'Gráficos históricos',
    text: 'Analice la evolución de sus cultivos con datos históricos detallados por días o semanas.',
  },
  {
    icon: Grid2X2,
    title: 'Multi-invernadero',
    text: 'Gestione múltiples explotaciones desde una única cuenta de usuario sin complicaciones.',
  },
  {
    icon: ShieldCheck,
    title: 'Conexión segura',
    text: 'Sus datos están protegidos con encriptación de grado profesional y copias de seguridad.',
  },
]

export const processSteps = [
  {
    title: 'Nos llama y le visitamos',
    text: 'Analizamos las necesidades específicas de su finca y le proponemos la mejor configuración de sensores y actuadores.',
  },
  {
    title: 'Instalamos todo',
    text: 'Nuestro equipo técnico se desplaza para realizar la instalación completa del hardware en un solo día.',
  },
  {
    title: 'Le enseñamos a usarlo',
    text: 'Configuramos la aplicación en su móvil y le damos una formación rápida para que sepa interpretar cada dato.',
  },
  {
    title: 'Usted controla, nosotros mantenemos',
    text: 'Disfrute de la tranquilidad. Nosotros nos encargamos de que el sistema esté siempre actualizado y funcionando.',
  },
]

export const pricingPlans = [
  {
    eyebrow: 'Esencial',
    title: 'Pack Básico',
    price: '1.800€',
    monthly: '+ 49€/mes',
    description: 'Ideal para explotaciones pequeñas.',
    features: ['2 sensores temperatura', 'App móvil básica', 'Alertas por SMS'],
  },
  {
    eyebrow: 'Profesional',
    title: 'Pack Estándar',
    price: '3.500€',
    monthly: '+ 89€/mes',
    description: 'Nuestra solución más demandada.',
    features: [
      'Sensores completos',
      'Control de riego remoto',
      'Gráficos avanzados',
      'Soporte prioritario',
    ],
    highlighted: true,
  },
  {
    eyebrow: 'A medida',
    title: 'Pack Profesional',
    price: '7.000€',
    monthly: '+ 149€/mes',
    description: 'Control total multi-zona.',
    features: [
      'Automatización total',
      'Control de ventilación',
      'Multi-usuario ilimitado',
      'Integración ERP',
    ],
  },
]

export const teamMembers = [
  {
    name: 'Alberto Hidalgo',
    role: 'Co-Founder & Lead Mobile Architect',
    bio: 'Arquitecto visual y especialista en KMP. Crea interfaces nativas unificadas con una sola base de código para reducir fricción entre plataformas.',
    superpower: 'Convergencia Multiplataforma',
    stack: ['Kotlin', 'KMP', 'Compose', 'Swift'],
    image: teamAlbertoImage,
    social: {
      linkedin: 'https://www.linkedin.com/in/alberto-h-93431a42/',
      github: 'https://github.com/hgarciaalberto',
    },
  },
  {
    name: 'Pablo Hurtado',
    role: 'Co-Founder & Head of Infrastructure',
    bio: 'Ingeniero de infraestructura privada. Diseña servicios rápidos, escalables y resistentes para que las plataformas funcionen sin intermediarios.',
    superpower: 'Infraestructura Resiliente',
    stack: ['CI/CD', 'Java', 'Python', 'Cloud Sec'],
    image: teamPabloImage,
    social: {
      linkedin: 'https://www.linkedin.com/in/pablo-hurtado-gonzalo-9a5478237/',
      github: 'https://github.com/PabloHurtadoGonzalo86',
    },
  },
  {
    name: 'Jesús Hidalgo',
    role: 'Business Strategy & Automation Lead',
    bio: 'Estratega y experto en sistemas industriales. Convierte necesidades de negocio complejas en automatizaciones útiles para operaciones reales.',
    superpower: 'Automatización Estratégica',
    stack: ['Industrial IoT', 'AI Strategy', 'Business'],
    image: teamJesusImage,
    social: {
      linkedin: 'https://www.linkedin.com/in/jesus-hidalgo-garcia/',
    },
  },
]

export const testimonials = [
  {
    quote:
      'Desde que instalé Kropia, ya no tengo que ir al cortijo cada mañana solo para ver cómo están las ventanas. Ahora abro el móvil mientras desayuno y lo controlo todo.',
    author: 'Antonio García',
    role: 'Agricultor, Almería',
  },
  {
    quote:
      'La tranquilidad de que la aplicación te avise si sube demasiado la temperatura no tiene precio. He salvado la cosecha de este año gracias a una alerta a tiempo.',
    author: 'María Rodríguez',
    role: 'Productora hortofrutícola',
  },
]

export const faqs = [
  {
    question: '¿Qué pasa si se va la luz en el invernadero?',
    answer:
      'Los equipos pueden incluir batería de respaldo y una alerta crítica para avisarle del corte de energía en cuanto se detecte.',
  },
  {
    question: '¿Necesito tener Wi-Fi allí?',
    answer:
      'No tiene por qué. La instalación puede trabajar con conectividad móvil industrial para zonas rurales con cobertura limitada.',
  },
  {
    question: '¿Es difícil de usar la aplicación?',
    answer:
      'No. La interfaz está pensada para revisar datos clave, recibir alertas y activar controles sin tecnicismos innecesarios.',
  },
]
