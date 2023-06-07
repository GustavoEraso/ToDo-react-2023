<style>
  *{
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }

  ul{
    padding-left: 50px;
  }
  .readme-cards-container{    
    display:flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .readme-card{
    height:480px;
    width: 200px;
    border-radius: 15px;
    display: grid;
    grid-template-rows: 5px 45px;
    box-shadow: 0 0 15px black;
    align-items: center;
    overflow:hidden;
    text-align:center;
  }

</style>


# RetroTodo 
RetroTodo es una lista de tareas pendientes con la que podrás ayudar a tu memoria y que no quede ninguna tarea sin cumplir.

RetroTodo comenzó como un [proyecto de curso de react en Platzi](https://platzi.com/cursos/react/), pero quize agregarle algunas funcionalidades extras además de las propuestas en el curso:

## Funcionalidades propuestas en el curso:
* Agregar tareas.
* Eliminar tareas.
* Buscador de tareas.
## Funcionalidades que agregue:
* Descripción en tareas, para así poder tener una lista más limpia y tener más contexto sobre la tarea a realizar.
* Detalles opción detalles en tareas donde podrás ver:
  + Estado (pendiente, completada, Eliminada)
  + Fecha de creación
  + Fecha de finalizada
* Opción de editar las tareas.
* Sección papelera, donde poder ver las tareas eliminadas.
  + En esta sección tiene la posibilidad de:
     - Restaurar una tarea eliminada.
     - Ver descripción de una tarea eliminada.
     - Eliminar definitivamente las tareas.
* Popup de confirmación al momento de:
     + Querer editar una Tarea.
     + Querer eliminar una tarea.
     + Querer restaurar una tarea.
     + Querer Eliminar definitivamente las tareas eliminadas


* Efecto confetti explosion al completar una tarea.



<h2> Capturas de pantalla </h2>

<section class="readme-cards-container">

<div class="readme-card">

  <h3> Pantalla general: </h3>

  <img src="https://i.postimg.cc/CKHqqPxd/main.jpg" alt="imagen de pantalla general" />

</div>
<div class="readme-card">

  <h3> Nueva Tarea: </h3>

  <img src="https://i.postimg.cc/J7xm1qTb/nueva-tarea.jpg" alt="imagen modal de nueva tarea" />
</div>

<div class="readme-card">

<h3> Ver Tarea: </h3>

<img src="https://i.postimg.cc/vB8qXWWs/ver-tarea.jpg"  alt="imagen modal de ver tarea" />
</div>
<div class="readme-card">

  <h3> Ver detalles de tarea: </h3>

  <img src="https://i.postimg.cc/vB8qXWWs/ver-tarea.jpg"  alt="imagen modal de ver detalles de tarea" />
</div>

<div class="readme-card">

  <h3> Popup de confirmación: </h3>
  <img src="https://i.postimg.cc/Nf0yYLxj/popup-confirmacion-edicion.jpg" alt="imagen modal de confirmacion" />
</div>

<div class="readme-card">

 <h3> Efecto confetti: </h3>

  <img src="https://i.postimg.cc/hvkNCXD1/confetti.jpg" alt="imagen efecto confetti" />

</div>
</section>





## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
