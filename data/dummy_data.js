import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Terror', '#f5428d'),
  new Category('c2', 'Accion', '#f54242'),
  new Category('c3', 'Aventura', '#f5a442'),
  new Category('c4', 'Ciencia Ficcion', '#f5d142'),
  new Category('c5', 'Comedia', '#368dff'),
  new Category('c6', 'Romance', '#41d95d'),
  new Category('c7', 'Drama', '#9eecff'),
  new Category('c8', 'Musical', '#b9ffb0'),
  new Category('c9', 'Belico', '#ffc7ff')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Sinister',
    'asdf',
    'ghfj',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Lox2Aj57Vk6axwBt_K2dVQQynXSYwdCA9w&s',
    20,
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
    'm3',
    ['c3'],
    'Indiana Jones',
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
    'm4',
    ['c4'],
    'Star Wars',
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
    'm5',
    ['c5'],
    'SuperCool',
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
    'm6'
    ['c6'],
    'El diario de una pasion',
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
    'm7',
    ['c7'],
    'El Padrino',
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
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  )
];