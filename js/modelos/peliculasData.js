const dataPeliculas = [
  {
    title: "Volver al futuro",
    category: "Ciencia Ficción",
    sinopsis:
      "Un adolescente llamado Marty McFly que accidentalmente viaja al pasado y pone en peligro su propia existencia en el futuro.",
    type: "Película",
    time: "1h 56m",
    year: "1975",
    image: "https://cdn.forbes.com.mx/2015/10/back_to_the_future.jpg",
    status: true,
    id: "1",
    spotLight: false,
  },
  {
    title: "Chau Buenos Aires",
    category: "Ciencia Ficción",
    sinopsis:
      "Buenos Aires, noviembre de 2001. Argentina está sumida en una crisis, con el peso hundiéndose cada vez más. Julio Färber, el carismático bandoneonista de los “Vecinos de Pompeya”, una banda de tango de clase trabajadora de cinco integrantes, está tratando de mantener su cabeza fuera del agua.",
    type: "Película",
    time: "1hs 51min",
    year: "2023",
    image:
      "https://www.cinema.de/sites/default/files/styles/cin_landscape_510/public/sync/cms3.cinema.de/imgdb/import/dreams2/63ec/924/8/63ec924876ed8b13b4d425f2.jpeg.jpg?itok=_lmSccrp",
    status: false,
    spotLight: false,
    id: "3",
  },
  {
    title: "Misiones de Espionaje",
    category: "Acción",
    sinopsis:
      "Agentes de inteligencia del MI6 hasta la CIA revelan datos sobre el arte del espionaje, las campañas de la Guerra Fría y los golpes de Estado perpetrados por personal encubierto.",
    type: "Serie",
    time: "6 temporadas",
    year: "2023",
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZlZuz855tsCxU5w7KKgs1IuyX6Wu3iy6npfPSD3fdzMWM18uue2nFzN7vD0RJ9LJeVhd4tPuJycmOrQoK9dm2Cg8YLOzXrRwSgb.jpg?r=6ce",
    status: true,
    spotLight: false,
    id: "4",
  },
  {
    title: "Mar de Sangre",
    category: "Terror",
    sinopsis:
      "Un grupo de amigos que está celebrando las vacaciones en México roba motos acuáticas y sufre un accidente. Con uno de ellos gravemente herido, deben volver a tierra atravesando un mar infestado de tiburones hambrientos.",
    type: "Película",
    time: "1hs 25min",
    year: "2022",
    image:
      "https://occ-0-1366-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfmkvOEq3F7kQ63mtgOqgp4ZWX6E1s7BkWjGqHRv8fE1TNzDZk5CNQkcM7YwWp-bEQ_ini5TJjppaYukk0vxc84gC8ldftTs3QM.webp?r=6b2",
    status: true,
    spotLight: false,
    id: "5",
  },
  {
    title: "Los Vengadores",
    category: "Acción",
    sinopsis:
      "Un grupo de superhéroes se une para salvar al mundo de una amenaza alienígena.",
    type: "Película",
    time: "2hs 38min",
    year: "2012",
    image:
      "https://www.mundodeportivo.com/alfabeta/hero/2021/12/vengadores.1640005155.553.jpg?width=1200&aspect_ratio=16:9",
    status: true,
    spotLight: false,
    id: "6",
  },
  {
    title: "Stranger Things",
    category: "Ciencia Ficción",
    sinopsis:
      "Un grupo de niños se enfrenta a fenómenos sobrenaturales en los años 80.",
    type: "Serie",
    time: "4 Temporadas",
    year: "2016",
    image:
      "https://occ-0-1366-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQpnK-uuOe7H7X3RMJKcroyNCybbVqlpkQEBlMZSM0nhbfjXH5QtVXtsUJ1JaWAslHy83WBoWpKciuuoURdF9Ccug19-wV3w-Sghdp4FMz7pwnwewfUwIm5EfLzL9PqT-ApC.jpg?r=ea5",
    status: true,
    spotLight: false,
    id: "7",
  },
  {
    title: "El Conjuro",
    category: "Terror",
    sinopsis:
      "\tUn matrimonio de investigadores paranormales se enfrenta a casos aterradores.",
    type: "Película",
    time: "1hs 52min",
    year: "2013",
    image:
      "https://2.bp.blogspot.com/-qWQwU0EY9d0/Vi43O9_j2ZI/AAAAAAAADSI/WRrl-kjs8iY/w1200-h630-p-k-no-nu/conjuring_1_1280.jpg",
    status: true,
    spotLight: false,
    id: "8",
  },
  {
    title: "Deadpool",
    category: "Comedia",
    sinopsis:
      "Un antihéroe desfigurado busca venganza en una comedia de acción llena de humor negro.",
    type: "Película",
    time: "1hs 48min",
    year: "2016",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F4C30DD8F018FA9DB65E015CAE10C66FD72BE870F39D780222629A2A1B2EB765/scale?width=1200&aspectRatio=1.78&format=jpeg",
    status: true,
    spotLight: false,
    id: "9",
  },
  {
    title: "La La Land",
    category: "Romance",
    sinopsis:
      "Dos aspirantes a artistas se enamoran mientras luchan por alcanzar sus sueños en Los Ángeles.\t",
    type: "Película",
    time: "2hs 8min",
    year: "2016",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/56E433A853B36B927FDB034942B977C6890C9FB954AA6F305994CA7559CCAC6F/scale?width=1200&aspectRatio=1.78&format=jpeg",
    status: true,
    spotLight: true,
    id: "10",
  },
  {
    title: "El Resplandor",
    category: "Terror",
    sinopsis:
      "\tUn hombre se vuelve loco mientras trabaja como cuidador de un hotel aislado durante el invierno.",
    type: "Película",
    time: "2hs 26min",
    year: "1979",
    image: "https://pics.filmaffinity.com/El_resplandor-671484101-large.jpg",
    status: true,
    spotLight: false,
    id: "11",
  },
  {
    title: "Friends",
    category: "Comedia",
    sinopsis:
      "Seis amigos viven aventuras y desafíos en Nueva York mientras navegan por la vida y el amor.",
    type: "Serie",
    time: "10 temporadas",
    year: "1994",
    image:
      "https://www.eltelegrafo.com.ec/media/k2/items/cache/d53d6938410abec6a9f5e7704258cec4_XL.jpg",
    status: true,
    spotLight: false,
    id: "12",
  },
  {
    title: "Titanic",
    category: "Romance",
    sinopsis:
      "Una joven de la alta sociedad abandona a su arrogante pretendiente por un artista humilde en el trasatlántico que se hundió durante su viaje inaugural.",
    type: "Película",
    time: "3hs 15min",
    year: "1997",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/titanic-2577593.jpg?tf=3840x",
    status: true,
    spotLight: false,
    id: "13",
  },
  {
    title: "La Teoria del Big Bang",
    category: "Comedia",
    sinopsis:
      "\t\tUn grupo de científicos y amigos nerds enfrenta situaciones cómicas en su vida cotidiana.",
    type: "Serie",
    time: "12 Temporadas",
    year: "2007",
    image: "https://i.ytimg.com/vi/JTnpj6fXUIo/maxresdefault.jpg",
    status: true,
    spotLight: false,
    id: "14",
  },
  {
    title: "The Crown",
    category: "Acción",
    sinopsis:
      "\tLa serie sigue la vida de la Reina Isabel II y los eventos históricos en el Reino Unido",
    type: "Serie",
    time: "5 temporadas",
    year: "2016",
    image:
      "https://imgsrc.cineserie.com/2020/11/secrets-de-series-trois-secrets-sur-the-crown-4.jpg?ver=1",
    status: true,
    spotLight: false,
    id: "15",
  },
  {
    title: "El orígen",
    category: "Ciencia Ficción",
    sinopsis:
      "Un ladrón de sueños se adentra en el subconsciente de las personas para robar secretos.",
    type: "Película",
    time: "2hs 28minutos",
    year: "2010",
    image: "https://files.soniccdn.com/images/articles/amp/36633.jpg",
    status: true,
    spotLight: false,
    id: "16",
  },
  {
    title: "Gladiador",
    category: "Acción",
    sinopsis:
      "Un general romano busca venganza en el Coliseo después de ser traicionado.",
    type: "Película",
    time: "2hs 35min",
    year: "2000",
    image:
      "https://www.cinemascomics.com/wp-content/uploads/2020/08/Asi-habria-regresado-Maximo-en-Gladiator-2-segun-Russell-Crowe.jpg",
    status: true,
    spotLight: false,
    id: "17",
  },
  {
    title: "The Mandalorian",
    category: "Ciencia Ficción",
    sinopsis:
      "Un cazarrecompensas viaja por la galaxia en busca de aventuras y un misterioso objetivo.",
    type: "Serie",
    time: "3 temporadas",
    year: "2019",
    image:
      "https://www.lavanguardia.com/andro4all/hero/2023/03/scale.jpeg?width=768&aspect_ratio=16:9&format=nowebp",
    status: true,
    spotLight: false,
    id: "18",
  },
  {
    title: "El Conjuro 2",
    category: "Terror",
    sinopsis:
      " Investigadores paranormales viajan a Londres para ayudar a una familia atormentada por entidades malignas.",
    type: "Película",
    time: "2hs 14min",
    year: "2016",
    image: "https://www.laizquierdadiario.com/IMG/arton44189.jpg?1467944059",
    status: true,
    spotLight: false,
    id: "19",
  },
  {
    title: "Toy Story",
    category: "Comedia",
    sinopsis:
      " Los juguetes de un niño cobran vida cuando él no está presente y deben lidiar con un nuevo juguete en la casa.",
    type: "Película",
    time: "2hs 22min",
    year: "1995",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiVXTObB9YY1DvoKa0-ggH5A2u4WayUv13Q&usqp=CAU",
    status: true,
    spotLight: false,
    id: "20",
  },
  {
    title: "The Walking Dead",
    category: "Terror",
    sinopsis:
      " Sobrevivientes luchan contra zombies y amenazas humanas en un mundo postapocalíptico.",
    type: "Serie",
    time: "11 temporadas",
    year: "2010",
    image:
      "https://www.latercera.com/resizer/fCTfH_Tu7qMKLW5B-QdgiU6R_WY=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/TWXTDENQTJCNZJGMTEB6PGLZA4.jpg",
    status: true,
    spotLight: false,
    id: "21",
  },
  {
    title: "Chernobyl",
    category: "Acción",
    sinopsis:
      "La serie narra los eventos del desastre nuclear de Chernobyl en 1986 y sus consecuencias.",
    type: "Serie",
    time: "1 temporada",
    year: "2019",
    image:
      "https://imgmedia.larepublica.pe/640x371/larepublica/original/2020/07/07/61a6ccb11f9d5818374911dd.webp",
    status: true,
    spotLight: false,
    id: "22",
  },
  {
    title: "El Renacido",
    category: "Ciencia Ficción",
    sinopsis:
      "Un hombre lucha por sobrevivir en el salvaje oeste después de ser herido por un oso y traicionado por su equipo.",
    type: "Película",
    time: "2hs 36min",
    year: "2015",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/el-renacido-2015-con-leonardo-dicaprio-diez-minutos-1606428013.jpg",
    status: true,
    spotLight: false,
    id: "23",
  },
  {
    title: "The Witch",
    category: "Terror",
    sinopsis:
      "Una familia en Nueva Inglaterra enfrenta horrores sobrenaturales después de mudarse a una granja aislada.",
    type: "Película",
    time: "1hs 32min",
    year: "2015",
    image:
      "https://production-gameflipusercontent.fingershock.com/us-east-1:a3964cec-0dc4-4fa9-bee2-0c367270d521/e9be191f-0977-4da9-a639-d0223af11c88/5fd0dccb-e002-403d-af54-1cd99c0f66d4",
    status: true,
    spotLight: false,
    id: "24",
  },
  {
    title: "El Gran Hotel Budapest",
    category: "Comedia",
    sinopsis:
      "Un conserje y su aprendiz se ven envueltos en una serie de eventos cómicos en un elegante hotel europeo.",
    type: "Película",
    time: "1hs 40min",
    year: "2014",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gran-hotel-budapest-cartel-1513779850.jpg?crop=0.8xw:1xh;center,top&resize=1200:*",
    status: true,
    spotLight: false,
    id: "25",
  },
  {
    title: "The Office",
    category: "Comedia",
    sinopsis:
      "La vida de los empleados de una oficina se convierte en una comedia sobre la rutina diaria",
    type: "Serie",
    time: "9 temporadas",
    year: "2005",
    image:
      "https://www.publimetro.cl/resizer/sGLMFXh5jQzt6gJFAG6_PWuKo9I=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/CQBIOWSLBVBVXF2X3XHKAALQTQ.png",
    status: true,
    spotLight: false,
    id: "26",
  },
  {
    title: "30 Rock",
    category: "Comedia",
    sinopsis:
      "Una comedia detrás de escena de un programa de variedades de televisión, con un elenco de personajes excéntricos.",
    type: "Serie",
    time: "7 temporadas",
    year: "2006",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/09db3779d9f3e5f7fa083201a1f2be46fbe7fb4add60a984456851979ab1cd2b.jpg",
    status: false,
    spotLight: false,
    id: "27",
  },
  {
    title: "The Big Lebowski",
    category: "Comedia",
    sinopsis:
      'Un hombre llamado "El Nota" se ve involucrado en una serie de eventos extraños después de un error de identidad.',
    type: "Película",
    time: "1hs 57min",
    year: "1998",
    image:
      "https://3.bp.blogspot.com/-JNi0XfTuQqw/WufjPhR8luI/AAAAAAAAHGs/nD_HQ_t3kDEKUPJyKA2bupKAwke3G6yLQCLcBGAs/s1600/el-gran-lebowski-comedia-humor-absurdo.jpg",
    status: true,
    spotLight: false,
    id: "28",
  },
  {
    title: "Damas en guerra",
    category: "Comedia",
    sinopsis:
      "Una dama de honor compite con otras amigas para impresionar a la novia en esta divertida comedia sobre bodas.",
    type: "Película",
    time: "2hs 5min",
    year: "2010",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgEi-2PsGiAXp3suc27Keq-1UJaVKyrtcpw&usqp=CAU",
    status: true,
    spotLight: false,
    id: "29",
  },
  {
    title: "Brooklyn Nine-Nine",
    category: "Comedia",
    sinopsis:
      "Una comedia policial que sigue a un grupo de detectives en una comisaría de Nueva York.",
    type: "Serie",
    time: "8 temporadas",
    year: "2013",
    image:
      "https://1.bp.blogspot.com/-X3n6HaUQamE/WSrS4zn28zI/AAAAAAAAF6A/1fbghUy9SGgY3yTW_UssedAftmOP5jTHACLcB/s1600/brooklyn-nine-nine-poster.jpg",
    status: true,
    spotLight: false,
    id: "30",
  },
  {
    title: "Mad Max: Fury Road",
    category: "Acción",
    sinopsis:
      "Max se une a Furiosa en una carrera mortal en un mundo postapocalíptico.",
    type: "Película",
    time: "2hs",
    year: "2014",
    image:
      "https://i0.wp.com/www.generacionfriki.es/wp-content/uploads/2016/01/MAD-MAX-FURIA-EN-LA-CARRETERA-PORTADA.jpg?resize=618%2C307&ssl=1",
    status: true,
    spotLight: false,
    id: "31",
  },
  {
    title: "Batman: el caballero de la noche",
    category: "Acción",
    sinopsis: "\tBatman lucha contra el Joker para salvar Gotham City.",
    type: "Película",
    time: "2hs 32min",
    year: "2007",
    image:
      "https://larepublica.cronosmedia.glr.pe/migration/images/TLBIGOIGTFGCBIU4TECGW7KOLA.jpg",
    status: true,
    spotLight: false,
    id: "32",
  },
  {
    title: "John Wick",
    category: "Acción",
    sinopsis: "Un exasesino busca venganza después de que maten a su perro.",
    type: "Película",
    time: "1hs 41min",
    year: "2014",
    image:
      "https://desdekryptonhastamordor.files.wordpress.com/2016/01/47-4.jpg",
    status: true,
    spotLight: false,
    id: "33",
  },
  {
    title: "Misión: Imposible",
    category: "Acción",
    sinopsis:
      "El agente Ethan Hunt lidera misiones imposibles para desbaratar complots terroristas. La serie sigue a Hunt y su equipo en aventuras repletas de acción y tecnología avanzada.",
    type: "Serie",
    time: "7 temporadas",
    year: "1988",
    image: "https://i.ytimg.com/vi/joXwW6LJKx4/maxresdefault.jpg",
    status: true,
    spotLight: false,
    id: "34",
  },
  {
    title: "The Bourne Identity",
    category: "Acción",
    sinopsis:
      "Un hombre amnésico es rescatado del mar y descubre que posee habilidades letales. A medida que recupera su memoria, se ve perseguido por organizaciones gubernamentales y busca respuestas.",
    type: "Película",
    time: "2hs",
    year: "2002",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/CC096BBBDAA16CE22B637A6CC5933A869E57D245482E1A0D042719277366C90B/scale?width=1200&aspectRatio=1.78&format=jpeg",
    status: true,
    spotLight: false,
    id: "35",
  },
  {
    title: "Bajo el Mismo Cielo",
    category: "Romance",
    sinopsis:
      "Un encuentro fortuito en una estación de tren lleva a Emma y Alex a compartir un viaje transcontinental. A medida que comparten historias, risas y secretos, se dan cuenta de que su conexión va más allá de la casualidad.",
    type: "Película",
    time: "1hs 15min",
    year: "2020",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/1A24CBB25BB6CC9E42B85C97A36B589693BDA0F764489CD3FBCCDB122DB9A867/scale?width=1200&aspectRatio=1.78&format=jpeg",
    status: true,
    spotLight: false,
    id: "36",
  },
  {
    title: "Promesa al Amanecer",
    category: "Romance",
    sinopsis:
      "Basada en hechos reales, esta película sigue la relación entre Romain y Nina, cuyos destinos se cruzan en la Francia de la Segunda Guerra Mundial. A través de cartas y encuentros furtivos, prometen encontrarse en un amanecer liberador.",
    type: "--",
    time: "2hs 2o min",
    year: "2016",
    image:
      "https://cartelescine.files.wordpress.com/2018/04/promesa-al-amanecer.jpg",
    status: true,
    spotLight: false,
    id: "37",
  },
  {
    title: "Bajo las Estrellas",
    category: "Romance",
    sinopsis:
      "En el vibrante escenario de Nueva York, Mark, un músico callejero, y Emily, una escritora en ascenso, encuentran el amor en medio del bullicio de la ciudad que nunca duerme. Una historia de romance que resuena con las notas de la gran manzana.",
    type: "Película",
    time: "2hs 5min",
    year: "2015",
    image:
      "https://cdn.sincroguia.tv/uploads/programs/b/a/j/bajo-las-estrellas-137940_SPA-28.jpg",
    status: true,
    spotLight: false,
    id: "38",
  },
  {
    title: "Black Mirror",
    category: "Ciencia Ficción",
    sinopsis:
      "Cada episodio de esta serie antológica explora una historia independiente que examina el impacto de la tecnología en la sociedad contemporánea. Distópica y provocadora.",
    type: "Serie",
    time: "5 temporadas",
    year: "2011",
    image:
      "https://www.tonica.la/__export/1591215792901/sites/debate/img/2020/06/03/black_mirror_publicidad.jpg_554688468.jpg",
    status: true,
    spotLight: false,
    id: "39",
  },
  {
    title: "Los Simpsons",
    category: "Comedia",
    sinopsis:
      "La familia Simpson, compuesta por Homer, Marge, Bart, Lisa y Maggie, enfrenta situaciones cómicas y absurdas en la ficticia ciudad de Springfield. Una de las series animadas más longevas.",
    type: "Serie",
    time: "33 temporadas",
    year: "1989",
    image:
      "https://sm.ign.com/ign_es/news/t/the-simpso/the-simpsons-season-34-will-reveal-how-the-show-has-managed_hh4b.jpg",
    status: true,
    spotLight: false,
    id: "40",
  },
  {
    title: "Juego de Tronos",
    category: "Ciencia Ficción",
    sinopsis:
      "En el continente de Westeros, varias familias nobles luchan por el control del Trono de Hierro. Intrigas políticas, batallas épicas y personajes memorables se entrelazan en esta serie de fantasía épica",
    type: "Serie",
    time: "8 tamporadas",
    year: "2010",
    image:
      "https://sigueenserie.files.wordpress.com/2019/03/juego-de-tronos-la-c39altima-guardia.jpg",
    status: true,
    spotLight: false,
    id: "41",
  },
  {
    title: "Besos, Kitty",
    category: "Romance",
    sinopsis:
      "Con el anhelo de sentirse más cerca de su difunta madre y sorprender a su novio a distancia, Kitty se propone asistir a una prestigiosa escuela de Seúl.",
    type: "Serie",
    time: "1 Temporada",
    year: "2023",
    image: "https://ntvb.tmsimg.com/assets/p24394340_b_h8_ab.jpg?w=1280&h=720",
    status: true,
    spotLight: false,
    id: "42",
  },
  {
    title: "Bridgerton",
    category: "Romance",
    sinopsis:
      "Los ocho entrañables hermanos de la familia Bridgerton buscan el amor y la felicidad en la alta sociedad londinense. Inspirada en las novelas de superventas de Julia Quinn.",
    type: "Serie",
    time: "2 Temporada",
    year: "2022",
    image:
      "https://zetatijuana.com/wp-content/uploads/2021/01/IMG-20210127-WA0066.jpg",
    status: true,
    spotLight: false,
    id: "43",
  },
  {
    title: "Cartas a Julieta",
    category: "Romance",
    sinopsis:
      "En Verona, una aspirante a escritora descubre una antigua carta de amor y se embarca en la búsqueda de un amor perdido... y de su propio romance.",
    type: "Película",
    time: "1 h 45 min",
    year: "2010",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/268e7a1044abb4114186ce8367fd7297f6262d166c36ef518f7b50f123647c7b._UY500_UX667_RI_TTW_.jpg",
    status: true,
    spotLight: false,
    id: "44",
  },
  {
    title: "La probabilidad estadística del amor a primera vista",
    category: "Romance",
    sinopsis:
      "En un vuelo a Londres, dos desconocidos forman un vínculo, pero la mala suerte termina separándolos. Una reunión parece imposible..., pero el amor no conoce de barreras",
    type: "Película",
    time: "1h 31min",
    year: "2023",
    image:
      "https://www.carteltec.com/wp-content/uploads/2023/09/1694785688_La-probabilidad-estadistica-del-amor-a-primera-vista-2-%C2%BFQue.webp.webp",
    status: true,
    spotLight: false,
    id: "45",
  },
];



export const cargaInicial = () => {
  localStorage.setItem("peliculas", JSON.stringify(dataPeliculas));
};

