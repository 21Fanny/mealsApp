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
    'The Exorcist',
    'Terror',
    '1973',
    'https://pics.filmaffinity.com/El_exorcista-388290616-large.jpg',
    121,
    [
      'Una actriz llama a unos sacerdotes jesuitas para que intenten terminar con la posesión demoníaca de su hija de 12 años.'
    ],
    [
      'Regan, una niña de doce años, sufre fenómenos paranormales como la levitación o la manifestación de una fuerza sobrehumana. Su madre, aterrorizada, tras someter a su hija a múltiples análisis médicos que no ofrecen ningún resultado, acude a un sacerdote con estudios de psiquiatría. Éste, convencido de que el mal no es físico sino espiritual, cree que se trata de una posesión diabólica, y decide practicar un exorcismo... Adaptación de la novela de William Peter Blatty que se inspiró en un exorcismo real ocurrido en Washington en 1949.'
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
    'm2',
    ['c2'],
    'Gladiador',
    'Accion',
    '2012',
    'https://es.web.img3.acsta.net/medias/nmedia/18/70/92/02/20149073.jpg',
    150,
    [
      'Máximo, general romano, desea volver a casa, pero el emperador Marco Aurelio quiere que',
       'herede el imperio. Esto hace que Cómodo ordene matar a su familia. Máximo escapa de la muerte y regresa a Roma como gladiador para vengar la muerte de su familia'
    ],
    [
      'En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los',
      ' bárbaros del norte, el anciano emperador Marco Aurelio (Richard Harris) decide transferir el ','poder a Máximo (Russell Crowe), bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo (Joaquin Phoenix), que aspiraba al trono, no lo acepta y trata de asesinar a Máximo'
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
    'm3',
    ['c3'],
    'Piratas del Caribe: La maldicion e la Perla Negra',
    'Aventura',
    '2003',
    'https://static.wikia.nocookie.net/cine/images/6/62/Piratas_del_Caribe.jpg/revision/latest?cb=20201006154235',
    120,
    [
      'El capitán Barbossa le roba el barco al pirata Jack Sparrow y secuestra a Elizabeth, amiga de Will Turner. Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes'
    ],
    [
      'Mar Caribe, siglo XVIII. El aventurero capitán Jack Sparrow piratea en aguas caribeñas, pero su andanzas terminan cuando su enemigo, el Capitán Barbossa, después de robarle su barco, el Perla Negra, ataca la ciudad de Port Royal y secuestra a Elizabeth Swann, la hija del Gobernador. Will Turner, amigo de la infancia de Elizabeth, se une a Jack para rescatarla y recuperar el Perla Negra. Pero Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes. El conjuro sólo puede romperse si devuelven una pieza de oro azteca y saldan una deuda de sangre. El rescate de la bella Elizabeth será una tarea difícil, pues la maldición es real y será difícil enfrentarse con quienes no pueden morir.'
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
    'm4',
    ['c4'],
    'Volver al futuro',
    'Ciencia Ficcion',
    '1985',
    'https://static.wikia.nocookie.net/doblaje/images/0/08/Volver_al_Futuro_Poster.jpg/revision/latest?cb=20201122071805&path-prefix=es',
    116,
    [
      'Una máquina del tiempo transporta a un adolescente a los años 50, cuando sus padres todavía estudiaban en la secundaria.'
    ],
    [
      'El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco. Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955, año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro, deberá conseguir que se conozcan y se casen; de lo contrario, su existencia no sería posible.'
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
    'm5',
    ['c5'],
    '¿Y dónde están las rubias?',
    'Comedia',
    '2004',
    'https://m.media-amazon.com/images/M/MV5BODFiMTEyY2MtOTVjOS00MTBkLWJmMWEtYjM0Njk5YjVmOGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    109,
    [
      'Dos torpes agentes del FBI se hacen pasar por dos chicas de la alta sociedad para investigar una serie de secuestros. No obstante, mientras preparan su plan, descubren que irrumpir en la clase privilegiada es mucho más duro de lo que creían'
    ],
    [
      'Dos ambiciosos -pero con poca fortuna- agentes del FBI (Shawn y Marlon Wayans) se hacen pasar por mujeres, novatas en la alta sociedad, en el exclusivo complejo Hamptons para investigar un círculo de secuestros. Pero mientras preparan su actuación en el mayor acontecimiento social del año se encuentran que irrumpir en la alta sociedad es mucho más duro de lo que parecía. '
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
    'm6',
    ['c6'],
    'Five Feet Apart',
    'Romance',
    '2019',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7DXcypez3souX6WQ0roRYL0GdqLG50qZ3A&s',
    116,
    [
      'Stella, de 17 años, está ingresada en un hospital porque padece fibrosis quística. Su monótona existencia cambia cuando llega Will, un adolescente con la misma dolencia. Sin embargo, las normas del hospital prohíben el contacto entre ellos.'
    ],
    [
      'Dos adolescentes que se encuentran en el hospital, ambos con enfermedades muy graves que amenazan sus vidas, se conocen y comienzan a enamorarse. Stella Grant es la típica joven de 17 años, que vive pegada a su portátil y adora a sus amigos. Pero a diferencia de la mayoría de chicas de su edad, pasa gran parte de su tiempo en un hospital debido a la fibrosis quística que padece. Su vida está plagada de rutinas, límites y autocontrol, hasta que un paciente irresistiblemente encantador llamado Will Newman pone a prueba todo su mundo. '
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
    'The Fallout: La vida después',
    'Drama',
    '2021',
    'https://musicart.xboxlive.com/7/2aff6300-0000-0000-0000-000000000002/504/image.jpg',
    92,
    [
      'Una estudiante comienza a reinventarse mientras reevalúa sus relaciones y su visión del mundo.'
    ],
    [
      'Vada es una adolescente que trata de superar los efectos secundarios que sufre tras vivir una tragedia en su instituto. Tras esta experiencia, la relación con su familia y sus amigos, así como su forma de ver el mundo, cambiarán para siempre.'
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
    'Mamma Mia!',
    'Musical',
    '2008',
    'https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_.jpg',
    108,
    [
      'La historia de una futura novia tratando de encontrar a su verdadero padre contada a través de las exitosas canciones del popular grupo de los 70 ABBA.'
    ],
    [
      'Donna, una hotelera independiente de las islas griegas, prepara la boda de su hija con la ayuda de dos viejos amigos. Mientras tanto, Sophie, la alegre hija de Donna, tiene su propio plan. Invita a la boda a tres hombres del pasado de su madre con la esperanza de conocer a su padre biológico para que la acompañe al altar.'
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
    'Hasta el último hombre',
    'Belico',
    '2016',
    'https://pics.filmaffinity.com/Hasta_el_aultimo_hombre-205606610-large.jpg',
    131,
    [
      'Durante la Segunda Guerra Mundial, el médico militar y objetor de conciencia Desmond Doss se convierte inesperadamente en un héroe de la batalla de Okinawa sin empuñar ni un arma.'
    ],
    [
      'La historia de Desmond T. Doss, quien, debido a que se lo prohibía su fe, combatió en la Segunda Guerra Mundial sin portar un arma. No disparó ni una bala, pero salvó a 75 personas de la muerte en la batalla de la isla de Okinawa. Gracias a su coraje, pasó de ser el objeto de las burlas de sus compañeros a reconocérsele su enorme valía con la entrega de la Medalla de Honor del Congreso, otorgada por primera vez a un objetor de conciencia.'
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
    'Fragmentado',
    'Suspenso',
    '2016',
    'https://m.media-amazon.com/images/M/MV5BMmViYzcyNzItNGNlOC00YmZjLWJlYWUtZjY4Mjc2OTQxNGUzXkEyXkFqcGc@._V1_.jpg',
    116,
    [
      'Tres mujeres son secuestradas por un hombre con un diagnóstico de 23 personalidades distintas. Deben intentar escapar antes de la aparente aparición de una nueva personalidad.'
    ],
    [
      'A pesar de que Kevin (James McAvoy) le ha demostrado a su psiquiatra de confianza, la Dra. Fletcher (Betty Buckley), que posee 23 personalidades diferentes, aún queda una por emerger, decidida a dominar a todas las demás. Obligado a raptar a tres chicas adolescentes encabezadas por la decidida y observadora Casey (Anya Taylor-Joy), Kevin lucha por sobrevivir contra todas sus personalidades y la gente que le rodea, a medida que las paredes de sus compartimentos mentales se derrumban. (FILMAFFINITY)'
    ],
    false,
    true,
    true,
    true
  )
];