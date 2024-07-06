
# ABC Movie Tracker

ABC Movie Tracker es una aplicación web que permite a los usuarios buscar películas, ver el detalles de estas y guardarlas como favoritas. La aplicación está desarrollada con ReactJS, TypeScript y Vite.

## Índice

- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Despliegue](#despliegue)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Features](#features)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

### Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior) o Yarn (v1.22 o superior)

### Clonar el Repositorio

```bash
git clone https://github.com/Simonba97/abc-movies-tracker-web-app.git
cd abc-movies-tracker-web-app
```

### Instalar Vite

Si no tienes Vite instalado globalmente, puedes instalarlo con npm o Yarn:

```bash
# Usando npm 
npm install -g create-vite 

# Usando Yarn 
yarn global add create-vite
```

### Instalar Dependencias

Una vez clonado el repositorio, instala las dependencias del proyecto:

```bash
# Usando npm 
npm install 

# Usando Yarn 
yarn install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
# Usando npm 
npm run dev 

# Usando 
Yarn yarn dev
```
La aplicación estará disponible en http://localhost:3000

## Despliegue

La aplicación está desplegada en Vercel y se puede acceder a través del siguiente link: [ABC Movie Tracker en Vercel](https://abc-movies-tracker-web-app.vercel.app/).

## Estructura del Proyecto

```plaintext
src/
├── components/
│   └── common/
├── config/
├── hooks/
├── models/
├── pages/
└── services/
    └── core/
 ````

- **components/**: Contiene los componentes reutilizables de la aplicación.
- **config/**: Archivos de configuración, como las URL Bases y demás.
- **hooks/**: Hooks personalizados.
- **models/**: Definiciones de los modelos de datos.
- **pages/**: Componentes de las páginas.
- **services/**: Servicios para obtener información de la API de TMDb.

## Features

- Búsqueda de películas.
- Visualización de detalles de películas.
- Guardar películas como favoritas.
- Paginación de resultados.
- Diseño multiplataforma (Mobile first)

## Tecnologías Utilizadas

- React JS
- TypeScript
- Vite
- Tailwind CSS
- Axios
- react-router-dom
- React Router
- DateFns