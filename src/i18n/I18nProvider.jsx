import { useEffect, useMemo } from 'react'

import { legalPages } from '../data/legalContent'
import { siteContent } from '../data/siteContent'
import { I18nContext } from './i18nContext'
import { applyMetadata } from './metadata'
import { buildPath, buildSectionPath, getAlternatePath, getRouteInfo, sectionIds } from './routing'

export function I18nProvider({ children }) {
  const routeInfo = getRouteInfo(window.location.pathname)
  const locale = routeInfo.locale
  const content = siteContent[locale]
  const legalPage = legalPages[locale][routeInfo.page] ?? null
  const notFoundPage = routeInfo.page === 'notFound'

  const metadata = useMemo(
    () =>
      legalPage
        ? {
            description: legalPage.intro,
            locale,
            ogLocale: content.metadata.ogLocale,
            title: `${legalPage.title} | Kropia`,
          }
        : notFoundPage
          ? {
              description: content.notFound.text,
              locale,
              ogLocale: content.metadata.ogLocale,
              title: content.notFound.title + ' | Kropia',
            }
          : {
              ...content.metadata,
              locale,
            },
    [content.metadata, content.notFound, legalPage, locale, notFoundPage],
  )

  useEffect(() => {
    applyMetadata(metadata)
  }, [metadata])

  const value = useMemo(
    () => ({
      content,
      legalPage,
      locale,
      routeInfo,
      routeSectionIds: sectionIds[locale],
      alternatePath: (nextLocale) => getAlternatePath(routeInfo, nextLocale, window.location.hash),
      pathFor: (page, hash) => buildPath(locale, page, hash),
      sectionPath: (section) => buildSectionPath(locale, section),
    }),
    [content, legalPage, locale, routeInfo],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
