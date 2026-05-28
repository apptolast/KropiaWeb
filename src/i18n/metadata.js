function setMetaAttribute(attributeName, attributeValue, content) {
  const element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`)

  if (element) {
    element.setAttribute('content', content)
  }
}

export function applyMetadata({ description, locale, ogLocale, title }) {
  document.documentElement.lang = locale
  document.title = title

  setMetaAttribute('name', 'description', description)
  setMetaAttribute('property', 'og:locale', ogLocale)
  setMetaAttribute('property', 'og:title', title)
  setMetaAttribute('property', 'og:description', description)
  setMetaAttribute('name', 'twitter:title', title)
  setMetaAttribute('name', 'twitter:description', description)
}
