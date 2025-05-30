import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Terror', '#222831'),       
  new Category('c2', 'Accion', '#393E46'),       
  new Category('c3', 'Aventura', '#948979'),    
  new Category('c4', 'Ciencia Ficcion', '#DFD0B8'), 
  new Category('c5', 'Comedia', '#222831'),      
  new Category('c6', 'Romance', '#393E46'),     
  new Category('c7', 'Drama', '#948979'),        
  new Category('c8', 'Musical', '#DFD0B8'),      
  new Category('c9', 'Belico', '#222831'),      
  new Category('c10', 'Suspenso', '#393E46')     
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm1',
    ['c1'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Avatar',
    'Accion',
    '2009',
    'https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg',
    10,
    [
      'Avatar (comercializada como Avatar de James Cameron)', 
      'es una película épica de ciencia ficción militar y animación estadounidense de 2009'
    ],
    [
      'La película se sitúa en el año 2154', 
      'donde conocemos a un joven llamado Jake Sully, un marine veterano de guerra y herido en combate que ha quedado parapléjico',
      'es seleccionado para participar en el programa Avatar ocupando el puesto de científico que ocupaba su hermano gemelo recién fallecido',
      'e incinerado delante sus propios ojos. De esta forma, Jake es trasladado hasta Pandora, una luna cercana al planeta Polifemo cuya atmósfera',
      'es tóxica y letal para los humanos (debido a su alta concentración de ácido sulfhídrico) y que además de albergar una asombrosa biodiversidad, está habitada por los na’vi',
      'una raza o especie humanoide de piel azul, con algunos rasgos felinos y huesos reforzados de forma natural con fibra de carbono'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm1',
    ['c2'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm3',
    ['c3'],
    'Indiana Jones',
    'Aventura',
    '1981',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQr46eBhN19qC24H3VJsx8zfyKjF_mHo1DQ&s',
    45,
    [
      'Indiana Jones es una franquicia de medios concebida por el cineasta estadounidense',
      'George Lucas y producida por Lucasfilm'
    ],
    [
      'La trama descrita en las películas que componen la serie principal',
      'relata las vivencias de Henry Walton Jones Jr., un profesor de arqueología más conocido',
      'por su apodo «Indiana Jones» o «Indy», que suele colaborar con el gobierno estadounidense',
      'para localizar objetos de relevancia histórica entre las décadas de 1930 y 1950.'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm1',
    ['c3'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Star Wars',
    'Ciencia Ficcion',
    '1977',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPspGkemYir9hh2-Jw7U8SPoQsXZZu2_2eQ&s',
    60,
    [
      '"La Guerra de las Galaxias", o "Star Wars" en inglés', 
      'es una franquicia de ciencia ficción creada por George Lucas que incluye películas', 
      'novelas, cómics, videojuegos, juguetes y otros productos.'
    ],
    [
      'Cada trilogía se centra en una generación de la familia Skywalker', 
      'sensible a la Fuerza y ​​su lucha contra el malvado lord Sith Palpatine (Darth Sidious)', 
      'La trilogía original describe el desarrollo heroico de Luke Skywalker como Jedi y su lucha contra el Imperio Galáctico de Palpatine', 
      'junto a su hermana, Leia .Las precuelas cuentan la trágica historia de fondo de su padre, Anakin , quien es seducido al lado oscuro por', 
      'Palpatine y se convierte en Darth Vader.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm1',
    ['c4'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm5',
    ['c5'],
    'SuperCool',
    'Comedia',
    '2007',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7R7Fs7VaIjcsBK5ErCD_zunK-FvtI2M6iQ&s',
    15,
    [
      'es una película de coming-of-age de comedia adolescente estadounidense',
      'de 2007 dirigida por Greg Mottola y producida por Judd Apatow. La película está protagonizada por Jonah Hill y Michael Cera'
    ],
    [
      'Seth y Evan son dos estudiantes vírgenes de último año de secundariaSeth y Evan son dos estudiantes vírgenes de último año de secundaria que han sido mejores amigos desde la infancia. Los dos están a punto de irse a diferentes universidades. Después de que Seth se emparejara con Jules durante la clase de economía doméstica, ella lo invita a una fiesta en su casa esa noche. Su amigo Fogell revela sus planes para obtener una identificación falsa, por lo que Seth promete comprar alcohol para la fiesta de Jules con el dinero que ella le daSeth y Evan son dos estudiantes vírgenes de último año de secundaria que han sido mejores amigos desde la infancia. Los dos están a punto de irse a diferentes universidades. Después de que Seth se emparejara con Jules durante la clase de economía doméstica, ella lo invita a una fiesta en su casa esa noche. Su amigo Fogell revela sus planes para obtener una identificación falsa', 
      'por lo que Seth promete comprar alcohol para la fiesta de Jules con el dinero que ella le da', 
      'que han sido mejores amigos desde la infancia. Los dos están a punto de irse a diferentes universidades', 
      'Después de que Seth se emparejara con Jules durante la clase de economía doméstica', 
      'ella lo invita a una fiesta en su casa esa noche. Su amigo Fogell revela sus planes para obtener una identificación falsa, por lo que', 
      'Seth promete comprar alcohol para la fiesta de Jules con el dinero que ella le da.'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm1',
    ['c5'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm6'
    ['c6'],
    'El diario de una pasion',
    'Romance',
    '2007',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rZmPiB6k0IG3N9O3qPUDCEfgLb-O8mhGsQ&s',
    240,
    [
      'es la historia de un romance de verano de los años 40 entre Allie (Rachel McAdams), hija de padres ricos', 
      'y Noah (Ryan Gosling), un chico de clase trabajadora'
    ],
    [
      'En un hogar de retiro un hombre le lee a una mujer', 
      'que sufre de Alzheimer, la historia deEn un hogar de retiro un hombre', 
      'le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40', 
      'dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm1',
    ['c6'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm7',
    ['c7'],
    'El Padrino',
    'Drama',
    '1972',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp2Jihs_Echygl5lbAGJWEmQaTkRNvS9qgA&s',
    20,
    [
      'Una adaptación ganadora del Premio de la Academia, de la novela de Mario Puzo acerca de la familia Corleone.'
    ],
    [
      'narra la historia de la familia Corleone, una poderosa familia mafiosa italoamericana', 
      'desde la década de 1940 hasta 1955, con énfasis en el ascenso de Michael Corleone como jefe', 
      'de la familia. La trama se centra en la guerra entre las familias mafiosas y la transformación de Michael, quien inicialmente se mantiene alejado de los negocios de su padre.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm1',
    ['c7'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm8',
    ['c8'],
    'Mary Poppins',
    'Musical',
    '1964',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUDIfiIfDQSkO6q9CF3jDD9sS859qqbpc4Hd_scAGhyF83Lepf0KNQW1iep7enxzH_qiiVwblY6Z9CI6YB7ScAIaVvrcJvc7WJaDNyw',
    35,
    [
      'Mary Poppins es una película musical de fantasía estadounidense, dirigida por Robert Stevenson, producida por Walt Disney',
       'y con canciones escritas por los hermanos Sherman, estrenada en 1964. '
    ],
    [
      'La vida de dos niños rebeldes que pretenden llamar la atención', 
      'de sus padres haciendo la vida imposible a todas las niñeras', 
      'se verá alterada con la llegada de Mary Poppins, una institutriz', 
      'que baja de las nubes usando su paraguas como paracaídas.'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm1',
    ['c8'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Rescatando al soldado Ryan',
    'Belico',
    '1998',
    'https://i.ytimg.com/vi/XhbUUS1GT0Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBVp4TpFxmdUMdBdyhCvLj0pJ3Dg',
    45,
    [
      'Es una película bélica épica estadounidense estrenada en 1998 y ambientada en la invasión de Normandía durante la Segunda Guerra Mundial.'
    ],
    [
      'Después de desembarcar en Normandía, en plena Segunda Guerra Mundial ',  
      'unos soldados norteamericanos deben arriesgar sus vidas para salvar al soldado James Ryan ',  
      'cuyos tres hermanos han muerto en la guerra.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm1',
    ['c9'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm10',
    ['c10'],
    'No respires',
    'Suspenso',
    '2016',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOp0BZyuS4WiVFAXbApIwlorTDFy9bXxTw2Re5BPLUV9UksORptK8ixtL90ftSZBBSIZ_zku-oZ-vCyaWzeKU-DzPd9Ms72RXzt0i6Bfk',
    30,
    [
      'No Respires Dont Breathe, título original en inglés es una película estadounidense de terror', 
      'y acción dirigida por Federico Álvarez y escrita por el mismo Álvarez y Rodo Sayagues.'
    ],
    [
      'Rocky, Alex y Money ya han robado casas en otras ocasiones. Ahora preparan un nuevo golpe, el que permitirá a Rocky', 
      'salir de Detroit y salvar a su hermana pequeña del maltrato de su madre y de una vida sin futuro. Su siguiente objetivo', 
      'será la casa medio abandonada de un hombre ciego que es poseedor de una pequeña fortuna.'
    ],
    true,
    true,
    true,
    true
  ),
  
  new Meal(
    'm1',
    ['c10'],
    'Sinister',
    'Terror',
    '2012',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    110,
    [
      'Siniestro es considerada la película más aterradora del mundo',
       'según la ciencia'
    ],
    [
      'Narra las vivencias del escritor Ellison Oswalt', 
      'cuando descubre una caja con vídeos caseros que pone a su familia en peligro. Además de la cinematografía tradicional, la película usa el recurso del «metraje encontrado». ​ Exhibida en el Festival SXSW, Sinister se estrenó en el Reino Unido el 5 de octubre de 2012.'
    ],
    false,
    true,
    true,
    true
  )
];