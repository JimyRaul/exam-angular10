import { ICourse } from '../interfaces/course';

export const coursesMock: ICourse[] = [
    {
        id: 1,
        name: 'Angular 10',
        featured: true,
        image: 'http://examen-nh.jcramireztello.com/media/books/angular10.png',
        language: 'es',
        price: 5000,
        duration: 40,
        lessons: 7,
        deadline: '2021-01-09',
        students: 20,
        summary: 'Angular es el framework para JavaScript estándar para crear webs SPA. Es uno de los frameworks más populares para desarrollar aplicaciones modernas y escalables en el lado del cliente.\r\nSi quieres ser desarrollador web, o incluso si ya te dedicas al desarrollo web, es casi obligatorio aprender todos los frameworks y tecnologías con las que vamos a trabajar en el curso y sobre todo como combinarlas para crear aplicaciones completas a medida.\r\nAngular versión 10 ha dado un salto de calidad con respecto a las versiones anteriores del framework, como AngularJS. Ahora utilizaremos TypeScript para definir nuestras clases, propiedades y métodos, el código es mucho más limpio y se ha mejorado el funcionamiento general del framework.',
        instructor: 1,
        category: 2
    },
    {
        id: 2,
        name: 'Python Avanzado',
        featured: true,
        image: 'http://examen-nh.jcramireztello.com/media/books/dajngo.png',
        language: 'es',
        price: 8000,
        duration: 120,
        lessons: 20,
        deadline: '2021-01-31',
        students: 20,
        summary: 'Django es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador (MVC). Fue desarrollado en origen para gestionar varias páginas orientadas a noticias de la World Company de Lawrence, Kansas, y fue liberada al público bajo una licencia BSD en julio de 2005; el framework fue nombrado en alusión al guitarrista de jazz gitano Django Reinhardt.\r\n\r\nEn junio de 2008 fue anunciado que la recién formada Django Software Foundation se haría cargo de Django en el futuro.\r\n\r\nLa meta fundamental de Django es facilitar la creación de sitios web complejos. Django pone énfasis en el re-uso, la conectividad y extensibilidad de componentes, el desarrollo rápido y el principio No te repitas (DRY, del inglés Dont Repeat Yourself). Python es usado en todas las partes del framework, incluso en configuraciones, archivos, y en los modelos de datos.',
        instructor: 3,
        category: 2
    },
    {
        id: 3,
        name: 'Curso de Diseño UX',
        featured: true,
        image: 'http://examen-nh.jcramireztello.com/media/books/ux.jpeg',
        language: 'es',
        price: 4500,
        duration: 40,
        lessons: 10,
        deadline: '2021-01-09',
        students: 20,
        summary: 'El Diseño de Experiencia de Usuario o User Experience Design (UX) es una de las disciplinas del diseño con mayor crecimiento debido a la explosión de emprendimientos con base tecnológica y a la acogida y adopción de smartphones en todo el mundo. Se ha convertido en uno de los campos con mayor demanda en la actualidad por entidades públicas y privadas que han adoptado los procesos de diseño para crear herramientas que acerquen a la ciudadanía con las políticas internas y motivar el crecimiento de los ecosistemas de innovación, que a su vez impulsan el crecimiento de sus economías.',
        instructor: 2,
        category: 1
    },
    {
        id: 4,
        name: 'Administracion de Base de datos Oracle',
        featured: false,
        image: 'http://examen-nh.jcramireztello.com/media/books/oracle.png',
        language: 'es',
        price: 6000,
        duration: 50,
        lessons: 15,
        deadline: '2021-01-09',
        students: 25,
        summary: 'El administrador de la base de datos de una empresa es siempre considerado como la persona con más experiencia en el área de bases de datos. Por lo anterior, es\r\nconveniente tener muy claras las expectativas que se generan en torno a su trabajo y cuáles son los principales roles que debe asumir dentro del marco corporativo o de un proyecto.',
        instructor: 4,
        category: 3
    },
    {
        id: 5,
        name: 'Especialista en Redes Cisco',
        featured: false,
        image: 'http://examen-nh.jcramireztello.com/media/books/cisco.jpg',
        language: 'es',
        price: 6500,
        duration: 72,
        lessons: 10,
        deadline: '2021-01-09',
        students: 20,
        summary: '¿Qué son las redes cisco?\r\nSi estás leyendo esto probablemente tengas una noción de en qué consisten estas redes pero para los profanos en avances tecnológicos, incluso con los que llevamos conviviendo muchos años, explicaremos de manera rápida en qué consisten estas telarañas digitales.\r\n\r\nCuando hablamos de redes cisco estamos aludiendo a unas redes informáticas basadas en sistemas creados en su día por la prestigiosa empresa tecnológica Cisco Systems. Esta compañía global sigue teniendo muchas de las claves del diseño, construcción y comercialización de las redes.',
        instructor: 4,
        category: 3
    },
    {
        id: 6,
        name: 'Analitica Avanzada con Power BI',
        featured: false,
        image: 'http://examen-nh.jcramireztello.com/media/books/powerbi.png',
        language: 'es',
        price: 4800,
        duration: 40,
        lessons: 15,
        deadline: '2021-01-09',
        students: 10,
        summary: 'Power BI proporciona servicios de BI basados en la nube, conocidos como “Power BI Services”, junto con una interfaz basada en escritorio, denominada “Power BI Desktop”. Ofrece capacidades de almacenamiento de datos, incluyendo preparación de datos, descubrimiento de datos y paneles interactivos. En marzo de 2016, Microsoft lanzó un servicio adicional llamado “Power BI Embedded” en su Azure plataforma en la nube.2​ Uno de los principales diferenciadores del producto es la capacidad de cargar visualizaciones personalizadas.',
        instructor: 1,
        category: 3
    },
    {
        id: 7,
        name: 'CSS Avanzado con SaaS',
        featured: false,
        image: 'http://examen-nh.jcramireztello.com/media/books/css3.png',
        language: 'es',
        price: 2500,
        duration: 30,
        lessons: 10,
        deadline: '2021-01-09',
        students: 15,
        summary: 'Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (incluyendo varios languages basados en XML como SVG, MathML o XHTML). CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios.\r\n\r\nCSS es uno de los lenguajes base de la Open Web y posee una especificación estandarizada por parte del W3C. Anteriormente , el desarrollo de varias partes de las especificaciones de CSS era realizado de manera sincrónica, lo que permiía el versionado de las recomendaciones. Probablemente habrás escuchado acerca de CSS1, CSS2.1, CSS3. Sin embargo, CSS4 nunca se ha lanzado como una versión oficial.',
        instructor: 2,
        category: 1
    },
    {
        id: 8,
        name: 'Desarrollo Frontend con React',
        featured: false,
        image: 'http://examen-nh.jcramireztello.com/media/books/react.png',
        language: 'en',
        price: 6800,
        duration: 40,
        lessons: 12,
        deadline: '2021-01-09',
        students: 20,
        summary: 'React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.\r\n\r\nReact intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.\r\n\r\nSegún el servicio de análisis JavaScript (en inglés \JavaScript analytics service\), Libscore, React actualmente está siendo utilizado en las páginas principales de Imgur, Bleacher Informe, Feedly, Airbnb, SeatGeek, HelloSign, entre otras.',
        instructor: 1,
        category: 2
    }
];