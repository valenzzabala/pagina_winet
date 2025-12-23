# WiNet Soluciones — Sitio Web

Sitio web institucional para **WiNet Soluciones**, enfocado en mostrar servicios de seguridad, presentación de la empresa, clientes y vías de contacto.

- **Dominio**: https://www.winetsoluciones.com.ar

## Tecnologías

- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animaciones)

## Requisitos

- Node.js (recomendado: **18+**)
- npm (o pnpm/yarn)

## Instalación

```bash
npm install
```

## Desarrollo (modo local)

```bash
npm run dev
```

Vite levantará el servidor de desarrollo y vas a poder ver el sitio en el puerto configurado (por defecto suele ser `5173`, en este proyecto puede estar configurado a `3000`).

## Build (producción)

```bash
npm run build
```

## Preview del build

```bash
npm run preview
```

## Estructura del proyecto

- `index.html`: entrypoint del proyecto.
- `src/`
  - `App.tsx`: layout principal del sitio (navbar, secciones, animaciones).
  - `main.tsx`: bootstrap de React.
  - `index.css`: estilos globales (Tailwind).
  - `assets/`: imágenes del sitio (logo, hero, logos de clientes, etc.).

## Contenido del sitio

- **Hero** (portada)
- **Nosotros**
- **Servicios**
- **Nuestros Clientes** (logos)
- **Contacto** (incluye mapa y links)

## Logos de clientes

Los logos se encuentran en `src/assets/`.
Si agregás nuevos logos, asegurate de mantener nombres consistentes (sin caracteres raros si es posible) para facilitar el mapeo.

## Contacto

- WhatsApp: `+54 9 351 520-4125`
- Dirección: Olga Orozco 2855, Local 5, Poeta Lugones, Córdoba
