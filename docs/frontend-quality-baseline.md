# Frontend Quality Baseline

Estado inicial del trabajo diario para elevar KropiaWeb a un estandar frontend senior y verificable.

## Alcance

- Stack actual: React 19, Vite 8, Sass/SCSS, ESLint flat config, pnpm y nginx.
- Gate minimo local: `pnpm check`, que ejecuta lint y build de produccion.
- Rama inicial: `chore/frontend-quality-baseline`.

## Referencias oficiales consultadas

- React Rules: componentes y hooks deben mantenerse puros, los efectos deben vivir fuera del render y React recomienda Strict Mode junto con `eslint-plugin-react-hooks`.
- Vite Env and Modes: solo las variables con prefijo `VITE_` se exponen al cliente, y `import.meta.env` se reemplaza de forma estatica durante build.
- Sass `@use`: el sistema de modulos permite separar tokens y parciales en lugar de concentrar toda la arquitectura visual en un unico archivo global.
- ESLint Ignore Files: en flat config conviene declarar ignores globales explicitos para artefactos generados y caches locales.
- MDN Accessibility: la interfaz debe funcionar con HTML semantico, teclado, estados anunciables y contenido comprensible para distintos usuarios y tecnologias de asistencia.
- web.dev Web Vitals: el rendimiento debe revisarse con senales centradas en experiencia de usuario, especialmente Core Web Vitals.

## Decisiones aplicadas

- `src/styles/main.scss` queda como entrypoint pequeno y delega en parciales por responsabilidad.
- Los tokens visuales viven en `src/styles/_tokens.scss` y se consumen con `@use`.
- Google Fonts sale de SCSS y se carga desde `index.html` con `preconnect`.
- Las imagenes principales pasan de `public/assets` a `src/assets` para que Vite genere nombres con hash y nginx pueda cachear assets construidos como inmutables sin dejar imagenes publicas stale.
- El menu movil se puede cerrar con Escape.
- FAQ enlaza botones y paneles con `aria-controls`, `aria-labelledby` y `hidden`.
- El formulario anuncia estados con `role=status/alert`, `aria-live`, `aria-busy` y autocompletado en campos de contacto.

## Backlog tecnico

- Centralizar todos los textos de negocio que aun viven en componentes.
- Separar datos editables de componentes React en `siteContent.js` usando claves semanticas para iconos.
- Evaluar TypeScript o `checkJs` + JSDoc para contratos de contenido.
- Proteger el formulario con backend/edge function, rate limit y anti-spam si pasa a produccion real.
- Anadir auditoria visual con navegador y Lighthouse/PageSpeed cuando haya URL de entorno estable.
- Revisar optimizacion de imagenes grandes y formatos modernos.
