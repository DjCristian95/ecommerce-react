# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

# Curso React - Ecommerce Demo


####  Autor: Cristian Murcia


## Sobre el proyecto
#### Proyecto que forma parte de la entrega final del curso realizado con React para la plataforma CoderHouse

Se trata de un ecommerce básico donde se fueron desarrollando y aplicando los conocimientos adquiridos en el curso, que a su vez formaron parte de los desafios y entregables semanales.

## Vista previa en vivo.

Haga clic [aquí](https://markdownlivepreview.com/). para ver una vista previa en vivo.

## Empezando

* Clonar el proyecto
```
$ git clone https://github.com/DjCristian95/ecommerce-react.git
```
* Instala las dependencias:
```
$ yarn
or
$ npm install
```
* Ejecutar el proyecto
```
$ npm run dev
# or to build
$ npm run build
# or to start
$ npm start
```

## Implementar en Vercel
* Usar la CLI de Vercel
```
vercel
```
---
## Componentes
* ContactForm
```
ContactForm.jsx
```
* Item
```
ItemComponent.jsx
ItemCountComponent.jsx
ItemDetailComponent.jsx
ItemListComponent
```
* Navbar
```
CartWidgetComponent.jsx
NavbarComponent.jsx
```

## Contenedores
```
ItemDetailContainer.jsx
ItemListContainer.jsx
```
## Contextos
```
CartContext.jsx
```
---
## Cómo funciona

#### Levanta los datos de una base de datos que se encuentra en Firebase, con esa información va llenando las cards dinámicamente y al hacer el proceso de selección de un producto, se pueden ver los detalles del mismo o agregar al carrito. Last cards cuentan con validaciones de cantidad que se pueden agregar segun stock. (Las imagenes son tomadas de publicaciones de mercadolibre)
#### Una vez en el carrito, tenemos información del item seleccionado, nos permite borrarlo del carrito, vaciar el carrito o finalizar la compra.
#### Al finalizar la compra se nos despliega un formulario, en el cual completamos los datos personales y al confirmar la misma, se persisten los datos de la orden en base de datos y se devuelve por pantalla el id del pedido realizado.
