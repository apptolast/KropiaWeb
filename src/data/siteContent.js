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

import appScreenGreenhouse from '../assets/app-screen-04.png'
import appScreenList from '../assets/app-screen-03.png'
import appScreenTemperature from '../assets/app-screen-05.png'
import greenhouseImage from '../assets/greenhouse.jpg'
import teamAlbertoImage from '../assets/team-alberto.jpg'
import teamJesusImage from '../assets/team-jesus.jpg'
import teamPabloImage from '../assets/team-pablo.jpg'

const sharedTeamSocial = {
  alberto: {
    linkedin: 'https://www.linkedin.com/in/alberto-h-93431a42/',
    github: 'https://github.com/hgarciaalberto',
  },
  pablo: {
    linkedin: 'https://www.linkedin.com/in/pablo-hurtado-gonzalo-9a5478237/',
    github: 'https://github.com/PabloHurtadoGonzalo86',
  },
  jesus: {
    linkedin: 'https://www.linkedin.com/in/jesus-hidalgo-garcia/',
  },
}

export const siteContent = {
  es: {
    metadata: {
      title: 'Kropia | Control de invernaderos',
      description:
        'Kropia: app y plataforma de control para monitorizar invernaderos, sensores, alertas, riego, consignas e histórico en tiempo real.',
      ogLocale: 'es_ES',
    },
    navItems: [
      { label: 'Inicio', section: 'home' },
      { label: 'Funcionalidades', section: 'features' },
      { label: 'Implantación', section: 'implementation' },
      { label: 'Contacto', section: 'contact' },
    ],
    header: {
      navLabel: 'Principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      requestInfo: 'Solicitar información',
      languageLabel: 'Idioma',
      skipToContent: 'Saltar al contenido',
    },
    hero: {
      titlePrefix: 'Controla tu invernadero',
      titleHighlight: 'desde el móvil',
      titleSuffix: ', estés donde estés',
      text: 'Monitoriza sensores, sectores, alertas, riego y consignas desde una app conectada en tiempo real con tu instalación.',
      cta: 'Solicitar información',
      screensLabel: 'Capturas reales de la app Kropia',
      screens: [
        {
          className: 'hero-device__screen--left',
          src: appScreenList,
          imageWidth: 280,
          imageHeight: 592,
          alt: 'Listado de invernaderos en la app Kropia',
        },
        {
          className: 'hero-device__screen--primary',
          src: appScreenGreenhouse,
          imageWidth: 280,
          imageHeight: 592,
          alt: 'Panel de sensores del invernadero en la app Kropia',
        },
        {
          className: 'hero-device__screen--right',
          src: appScreenTemperature,
          imageWidth: 280,
          imageHeight: 592,
          alt: 'Grafica de temperatura historica en la app Kropia',
        },
      ],
    },
    storeBadge: {
      ariaLabel: 'Disponible en Google Play',
      alt: 'Disponible en Google Play',
      fallbackLabel: 'Disponible en Google Play',
    },
    value: {
      title: 'Beneficios principales',
      cards: [
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
      ],
    },
    features: {
      title: 'Qué resuelve Kropia',
      text: 'Una plataforma de app, control y administración pensada para invernaderos conectados.',
      imageAlt: 'Interior de un invernadero monitorizado',
      cards: [
        {
          icon: Activity,
          title: 'Monitorización jerárquica',
          text: 'Vista organizada por cliente, invernadero, sector, dispositivo, consigna y alerta, con valor actual y última actualización.',
          className: 'feature-card--wide',
          image: greenhouseImage,
          imageWidth: 512,
          imageHeight: 512,
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
      ],
    },
    process: {
      title: 'Cómo se implanta Kropia',
      text: 'Partimos de la instalación real y conectamos datos, control y administración por fases.',
      steps: [
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
      ],
    },
    pricing: {
      title: 'Implantación por fases',
      text: 'Cada invernadero parte de un estado distinto. Por eso planteamos el alcance técnico antes de cerrar una propuesta.',
      recommended: 'Recomendado',
      requestQuote: 'Pedir presupuesto',
      plans: [
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
      ],
    },
    team: {
      title: 'Liderazgo técnico de AppToLast',
      text: 'Un equipo senior, sin intermediarios ni gestores innecesarios, aplicado al desarrollo y despliegue de Kropia.',
      portraitAlt: 'Retrato de {name}',
      focusLabel: 'Especialidad',
      stackLabel: 'Perfil técnico de {name}',
      linkedinLabel: 'LinkedIn de {name}',
      githubLabel: 'GitHub de {name}',
      members: [
        {
          name: 'Alberto Hidalgo',
          role: 'Co-Founder & Lead Mobile Architect',
          bio: 'Arquitecto visual especializado en experiencias móviles. Crea interfaces claras y consistentes para reducir fricción entre plataformas.',
          superpower: 'Convergencia Multiplataforma',
          stack: ['Producto móvil', 'UX', 'Plataformas', 'Calidad'],
          image: teamAlbertoImage,
          imageWidth: 534,
          imageHeight: 534,
          social: sharedTeamSocial.alberto,
        },
        {
          name: 'Pablo Hurtado',
          role: 'Co-Founder & Head of Infrastructure',
          bio: 'Ingeniero de infraestructura privada. Diseña servicios rápidos, escalables y resistentes para que las plataformas funcionen sin intermediarios.',
          superpower: 'Infraestructura Resiliente',
          stack: ['Infraestructura', 'Servicios', 'Seguridad', 'Operación'],
          image: teamPabloImage,
          imageWidth: 800,
          imageHeight: 800,
          social: sharedTeamSocial.pablo,
        },
        {
          name: 'Jesús Hidalgo',
          role: 'Business Strategy & Automation Lead',
          bio: 'Estratega y experto en sistemas industriales. Convierte necesidades de negocio complejas en automatizaciones útiles para operaciones reales.',
          superpower: 'Automatización Estratégica',
          stack: ['Automatización', 'Estrategia', 'Procesos', 'Negocio'],
          image: teamJesusImage,
          imageWidth: 462,
          imageHeight: 462,
          social: sharedTeamSocial.jesus,
        },
      ],
    },
    platform: {
      title: 'La plataforma completa',
      text: 'La web ya no habla solo de una app: refleja las piezas reales que sostienen el proyecto.',
      pillars: [
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
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
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
      ],
    },
    contact: {
      title: 'Hablemos de su proyecto',
      text: 'Cuéntenos cuántos invernaderos, sectores y dispositivos quiere conectar. Revisaremos el alcance y le responderemos por correo.',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Su nombre completo',
        phone: 'Teléfono',
        phonePlaceholder: '600 000 000',
        email: 'Email',
        emailPlaceholder: 'correo@ejemplo.com',
        greenhouseCount: 'Número de invernaderos',
        greenhouseOptions: ['1-2 invernaderos', '3-5 invernaderos', 'Más de 5 invernaderos'],
        message: 'Mensaje',
        messagePlaceholder: '¿En qué podemos ayudarle?',
        legalPrefix:
          'Al enviar el formulario, trataremos sus datos para responder a su solicitud. Puede consultar más información en la',
        legalLink: 'política de privacidad',
        legalSuffix: '.',
        sending: 'Enviando...',
        submit: 'Enviar solicitud',
        status: {
          missingConfig:
            'Formulario listo. Falta configurar las variables VITE_EMAILJS_* para activar el envío.',
          success: 'Solicitud enviada. Le contactaremos lo antes posible.',
          error: 'No se ha podido enviar la solicitud. Intente de nuevo en unos minutos.',
        },
      },
    },
    footer: {
      description: 'Monitorización, control e histórico para invernaderos conectados.',
      navigation: 'Navegación',
      legal: 'Legal',
      privacy: 'Privacidad',
      legalNotice: 'Aviso legal',
      contact: 'Contacto',
      copy: '© 2026 Kropia by AppToLast. Todos los derechos reservados.',
    },
    legalPage: {
      back: 'Volver a Kropia',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: 'Página no encontrada',
      text: 'La dirección que ha abierto no existe o ya no está disponible.',
      cta: 'Volver al inicio',
    },
  },
  en: {
    metadata: {
      title: 'Kropia | Greenhouse control',
      description:
        'Kropia: app and control platform for monitoring greenhouses, sensors, alerts, irrigation, setpoints and history in real time.',
      ogLocale: 'en_GB',
    },
    navItems: [
      { label: 'Home', section: 'home' },
      { label: 'Features', section: 'features' },
      { label: 'Implementation', section: 'implementation' },
      { label: 'Contact', section: 'contact' },
    ],
    header: {
      navLabel: 'Main',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      requestInfo: 'Request information',
      languageLabel: 'Language',
      skipToContent: 'Skip to content',
    },
    hero: {
      titlePrefix: 'Control your greenhouse',
      titleHighlight: 'from your mobile',
      titleSuffix: ', wherever you are',
      text: 'Monitor sensors, zones, alerts, irrigation and setpoints from an app connected in real time with your installation.',
      cta: 'Request information',
      screensLabel: 'Real screenshots of the Kropia app',
      screens: [
        {
          className: 'hero-device__screen--left',
          src: appScreenList,
          imageWidth: 280,
          imageHeight: 592,
          alt: 'Greenhouse list in the Kropia app',
        },
        {
          className: 'hero-device__screen--primary',
          src: appScreenGreenhouse,
          imageWidth: 280,
          imageHeight: 592,
          alt: 'Greenhouse sensor panel in the Kropia app',
        },
        {
          className: 'hero-device__screen--right',
          src: appScreenTemperature,
          imageWidth: 280,
          imageHeight: 592,
          alt: 'Historical temperature chart in the Kropia app',
        },
      ],
    },
    storeBadge: {
      ariaLabel: 'Get it on Google Play',
      alt: 'Get it on Google Play',
      fallbackLabel: 'Get it on Google Play',
    },
    value: {
      title: 'Main benefits',
      cards: [
        {
          icon: RadioTower,
          title: 'Real-time data',
          text: 'Live readings from sensors and actuators by greenhouse, zone and device.',
        },
        {
          icon: BellRing,
          title: 'Operational alerts',
          text: 'Alerts with severity and resolution status so teams can act before issues escalate.',
          tone: 'warning',
        },
        {
          icon: Droplets,
          title: 'Irrigation and setpoints',
          text: 'Configure schedules, zones, opening times and target values from the app.',
        },
        {
          icon: Database,
          title: 'Useful history',
          text: 'Aggregated data by device and period to understand trends and make better decisions.',
          tone: 'earth',
        },
      ],
    },
    features: {
      title: 'What Kropia solves',
      text: 'An app, control and administration platform designed for connected greenhouses.',
      imageAlt: 'Interior of a monitored greenhouse',
      cards: [
        {
          icon: Activity,
          title: 'Hierarchical monitoring',
          text: 'A structured view by customer, greenhouse, zone, device, setpoint and alert, with current value and latest update.',
          className: 'feature-card--wide',
          image: greenhouseImage,
          imageWidth: 512,
          imageHeight: 512,
        },
        {
          icon: Zap,
          title: 'Remote commands',
          text: 'Send control orders to the installation remotely, with traceability and status confirmation.',
          className: 'feature-card--primary',
        },
        {
          icon: TrendingUp,
          title: 'Historical charts',
          text: 'Review readings and statistics by device for periods such as 24 hours, days or weeks.',
        },
        {
          icon: Grid2X2,
          title: 'Multi-greenhouse and zones',
          text: 'Manage several installations, zones and active devices from the same organization.',
        },
        {
          icon: UsersRound,
          title: 'Administration panel',
          text: 'Create and maintain customers, users, greenhouses, zones, devices, alerts and catalogues.',
        },
      ],
    },
    process: {
      title: 'How Kropia is implemented',
      text: 'We start from the real installation and connect data, control and administration in phases.',
      steps: [
        {
          title: 'We model the installation',
          text: 'We define the real structure: customer, greenhouses, zones, devices, setpoints, users and permissions.',
        },
        {
          title: 'We connect data and control',
          text: 'We connect existing sensors, actuators and automation so information and orders flow securely.',
        },
        {
          title: 'We configure the app',
          text: 'We activate users, alerts, irrigation, setpoints and views so each responsible person sees only what they need.',
        },
        {
          title: 'We measure, adjust and evolve',
          text: 'History and alerts help detect patterns, correct thresholds and expand the installation in phases.',
        },
      ],
    },
    pricing: {
      title: 'Phased implementation',
      text: 'Every greenhouse starts from a different point. That is why we define the technical scope before closing a proposal.',
      recommended: 'Recommended',
      requestQuote: 'Request a quote',
      plans: [
        {
          eyebrow: 'Phase 1',
          title: 'Technical diagnosis',
          price: 'Tailored',
          monthly: 'initial scope',
          description: 'To ground the project in a real installation.',
          features: [
            'Greenhouse and zone map',
            'Sensor and actuator inventory',
            'Review of connectivity and available data',
          ],
        },
        {
          eyebrow: 'Phase 2',
          title: 'Kropia implementation',
          price: 'Project',
          monthly: 'launch',
          description: 'To connect daily operations to the Kropia ecosystem.',
          features: [
            'Connected real-time data',
            'Mobile app with alerts and history',
            'Irrigation and setpoint configuration',
            'Administration panel',
          ],
          highlighted: true,
        },
        {
          eyebrow: 'Phase 3',
          title: 'Continuous evolution',
          price: 'Ongoing',
          monthly: 'support and improvement',
          description: 'To expand functionality and keep the system operational.',
          features: [
            'New devices and zones',
            'Rule and threshold tuning',
            'App and administration improvements',
            'Technical support',
          ],
        },
      ],
    },
    team: {
      title: 'Technical leadership from AppToLast',
      text: 'A senior team, with no unnecessary intermediaries or managers, focused on the development and deployment of Kropia.',
      portraitAlt: 'Portrait of {name}',
      focusLabel: 'Specialty',
      stackLabel: 'Technical profile for {name}',
      linkedinLabel: '{name} on LinkedIn',
      githubLabel: '{name} on GitHub',
      members: [
        {
          name: 'Alberto Hidalgo',
          role: 'Co-Founder & Lead Mobile Architect',
          bio: 'Visual architect specialized in mobile experiences. He creates clear, consistent interfaces that reduce friction across platforms.',
          superpower: 'Multiplatform convergence',
          stack: ['Mobile product', 'UX', 'Platforms', 'Quality'],
          image: teamAlbertoImage,
          imageWidth: 534,
          imageHeight: 534,
          social: sharedTeamSocial.alberto,
        },
        {
          name: 'Pablo Hurtado',
          role: 'Co-Founder & Head of Infrastructure',
          bio: 'Private infrastructure engineer. He designs fast, scalable and resilient services so platforms can operate without intermediaries.',
          superpower: 'Resilient infrastructure',
          stack: ['Infrastructure', 'Services', 'Security', 'Operations'],
          image: teamPabloImage,
          imageWidth: 800,
          imageHeight: 800,
          social: sharedTeamSocial.pablo,
        },
        {
          name: 'Jesús Hidalgo',
          role: 'Business Strategy & Automation Lead',
          bio: 'Strategist and industrial systems expert. He turns complex business needs into useful automations for real operations.',
          superpower: 'Strategic automation',
          stack: ['Automation', 'Strategy', 'Processes', 'Business'],
          image: teamJesusImage,
          imageWidth: 462,
          imageHeight: 462,
          social: sharedTeamSocial.jesus,
        },
      ],
    },
    platform: {
      title: 'The complete platform',
      text: 'Kropia is more than an app: it brings together the pieces that support the whole project.',
      pillars: [
        {
          icon: Settings2,
          title: 'App for daily operations',
          text: 'The app centralizes the status of greenhouses, zones, sensors, setpoints, alerts, irrigation and profiles in a simple experience for the team.',
        },
        {
          icon: ShieldCheck,
          title: 'System ready for connected data',
          text: 'Kropia receives information from the installation, keeps historical records and keeps the app updated with the latest data.',
        },
        {
          icon: UsersRound,
          title: 'System administration',
          text: 'The administration portal lets you manage customers, users, greenhouses, zones, devices, alerts, settings and catalogues.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'What can be monitored with Kropia?',
          answer:
            'The app is prepared to show devices by zone with current value, unit, category, type and last update: temperature, humidity, battery, pressure, radiation or other sensors connected to the system.',
        },
        {
          question: 'How does data reach the app?',
          answer:
            'The installation sensors and automation send information to the Kropia system. The platform processes it, keeps historical records and updates the app so the team sees the latest status.',
        },
        {
          question: 'Can irrigation be controlled?',
          answer:
            'Yes. The project includes irrigation configuration by greenhouse and zones, with active days, time windows, waits and opening times by zone.',
        },
        {
          question: 'Does Kropia keep historical data?',
          answer:
            'Yes. Kropia keeps readings and historical records so teams can review statistics and charts by device and period.',
        },
      ],
    },
    contact: {
      title: 'Tell us about your project',
      text: 'Tell us how many greenhouses, zones and devices you want to connect. We will review the scope and reply by email.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        phone: 'Phone',
        phonePlaceholder: '+44 7000 000000',
        email: 'Email',
        emailPlaceholder: 'name@example.com',
        greenhouseCount: 'Number of greenhouses',
        greenhouseOptions: ['1-2 greenhouses', '3-5 greenhouses', 'More than 5 greenhouses'],
        message: 'Message',
        messagePlaceholder: 'How can we help?',
        legalPrefix:
          'By submitting the form, we will process your data to respond to your request. You can read more in the',
        legalLink: 'privacy policy',
        legalSuffix: '.',
        sending: 'Sending...',
        submit: 'Send request',
        status: {
          missingConfig:
            'Form ready. Configure the VITE_EMAILJS_* variables to enable delivery.',
          success: 'Request sent. We will contact you as soon as possible.',
          error: 'The request could not be sent. Please try again in a few minutes.',
        },
      },
    },
    footer: {
      description: 'Monitoring, control and history for connected greenhouses.',
      navigation: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy',
      legalNotice: 'Legal notice',
      contact: 'Contact',
      copy: '© 2026 Kropia by AppToLast. All rights reserved.',
    },
    legalPage: {
      back: 'Back to Kropia',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: 'Page not found',
      text: 'The address you opened does not exist or is no longer available.',
      cta: 'Back to home',
    },
  },
}
