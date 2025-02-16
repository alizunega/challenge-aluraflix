# AluraTube

AluraTube es una plataforma diseñada para gestionar videos, donde puedes listar, registrar, actualizar y eliminar videos. Este proyecto utiliza **React** con **Vite**, implementa **Material UI** para la interfaz de usuario, y se conecta a **MockAPI** para el manejo de datos. El proyecto se despliega en **Vercel**, lo que permite que sea accesible desde cualquier navegador.

Este desafío está diseñado para reforzar tus conocimientos en React, abarcando temas como la componentización, el uso de hooks, el consumo de APIs y el manejo de rutas.

---

## 🚀 Características

- Listar videos con opciones de filtrado por categorías.
- Registrar nuevos videos con un formulario validado.
- Editar información de videos existentes.
- Eliminar videos seleccionados.
- Diseño responsive y atractivo gracias a **Material UI**.
- Consumo de API utilizando **axios** y conexión con **MockAPI**.

---

## 📦 Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:    

1. Clona este repositorio:    
   ``` git clone https://github.com/ali-zunega/challenge-aluraflix.git ```    
   
2. Ingresa al directorio del proyecto:    
  ``` cd challenge-aluraflix ```     

3. Instala las dependencias del proyecto:     
  ``` npm install ```     

4. Inicia el servidor de desarrollo:      
  ``` npm run dev ```    

5. Se abrirá el proyecto en tu navegador por defecto, sino puedes abrir la siguiente dirección:       
   ``` localhost: 3000 ```    

---

## 🛠️ Tecnologías Utilizadas    

<div>
    <p>React, JavaScript, Vite, Material UI </p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,js,vite,materialui&theme=dark" />
  </a>
</div>


```
React: Librería principal para construir la interfaz de usuario.
Vite: Herramienta rápida y ligera para el desarrollo de proyectos en React.
Material UI: Biblioteca de componentes para el diseño de la interfaz.
axios: Para el consumo de APIs.
MockAPI: API temporal para simular operaciones CRUD.
React Router: Manejo de rutas en la aplicación.
Vercel: Plataforma para el despliegue del proyecto.
```

---

## 📂 Estructura del Proyecto    

```
src/
├── components/       
├── pages/           
├── context/          
├── App.jsx        
└── main.jsx          

```
---

## 🌐 Despliegue en Vercel    

El proyecto será desplegado en Vercel, facilitando su acceso en línea. Una vez desplegado, puedes acceder al proyecto utilizando el siguiente enlace:    

[AluraTube](https://challenge-aluraflix-seven.vercel.app/)

---

## 🔗 API MockAPI     

El proyecto utiliza MockAPI para manejar los datos de los videos. Si deseas, cuentas con un archivo json (```db.json```) para trabajar con el de forma local. Recuerda hacer las modificaciones correspondientes.

Ejemplo de la estructura de un video:

```
{
  "id": "1",
  "title": "Introducción a React",
  "description": "Aprende los conceptos básicos de React.",
  "url": "https://www.youtube.com/watch?v=example",
  "img": "https://img.youtube.com/vi/example/maxresdefault.jpg"
  "categoria": "Programación"
}
```
---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

---

## 📬 Contacto

- Alicia Zuñega - [@alizunega](https://github.com/alizunega)




