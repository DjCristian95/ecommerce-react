# Curso React - Ecommerce Demo


####  Autor: Cristian Murcia


## Sobre el proyecto
#### Proyecto que forma parte de la entrega final del curso realizado con React para la plataforma CoderHouse

Se trata de un ecommerce básico donde se fueron desarrollando y aplicando los conocimientos adquiridos en el curso, que a su vez formaron parte de los desafios y entregables semanales.

## Vista previa en vivo.

Haga clic [aquí](https://ecommerce-react-umber.vercel.app/). para ver una vista previa en vivo.

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

```
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


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
