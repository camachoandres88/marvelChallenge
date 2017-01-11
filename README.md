1. Capas de la aplicación:

La aplicación fue desarrollada con AngularJS 1 y Sass como preprocesador de
CSS. Diseñe la aplicación de tal forma que permitiera trabajar con una arquitectura
MVC, adicionando a ésta una capa de componentes o directivas:

a. Modelo : Se contemplan todas los objetos y/o clases que permiten la
manipulación y consumo de datos. En nuestro caso todos los objetos y/o
clases se encuentran bajo la ruta ‘/app/scripts/services’
b. Vista : Se contemplan todos los archivos html que generan una
representación visual al usuario. Se encuentran bajo la ruta ‘/app/views’
c. Controlador : Se contemplan todas los objetos y/o clases que conectan la
vista con el modelo y viceversa. En nuestro caso se crearon bajo una
estructura modular dentro de la ruta ‘/app/scripts/modules’.
d. Componentes o directivas : Se contemplan todas los objetos y/o clases
orientados a funcionar en conjunto como un componente, reutilizable en
cualquier parte de la aplicación, ‘state-less’ y con funcionamiento
independiente de cualquier módulo o servicio. En nuestro caso se crearon
bajo la la ruta ‘/app/scripts/directives.

La aplicación se agrupó en las siguientes subcarpetas para facilitar la automatización
de tareas en grunt como: revisión de sintaxis, ejecución de pruebas unitarias
,minificación, compresión, unión de archivos de tipo similar, generación de archivos
de distribución y publicación.

a. Images : Archivos png, jpg o gif.
b. Scripts: Archivos Javascript.
c. Styles: Archivos CSS o fuentes.
d. Views: Archivos HTML.

Los paquetes que usa grunt para la automatización de las tareas anteriormente
descritas se instalaron a través de Npm​ y se alojaron en la carpeta “node_modules”
Los paquetes necesarios para el funcionamiento de la aplicación se instalaron a
través de Bower​ y se alojaron en la carpeta “bower_components”.

Las pruebas unitarias se encuentran en la carpeta ‘test’, se ejecutan con Karma y
fueron codificadas con Jasmine.

Se publicó la plataforma en la nube de azure.

NOTA : La aplicación se desarrolló con ES5 porque varios de los paquetes que uso
en conjunto con grunt aún no soportan ES6.

2. Responsabilidad de cada clase creada:

La responsabilidad de cada clase creada está definida en la documentación de cada clase
dentro del código. Me base en el estándar de ngDocs​ para dicha documentación.
