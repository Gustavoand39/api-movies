# Movies API

## Descripción

Es un sitio web que permite a los usuario ver las películas y series que están en cartelera, las más populares y las que se encuentran en tendencia, así como detalles extra de cada película/serie. Además, permite buscar películas y series por su nombre.

El propósito de este proyecto es poner en práctica los conocimientos adquiridos de React y aprender a consumir una API externa.

## Desarrollo

Para el desarrollo de este proyecto se utilizó React y la API de [The Movie Database](https://www.themoviedb.org/), la cual permite obtener información de películas y series.

Para poder consumir la API se utilizó el Hook `useEffect`, el cual permite ejecutar código cuando se monta el componente. Además, se utilizó el Hook `useState` para poder almacenar el estado de los componentes.

## API Key

Para poder consumir la API es necesario tener una API Key. Para obtenerla, es necesario crear una cuenta en [The Movie Database](https://www.themoviedb.org/). Una vez creada la cuenta, se debe ir a la sección de configuración y en la pestaña de API se puede obtener la API Key.

Una vez obtenida la API Key, se debe crear un archivo llamado `.env` en la raíz del proyecto y dentro de este archivo se debe agregar la siguiente línea:

```
REACT_APP_API_KEY=API_KEY
```

Donde `API_KEY` es la API Key obtenida anteriormente.

## Instalación y ejecución

Para poder ejecutar este proyecto es necesario tener instalado [Node.js](https://nodejs.org/es/).

1. Clonar el repositorio
2. Instalar las dependencias con el comando `npm install`
3. Ejecutar el comando `npm start` para iniciar el servidor
4. Se abrirá una ventana en el navegador con la aplicación en funcionamiento.
5. Para detener el servidor, presionar `Ctrl + C` en la terminal, posteriormente, ingresar `s` y presionar `Enter`.

## Atribuciones

El proyecto fue realizado gracias a la API de [The Movie Database](https://www.themoviedb.org/). La información de las películas y series fue obtenida de esta API, la cual es de uso libre. Este proyecto fue realizado con fines educativos y no comerciales.