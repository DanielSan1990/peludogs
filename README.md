# Peludogs Landing Page

Bienvenido al repositorio de **Peludogs Landing Page**, una landing page diseñada para un negocio de peluquería canina. Este proyecto utiliza Astro con integración de React y TailwindCSS para proporcionar una experiencia de desarrollo moderna y eficiente.

## Tabla de Contenidos

- [Peludogs Landing Page](#peludogs-landing-page)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Instalación](#instalación)
  - [Scripts Disponibles](#scripts-disponibles)
    - [`npm run dev`](#npm-run-dev)
    - [`npm run build`](#npm-run-build)
    - [`npm run preview`](#npm-run-preview)
    - [`npm run astro`](#npm-run-astro)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Dependencias](#dependencias)
  - [DevDependencies](#devdependencies)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

## Instalación

Para comenzar con este proyecto, primero clona el repositorio y luego instala las dependencias utilizando npm o yarn:

```bash
git clone https://github.com/tu-usuario/peludogs-landing-page.git
cd peludogs-landing-page
npm install
# o
yarn install
```

## Scripts Disponibles

En el proyecto puedes ejecutar los siguientes scripts:

### `npm run dev`

Inicia el servidor de desarrollo en `http://localhost:3000`.

### `npm run build`

Realiza una revisión del código con `astro check` y luego construye el proyecto para producción.

### `npm run preview`

Previsualiza el proyecto construido en `http://localhost:3000`.

### `npm run astro`

Ejecuta el CLI de Astro.

## Estructura del Proyecto

```plaintext
src
├── components
│   ├── Card.astro
│   ├── Footer.astro
│   ├── Gallery.jsx
│   └── Header.astro
├── constants
│   ├── common.ts
│   └── meta.ts
├── env.d.ts
├── layouts
│   └── Layout.astro
├── pages
│   └── index.astro
├── styles
│   └── index.css
└── utils
    ├── header.js
    └── hideElfsightWidget.js
```

## Dependencias

El proyecto utiliza las siguientes dependencias:

- `@astrojs/check`: ^0.5.10
- `@astrojs/react`: ^3.6.0
- `@astrojs/tailwind`: ^5.1.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-responsive-carousel`: ^3.2.23
- `tailwindcss`: ^3.4.3
- `typescript`: ^5.4.3

## DevDependencies

El proyecto utiliza las siguientes dependencias de desarrollo:

- `@types/node`: ^20.11.30
- `astro`: ^4.11.6

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.