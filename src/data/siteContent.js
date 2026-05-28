import {
  Activity,
  BellRing,
  Database,
  Droplets,
  Grid2X2,
  RadioTower,
  Settings2,
  ShieldCheck,
  TrendingUp,
  UsersRound,
  Zap,
} from 'lucide-react'

import greenhouseImage from '../assets/greenhouse.jpg'
import teamAlbertoImage from '../assets/team-alberto.jpg'
import teamJesusImage from '../assets/team-jesus.jpg'
import teamPabloImage from '../assets/team-pablo.jpg'

export const navItems = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Funcionalidades', href: '/#funcionalidades' },
  { label: 'Implantación', href: '/#implantacion' },
  { label: 'Contacto', href: '/#contacto' },
]

export const valueCards = [
  {
    icon: RadioTower,
    title: 'Datos en tiempo real',
    text: 'Lecturas vivas de sensores y actuadores por invernadero, sector y dispositivo.',
  },
  {
    icon: BellRing,
    title: 'Alertas operativas',
    text: 'Avisos con severidad y estado de resolución para actuar antes de que el problema escale.',
    tone: 'warning',
  },
  {
    icon: Droplets,
    title: 'Riego y consignas',
    text: 'Configuración de horarios, sectores, tiempos de apertura y valores objetivo desde la app.',
  },
  {
    icon: Database,
    title: 'Histórico útil',
    text: 'Datos agregados por dispositivo y periodo para entender tendencias y tomar mejores decisiones.',
    tone: 'earth',
  },
]

export const featureCards = [
  {
    icon: Activity,
    title: 'Monitorización jerárquica',
    text: 'Vista organizada por cliente, invernadero, sector, dispositivo, consigna y alerta, con valor actual y última actualización.',
    className: 'feature-card--wide',
    image: greenhouseImage,
  },
  {
    icon: Zap,
    title: 'Comandos remotos',
    text: 'Envía órdenes de control a la instalación de forma remota, con trazabilidad y confirmación del estado.',
    className: 'feature-card--primary',
  },
  {
    icon: TrendingUp,
    title: 'Gráficos históricos',
    text: 'Consulta lecturas y estadísticas por dispositivo para periodos como 24 horas, días o semanas.',
  },
  {
    icon: Grid2X2,
    title: 'Multi-invernadero y sectores',
    text: 'Gestión de varias instalaciones, sectores y dispositivos activos desde una misma organización.',
  },
  {
    icon: UsersRound,
    title: 'Panel de administración',
    text: 'Alta y mantenimiento de clientes, usuarios, invernaderos, sectores, dispositivos, alertas y catálogos.',
  },
]

export const processSteps = [
  {
    title: 'Modelamos la instalación',
    text: 'Definimos la estructura real: cliente, invernaderos, sectores, dispositivos, consignas, usuarios y permisos.',
  },
  {
    title: 'Conectamos datos y control',
    text: 'Conectamos sensores, actuadores y automatismos existentes para que la información y las órdenes fluyan de forma segura.',
  },
  {
    title: 'Configuramos la app',
    text: 'Activamos usuarios, alertas, riego, consignas y vistas para que cada responsable vea solo lo que necesita.',
  },
  {
    title: 'Medimos, ajustamos y evolucionamos',
    text: 'El histórico y las alertas ayudan a detectar patrones, corregir umbrales y ampliar la instalación por fases.',
  },
]

export const pricingPlans = [
  {
    eyebrow: 'Fase 1',
    title: 'Diagnóstico técnico',
    price: 'A medida',
    monthly: 'alcance inicial',
    description: 'Para aterrizar el proyecto sobre una instalación real.',
    features: [
      'Mapa de invernaderos y sectores',
      'Inventario de sensores y actuadores',
      'Revisión de conectividad y datos disponibles',
    ],
  },
  {
    eyebrow: 'Fase 2',
    title: 'Implantación Kropia',
    price: 'Proyecto',
    monthly: 'puesta en marcha',
    description: 'Para conectar la operación diaria al ecosistema Kropia.',
    features: [
      'Datos conectados en tiempo real',
      'App móvil con alertas e histórico',
      'Configuración de riego y consignas',
      'Panel de administración',
    ],
    highlighted: true,
  },
  {
    eyebrow: 'Fase 3',
    title: 'Evolución continua',
    price: 'Continuo',
    monthly: 'soporte y mejora',
    description: 'Para ampliar funcionalidades y mantener el sistema operativo.',
    features: [
      'Nuevos dispositivos y sectores',
      'Ajuste de reglas y umbrales',
      'Mejoras de app y administración',
      'Acompañamiento técnico',
    ],
  },
]

export const teamMembers = [
  {
    name: 'Alberto Hidalgo',
    role: 'Co-Founder & Lead Mobile Architect',
    bio: 'Arquitecto visual especializado en experiencias móviles. Crea interfaces claras y consistentes para reducir fricción entre plataformas.',
    superpower: 'Convergencia Multiplataforma',
    stack: ['Producto móvil', 'UX', 'Plataformas', 'Calidad'],
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
    stack: ['Infraestructura', 'Servicios', 'Seguridad', 'Operación'],
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
    stack: ['Automatización', 'Estrategia', 'Procesos', 'Negocio'],
    image: teamJesusImage,
    social: {
      linkedin: 'https://www.linkedin.com/in/jesus-hidalgo-garcia/',
    },
  },
]

export const productPillars = [
  {
    icon: Settings2,
    title: 'App para operación diaria',
    text: 'La app centraliza el estado de invernaderos, sectores, sensores, consignas, alertas, riego y perfiles en una experiencia sencilla para el equipo.',
  },
  {
    icon: ShieldCheck,
    title: 'Sistema preparado para datos conectados',
    text: 'Kropia recibe la información de la instalación, conserva el histórico y mantiene la app actualizada con los datos más recientes.',
  },
  {
    icon: UsersRound,
    title: 'Administración del sistema',
    text: 'El portal de administración permite gestionar clientes, usuarios, invernaderos, sectores, dispositivos, alertas, ajustes y catálogos.',
  },
]

export const faqs = [
  {
    question: '¿Qué se puede monitorizar con Kropia?',
    answer:
      'La app está preparada para mostrar dispositivos por sector con valor actual, unidad, categoría, tipo y última actualización: temperatura, humedad, batería, presión, radiación u otros sensores que se conecten al sistema.',
  },
  {
    question: '¿Cómo llegan los datos a la app?',
    answer:
      'Los sensores y automatismos de la instalación envían información al sistema Kropia. La plataforma la procesa, conserva el histórico y actualiza la app para que el equipo vea el estado más reciente.',
  },
  {
    question: '¿Se puede controlar el riego?',
    answer:
      'Sí. El proyecto incluye configuración de riego por invernadero y sectores, con días activos, ventana horaria, esperas y tiempos de apertura por sector.',
  },
  {
    question: '¿Kropia guarda histórico?',
    answer:
      'Sí. Kropia conserva lecturas e históricos para consultar estadísticas y gráficas por dispositivo y periodo.',
  },
]
