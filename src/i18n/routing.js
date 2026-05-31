export const defaultLocale = 'es'
export const supportedLocales = ['es', 'en']

export const localeNames = {
  es: 'Español',
  en: 'English',
}

export const localeShortNames = {
  es: 'ES',
  en: 'EN',
}

export const routePaths = {
  es: {
    home: '/',
    privacy: '/privacidad',
    legalNotice: '/aviso-legal',
  },
  en: {
    home: '/en',
    privacy: '/en/privacy',
    legalNotice: '/en/legal-notice',
  },
}

export const sectionIds = {
  es: {
    home: 'inicio',
    features: 'funcionalidades',
    implementation: 'implantacion',
    contact: 'contacto',
    value: 'valor-title',
    faq: 'faq-title',
  },
  en: {
    home: 'home',
    features: 'features',
    implementation: 'implementation',
    contact: 'contact',
    value: 'value-title',
    faq: 'faq-title',
  },
}

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function getRouteInfo(pathname) {
  const normalizedPath = normalizePath(pathname)

  for (const locale of supportedLocales) {
    for (const [page, path] of Object.entries(routePaths[locale])) {
      if (normalizePath(path) === normalizedPath) {
        return { locale, page }
      }
    }
  }

  if (normalizedPath === '/en' || normalizedPath.startsWith('/en/')) {
    return { locale: 'en', page: 'notFound' }
  }

  return { locale: defaultLocale, page: 'notFound' }
}

export function buildPath(locale, page = 'home', hash) {
  const basePath = routePaths[locale]?.[page] ?? routePaths[defaultLocale].home

  return hash ? `${basePath}#${hash}` : basePath
}

export function buildSectionPath(locale, section) {
  return buildPath(locale, 'home', sectionIds[locale][section])
}

export function getSectionKeyFromHash(locale, hash) {
  const normalizedHash = hash.replace(/^#/, '')

  return Object.entries(sectionIds[locale]).find(([, value]) => value === normalizedHash)?.[0]
}

export function getAlternatePath(routeInfo, nextLocale, hash = '') {
  if (routeInfo.page === 'privacy' || routeInfo.page === 'legalNotice') {
    return buildPath(nextLocale, routeInfo.page)
  }

  const currentSection = getSectionKeyFromHash(routeInfo.locale, hash)

  return buildPath(
    nextLocale,
    'home',
    currentSection ? sectionIds[nextLocale][currentSection] : undefined,
  )
}
