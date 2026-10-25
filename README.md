# AeroMap

AeroMap es una aplicación web sencilla para explorar aeropuertos mediante un
mapa interactivo. Actualmente muestra tres aeropuertos de la zona del Valle de
México, junto con su nombre, ciudad y códigos IATA y OACI.

## Funcionalidades

- Mapa interactivo basado en [Leaflet](https://leafletjs.com/).
- Mapa base proporcionado por [OpenStreetMap](https://www.openstreetmap.org/).
- Marcadores para los aeropuertos incluidos en los datos de la aplicación.
- Ventanas emergentes con información de cada aeropuerto.
- Ajuste automático del mapa para encuadrar todos los aeropuertos.

## Tecnologías

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Leaflet](https://leafletjs.com/) 1.9
- JavaScript y CSS

## Requisitos

- Node.js 18 o una versión posterior.
- npm (incluido normalmente con Node.js).

## Instalación y uso

1. Clona el repositorio y entra en la carpeta del proyecto:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd aeromap
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre en el navegador la dirección que indique Vite, normalmente
   `http://localhost:5173`.

Durante el desarrollo, Vite recarga la aplicación automáticamente cuando
guardas cambios.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión optimizada para producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Comprueba el código con ESLint. |

Para comprobar una compilación antes de publicarla:

```bash
npm run lint
npm run build
npm run preview
```

## Estructura del proyecto

```text
.
├── public/                 # Recursos públicos, como el favicon
├── src/
│   ├── assets/             # Imágenes y recursos de la interfaz
│   ├── components/
│   │   └── MapView.jsx     # Inicialización del mapa y sus marcadores
│   ├── data/
│   │   └── airports.js     # Datos de los aeropuertos
│   ├── App.css             # Estilos principales de la aplicación
│   ├── App.jsx             # Composición de la pantalla principal
│   ├── index.css           # Estilos globales
│   └── main.jsx            # Punto de entrada de React
├── index.html
├── package.json
└── vite.config.js
```

## Añadir o modificar aeropuertos

Los aeropuertos se gestionan en `src/data/airports.js`. Para añadir uno,
incorpora un objeto con esta estructura:

```js
{
    id: 'ABC',
    name: 'Nombre del aeropuerto',
    city: 'Ciudad',
    iata: 'ABC',
    icao: 'XXXX',
    coordinates: [latitud, longitud],
}
```

Las coordenadas deben estar en el orden `[latitud, longitud]`, que es el
formato utilizado por Leaflet. Al volver a cargar la aplicación, el mapa
incluirá automáticamente el nuevo marcador y ajustará sus límites.

## Notas

- El mapa necesita conexión a Internet para cargar las teselas de
  OpenStreetMap.
- La atribución de OpenStreetMap se muestra directamente en el mapa, tal como
  requieren sus condiciones de uso.
- Los datos de aeropuertos son estáticos y forman parte del código fuente; no
  hay una API ni una base de datos configurada actualmente.

## Licencia

No se ha definido una licencia para este proyecto. Si se va a distribuir,
añade una licencia adecuada y actualiza esta sección.
