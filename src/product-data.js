const products = [
    {
        id: "8",
        name: "PlayStation 5",
        details: "Sony PlayStation 5 825GB Standard color blanco y negro",
        description: "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \r\n                              Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB.Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.",
        price: 172000,
        stock: 3,
        rating: 5,
        category_id: "7",
        image_path: "https://http2.mlstatic.com/D_NQ_NP_739160-MLA44484414453_012021-O.webp"
    },
    {
        id: "10",
        name: "Nintendo 64",
        details: "Consola retro Nintendo 64",
        description: "Con la Nintendo 64 podras disfrutar los mejores titulos de la historia como Super Mario 64\r\n                              Legend of Zelda Ocarina of time, Mario Kart entre otras grandes entregas.Que esperas? no te\r\n                              podes perder esta gran oportunidad de tener unas de las consolas mas miticas de la historia!.",
        price: 40000,
        stock: 2,
        rating: 4,
        category_id: "7",
        image_path: "https://http2.mlstatic.com/D_NQ_NP_955362-MLA50415884368_062022-O.webp"
    },
    {
        id: "9",
        name: "Nintendo Switch",
        details: "Nintendo Switch 32GB Standard color rojo neón, azul neón y negro",
        description: "Nintendo Switch es una consola desmontable, que puede usarse en modo portátil, \r\n                              sobremesa o en la TV; esto te brindará la posibilidad de utilizarla donde quieras y compartir sus controles.",
        price: 76000,
        stock: 2,
        rating: 4,
        category_id: "7",
        image_path: "switch.png"
    },
    {
        id: "5",
        name: "Samsung LED TV",
        details: "24 pulgadas, LED Display, Resolución 1366 x 768",
        description: "Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. \r\n                              Por eso, va a hacer que disfrutes de una experiencia visual incomparable.",
        price: 15000,
        stock: 2,
        rating: 2,
        category_id: "6",
        image_path: "samsung-led-24.png"
    },
    {
        id: "3",
        name: "iPhone 12 Pro - Azul pacífico",
        details: "6.1 pulgadas, 256GB 6GB RAM",
        description: "El iPhone 12 Pro tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). \r\n                              Con el nuevo Ceramic Shield, es cuatro veces más resistente a las caídas (2). \r\n                              Y te permite tomar fotos increíbles con poca luz gracias a un nuevo sistema de cámaras Pro y un rango de zoom óptico de 4x. \r\n                              También puedes grabar, editar y reproducir video en Dolby Vision con calidad cinematográfica, tomar retratos con modo Noche y disfrutar experiencias de realidad aumentada de última generación con el escáner LiDAR. El iPhone 12 Pro viene con el potente chip A14 Bionic y es compatible con los nuevos accesorios MagSafe que se adhieren magnéticamente a tu iPhone y brindan una carga inalámbrica más rápida (3). Una infinidad de posibilidades que no dejarán de sorprenderte.",
        price: 316000,
        stock: 3,
        rating: 3,
        category_id: "3",
        image_path: "1655188563iphone-12-pro.png"
    },
    {
        id: "4",
        name: "Auriculares gamer Redragon Chroma Lamia 2 black con luz rgb LED",
        details: "Auricualres Gamer Redragon con microfono , Sonido Superior",
        description: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Lamia 2 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\r\n                               El formato perfecto para vos El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. \r\n                               Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        price: 6230,
        stock: 1,
        rating: 2,
        category_id: "4",
        image_path: "1655188503AuricularesReddragon.jpg"
    },
    {
        id: "13",
        name: "Pc armada gamer 1 ",
        details: "Pc Armada Gamer Amd Ryzen 5 5600g 6/12 Nucleos 16gb Ssd 480 ",
        description: "  MICRO PROCESADOR: AMD Ryzen 5 5600G 6/12 NUCLEOS 4.4GHZ...\r\n                                - PLACA DE VIDEO INCORPORADA RADEON VEGA RX...\r\n                                - MOTHER: MSI A520M PRO PCI 3.0 USB 3.1...\r\n                                - DISCO SSD: 480GB SATA3 ADATA 500MBs...\r\n                                - MEMORIA RAM: 16GB DDR4 2666 EXPANDIBLE HASTA 64GB\r\n                                - GABINETE: ATX SENTEY F10 - FUENTE BCP500W\r\n                                - SISTEMA OPERATIVO: WINDOWS 10 64BITS TRIAL",
        price: 88999,
        stock: 4,
        rating: 1,
        category_id: "2",
        image_path: "pc1.png"
    },
    {
        id: "14",
        name: "Notebook HP 15 ",
        details: "Notebook HP 15-ef2126wm spruce blue 15.6\", AMD Ryzen 5 5500U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 7 1920x1080px Windows 10 Home ",
        description: "La notebook HP 15-ef2126wm es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. ",
        price: 98990,
        stock: 4,
        rating: 2,
        category_id: "2",
        image_path: "hp15.png"
    },
    {
        id: "15",
        name: "Pc armada gamer 2 ",
        details: "Pc Armada Gamer Amd Ryzen 7 5700g Ram 32gb 960g Ssd Wifi",
        description: "  - MICRO AMD RYZEN 7 5700G 3.8GHZ\r\n                                - VIDEO AMD RADEON VEGA INTEGRADO\r\n                                - MOTHER A520M-A AM4\r\n                                - DISCO SOLIDO SSD 960GB\r\n                                - MEMORIA RAM: 32GB DDR4 2X16\r\n                                - GABINETE GAMER 6 COOLER INCLUIDOS!!!\r\n                                - FUENTE 650W\r\n                                - ADAPTADOR USB WIFI",
        price: 170000,
        stock: 2,
        rating: 4,
        category_id: "2",
        image_path: "pc2.png"
    },
    {
        id: "16",
        name: "Pc armada gamer 3 ",
        details: "Pc Gamer Amd Ryzen 7 2700 16gb 1tb Gtx 1650 4gb Rgb 80 Plus ",
        description: "  - AMD Ryzen 5 3600 4.2 GHz AM4 Box\r\n                                - Motherboard A320 (Gigabyte, Asus, Msi, Asrock)\r\n                                - Gabinete MAtx F10 Sin KIT - Con Tira Rgb Frontal (usb 3.0)\r\n                                - Disco de estado Sólido 480Gb Sata3\r\n                                - Memoria 16Gb 2400MHz DDR4 Crucial\r\n                                - Placa de Video NVIDIA GTX 1050ti 4Gb Gddr5 Box\r\n                                - Fuente Sentey 80 Plus 550 Real",
        price: 10000,
        stock: 2,
        rating: 5,
        category_id: "2",
        image_path: "pc3.png"
    },
    {
        id: "18",
        name: "Nintendo Wii",
        details: "Nintendo Wii 512MB Standard color blanco",
        description: "Con tu consola Wii tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n                              El control Wii Remote se destaca por su capacidad de detectar movimientos en un determinado espacio lo que te permite una mayor interacción y dinamismo.\r\n                              Adaptada a tus necesidades\r\n                              Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 512 MB.\r\n                              Vas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.",
        price: 20000,
        stock: 10,
        rating: 4,
        category_id: "7",
        image_path: "wii.png"
    },
    {
        id: "2",
        name: "Dell Vostro 3405",
        details: "14 pulgadas, 256GB SDD, 8GB RAM ",
        description: "Notebook DELL Vostro 3405 AMD Ryzen 5 3450u\r\n                              Modelo: V3405_R58GB256\r\n                              Procesador: AMD Ryzen 5 3450U Mobile Processor with Radeon Vega 8 Graphics\r\n                              Memoria: 8GB DDR4\r\n                              Almacenamiento Primario: 256GB M.2 PCIE\r\n                              Almacenamiento secundario: Slot Libre (SATA)\r\n                              Gráfica: Radeon Vega 8 Graphics\r\n                              Teclado: Español, con Ñ Física\r\n                              Pantalla: 14\" HD Anti-Glare\r\n                              Wireless Driver: Wi-Fi 5 (802.11ac)\r\n                              Cámara: Web-Cam HD - fixed focus\r\n                              Batería primaria: 42 WHr, 3-Cell Battery (Integrada)\r\n                              Dimensiones: Ancho: 328 mm / Profundidad: 239 mm / Altura: 19,9 mm\r\n                              Peso: 1,7 Kg\r\n                              Sistema Operativo: No posee\r\n                              Garantía: 1 año de fabrica",
        price: 87999,
        stock: 0,
        rating: 3,
        category_id: "2",
        image_path: "dell-v3557.png"
    },
    {
        id: "17",
        name: "PlayStation 4",
        details: "Sony PlayStation 4 Slim 1TB Standard color negro azabache",
        description: "Con tu consola PlayStation 4 tendrás entretenimiento asegurado todos los días. \r\n                              Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \r\n                              Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1TB GB.\r\n                              Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\n                              Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.",
        price: 120000,
        stock: 2,
        rating: 5,
        category_id: "7",
        image_path: "play4.png"
    },
    {
        id: "11",
        name: "Xbox Series X",
        details: "Microsoft Xbox Series X 1TB Standard color negro",
        description: "La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. \r\n                              Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. \r\n                              Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.",
        price: 169999,
        stock: 5,
        rating: 5,
        category_id: "7",
        image_path: "xbox.png"
    },
    {
        id: "12",
        name: "Super Nintendo ",
        details: "Consola retro Super Nintendo ",
        description: " La Super Nintendoes la segunda videoconsola de sobremesa de Nintendo y la sucesora de Nintendo Entertainment System (NES) en América y Europa.\r\n                               Mantuvo una gran rivalidad en todo el mundo con la Sega Mega Drive (o Sega Genesis) durante la era de 16 bits.",
        price: 10000,
        stock: 1,
        rating: 5,
        category_id: "7",
        image_path: "super nintendo.png"
    },
    {
        id: "1",
        name: "MacBook Pro",
        details: "13 pulgadas, 1TB SDD, 16GB RAM",
        description: "La MacBook Pro de 13 pulgadas trae un procesador Intel de 4 núcleos de décima generación \r\n                              con Turbo Boost de hasta 3,8 GHz e Intel Iris Plus Graphics. También viene con una increíble y colorida pantalla \r\n                              Retina con tecnología True Tone para que todo se vea más natural. Y cuenta con teclado Magic Keyboard retroiluminado, \r\n                              Touch ID y el versátil Touch Bar para que seas más productivo que nunca. Mucho poder en una notebook de 13 pulgadas.",
        price: 470001,
        stock: 2,
        rating: 3,
        category_id: "2",
        image_path: "1655188575macbook-pro.png"
    },
    {
        id: "22",
        name: "Placa de video RTX 3090 ZOTAC",
        details: "Placa De Video Zotac Rtx 3090 Gaming Trinity 24gb Gddr6x D1",
        description: "Especificaciones\r\n\r\nGPU\r\nGeForce RTX 3090\r\nNúcleos CUDA\r\n10496\r\nMemoria de video\r\nGDDR6X de 24 GB\r\nBus de memoria\r\n384 bits\r\nReloj del motor\r\nImpulso: 1695 MHz\r\nReloj de la memoria\r\n19,5 Gbps\r\nPCI-Express\r\n4.0 16x\r\nSalidas de pantalla\r\n3 x DisplayPort 1.4a (hasta 7680x4320 @ 60Hz)\r\nHDMI 2.1 * (hasta 7680x4320 @ 60Hz)\r\n* Se requiere un cable HDMI de ultra alta velocidad para admitir 8K / 60FPS o 4K / 120FPS\r\nSoporte HDCP\r\n2.3\r\nCapacidad de múltiples pantallas\r\nPantalla cuádruple\r\nFuente de alimentación recomendada\r\n750W\r\nEl consumo de energía\r\n350W\r\nEntrada de alimentación\r\n2 x 8 pines\r\nDirectX\r\n12 último\r\nOpenGL\r\n4.6\r\nEnfriamiento\r\nTormenta de hielo 2.0\r\nTamaño de la ranura\r\n2,5 ranura\r\nSLI\r\nListo para NVLink\r\nSO compatible\r\nWindows 10 de 64 bits (compilación 2004 o posterior)\r\nLongitud de la tarjeta\r\n317,8 mm x 120,7 mm x 58 mm / 12,5 'x 4,75' x 2,28 '\r\nAccesorios\r\n2 x cable doble de 6 pines a 8 pines\r\nManual",
        price: 350000,
        stock: 2,
        rating: 5,
        category_id: "8",
        image_path: "16551885281654751840Placa de video RTX 3090 ZOTAC.png"
    },
    {
        id: "7",
        name: "Huawei P30 Pro",
        details: "Huawei P30 Pro 256 GB black 8 GB RAM",
        description: "Fotografía profesional en tu bolsillo\r\n                              Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.\r\n            \r\n                              Perfecta para los amantes del plano detalle. Su zoom óptico te ofrecerá la posibilidad de realizar acercamientos sin que tus capturas pierdan calidad.\r\n            \r\n                              Capacidad y eficiencia\r\n                              Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.\r\n            \r\n                              Desbloqueo facial y dactilar\r\n                              Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.\r\n            \r\n                              Batería de duración superior\r\n                              ¡Desenchufate! Con la súper batería de 4200 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.",
        price: 398999,
        stock: 2,
        rating: 2,
        category_id: "3",
        image_path: "1655188545gr5-2017.jpg"
    }
];

export default products;